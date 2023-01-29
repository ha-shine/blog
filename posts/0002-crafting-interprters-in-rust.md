---
title:          "Crafting (Lox) Interpreters in Rust"
description:    "My experience reading the book Crafting Interpreters and building two Lox interpreters using Rust."
created:        "2023-01-29"
last_updated:   "2023-01-29"
---

# Crafting (Lox) Interpreters in Rust

I have just finished reading the book [Crafting Interpreters][the-book] and I had a lot of fun following along in pure Rust, trying to squeeze every last bit of performance from the CPU (although I will admit up front that it wasn't as successful as I would like to be, mostly due to my laziness). I guess the book needs no introduction as it's been in the conversation on Hacker News and Reddit. In fact, I discovered this book when I was scanning the comments on one of them. In the book, the author walked you through building a tree-walking interpreter and a bytecode virtual machine for a language called **Lox**. It is very easy to follow along and I thoroughly enjoyed the author's writing style and their quirky illustrations.

## Lox in Rust

Even though I had some experience using Rust in the past, this was probably the biggest project I have done in Rust, and it gets pretty challenging and frustrating at times. In the first interpreter part, the textbook's implementation (which is called "jlox") is in Java and unlike Java, Rust does not have a garbage collector. So I resorted to using `Rc` as a wrapper around the objects. I realised pretty late in the project that it was an awful decision because you can leak memory easily by creating cycles between classes. I wasn't particularly interested in the interpreter part, so I finished the first part without rectifying this and hence, my interpreter remains a broken mess till today.

In the second part, the author showed how to build a bytecode virtual machine completed with a mark-sweep garbage collector using `C`. Since C is much closer to Rust than Java, I had an easier time following along. Though it wasn't without its own problems as the author has chosen to use pointers liberally throughout the second part (I suppose it's for performance reasons, clox is blazing fast). I think I had more fun (and motivation) following the second part along as I knew my implementation would be more "correct" compared to the Rust version of jlox. The final version was able to pass all the tests from the textbook's repository, and I was stimulated enough to work on optimizing the Rust version further, bringing the execution speed closer to the original C implementation.

## The Safe Rust

You can find my implementation [here][source], together with all the benchmarking I did. I translated the benchmarks to Python and included Python 3.9.2 in my mini benchmarks as well. Sadly, the safe version has pretty terrible numbers compared to the C version (or even Python for that matter), though it's no fault of Rust because I'm a terrible Rust programmer. You can see for yourself in the figure below this paragraph. I am pretty sure someone smarter than me would be able to bring it down much lower using references and clever assortment of lifetimes, but I must admit I am not at that level yet. There are some optimization missing as well, for example, interning strings would have enabled using pointer equality for comparing strings, and it would have definitely improved the `equality` benchmark. I was fully expecting my implementation to suck compared to the original clox, but I was still taken aback by the awful execution times (or rather, I was pleasantly surprised by the performance of clox?).

![Safe benchmark](https://raw.githubusercontent.com/ha-shine/losk/8e049476b5e702558858a1d29106c10f2fc64fc0/assets/benchmarks/1_0_1.png)

## Unsafe Boost
 
With the remaining tiny drop of motivation left, I set out to bring justice for Rust and quicly created an "unsafe" branch where I managed to eek more performance out of Rust. In the safe version, I was indexing into the stack and instruction vector which is much slower compared to pointer arithmetic due to all the bound checking. I refactored them as pointers to behave more closely to the textbook implementation which reduced the execution time by 10-25%. Compared to the `Rc` galore in the safe version, I used normal `Box` for heap allocation and reference to them using raw pointers from the stack. I am still not interning the strings in the unsafe version, which prohibited me from using pointer equality for the `equality` benchmark which would explain the remaining performance gap between the C and Rust version. If I put more time on this, I'm sure I can bring the gap to be much closer to the C version. But the Rust version is easily beating Python this time around, and I was satisfied by the final result. It's pretty cool that you have this unsafe escape hatch for your pointer shenanigans if you need to be closer to the metal, but it's definitely for the faint-hearted.

![Unsafe benchmark](https://raw.githubusercontent.com/ha-shine/losk/unsafe-optimization/assets/benchmarks/unsafe.png)

## The Bad

Throughout this whole experience, the top frustrating thing I have encountered is related to interprocedural conflict. In short, if you are holding onto a subset of fields from a struct immutably in a function with `&mut self`, you can't call another method that takes `&mut self` even if the target method does not touch the fields you were holding. Rust is not intelligent enough (yet) to distinguish between methods that borrow different subsets of the fields. Niko Matsakis have [an interesting blog][nll-blog] about this problem if you're interested. Most of the time, you will need to resort to inlining the functions, which gets in the way of DRY principle and makes the code hideous.

I also found that the debugging experience with Rust is not very good yet. I was using CLion on a Mac and found that the IDE's representation of runtime variables are really lacking compared to other languages. For example, sometimes when you have an enum value, CLion doesn't really show me which variant. Although this doesn't happen to all the values, when it happens, it can be really confusing and gets in the way of my debugging.

## Final Thoughts

All in all, I thoroughly enjoyed the book and had a lot of fun working with Rust. There are some rough edges in the language that needs to be sorted out, with some notable ones mentioned in the previous section. Apart from those, the tooling is excellent, the language is expressive, and I have become more enamored with well-thought-out enum types (or algebraic sum types) and pattern matching. I am not sure whether I would choose Rust as my first choice yet though as I am still struggling with the constraints the compiler imposes on me. Thanks for reading, and I am again recommending you to read the book mentioned here if you're interested in how language compilers are implemented.

[the-book]: https://craftinginterpreters.com/
[source]: https://github.com/ha-shine/losk
[nll-blog]: https://smallcultfollowing.com/babysteps/blog/2018/11/01/after-nll-interprocedural-conflicts/