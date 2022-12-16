---
title:          "The Tech Behind This Blog"
description:    "Unraveling the guts behind the blog you’re reading, the detailed explanation of the technological choices 
                 made and why I built my own instead of hosting on a blogging platform."
created:        "2022-12-15"
last_updated:   "2022-12-15"
---

# The Tech Behind This Blog

In this post, I will show you the bits and pieces of how this blog is built, the technical choices I made and why. There will be two parts to this post. First, I will explain how things fit together. This will serve as an informational blog post for you, the readers, and as a reference for myself as well since I have the memory of a goldfish and will probably forget how everything works in less than a week if I stop working on this. It goes without saying that this post will be updated often.

In the second part, I will give my reasoning on why I made these choices in the best way I can. Although sometimes stuffs are here simply because they are super fun to use and I won't have any strong justification for them. I mean it's my blog, what are you gonna do? Sue me? Anyhow, I will stop my mumbling here, and let's dig in.

## The Components

In essence, this blog is built from amalgamation of these amazing tools:

- [NextJS] for the framework and [Vercel] for hosting
- [Chakra UI] component library for all the styling needs
- [Markdoc] for rendering blog posts
- [PixiJS] for interactive canvas elements
- [date-fns] date utility library

The blog open-sourced on [GitHub][Source], feel free to poke around if you're in the mood. Each individual post is inside it's own Markdoc file under **posts** directory, and contains a front matter metadata block that is used for both rendering and SEO. Everything is statically generated, with no CMS.

## NextJS

During the ideation phase, I had several criteria for a framework (and a platform) to host my blog. I have substantial experience with [React], and I wanted something with server-side rendering support for performance and SEO reasons (although to be frank, I am not well-versed in Frontend Engineering, nor marketing. So here, I might just be regurgitating what others are saying). I don't enjoy working with dynamic languages, so Typescript support was top priority for me as well. Plus I wanted a friction-free platform where I can focus on implementing features and writing blogs rather than maintaining a plethora of tools just to render a markdown document on the web. It was a no-brainer for me to choose NextJS and by extension, Vercel platform. I can't praise the NextJS team enough on how easy it is to start making web applications using the framework. The developer experience is simply one of the best in class. From documentation to deployments, everything just makes sense.


## Chakra UI

My expertise is mainly in the backend (and platform engineering by extension), so writing my own CSS isn't my forte but I still want my blog to look good on multiple devices. I was looking for a UI component system that is:

1. Easy for me to learn
2. Easy to make a responsive website with
3. With accessibility in mind
4. Themeable, composable and works well with [React]

I went with [Chakra UI] for my styling needs. I don't really have any compelling reason for choosing this over other CSS libraries if I'm being honest, this is simply the first one that came up on Google (and of course, checks all boxes).

## Markdoc

For rendering, I used [Markdoc] which is built on top of Markdown. Basically, it's markdown on steroid. You can use Markdoc to create interactive documents by defining custom node definitions (or tags) which can be rendered as react components. This allows me to embed interactive canvas elements like the [boid simulation](https://www.red3d.com/cwr/boids/) below. I was inspired by [Bartosz Cicechanowski] after reading their infamous blog about [GPS](https://ciechanow.ski/gps/) to give a shot at making my blog interactive. If you don't know them I highly recommend you check out their blog posts which are both very educational and entertaining. Currently, all these elements live in the same repository although there is nothing preventing you from extracting these components into separate projects. I have plans to do this in the future if I start embedding more complicated projects on this blog.

{% flockingSimulation %}
{% /flockingSimulation %}

## Why Build This Instead of Using <Insert Established Blogging Platform>

The main reason I've decided to build my own instead of hosting on other already established platforms is the ability to embed these interactive components, you simply cannot do this if you host on other blogging platforms. Maybe you can, I just didn't do a good enough research. Plus I'm an engineer at heart, so it was very fun for me to build this. Which is another gigantic reason, fun! Honestly, it probably wasn't the most optimal use of my time to dabble in something (namely Frontend Engineering) I was not really comfortable with, or build something that is relatively suboptimal compared to the other platforms built by fantastic engineers, but who cares. Life is short, do things which are enjoyable to you. Productivity be damned.

[Markdoc]: https://markdoc.dev/
[Bartosz Cicechanowski]: https://ciechanow.ski/
[NextJS]: https://nextjs.org/
[Chakra UI]: https://chakra-ui.com/
[Source]: https://github.com/ha-shine/blog
[date-fns]: https://date-fns.org/
[React]: https://reactjs.org/
[Vercel]: https://vercel.com/solutions/nextjs
[Bootstrap]: https://getbootstrap.com/
[PixiJS]: https://pixijs.com/