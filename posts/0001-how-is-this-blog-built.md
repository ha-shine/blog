---
title:          "The Tech Behind This Blog"
description:    "Unraveling the guts behind the blog you’re reading, the detailed explanation of the technological choices 
                 made and why I built my own instead of hosting on a blogging platform."
created:        "2022-12-15"
last_updated:   "2022-12-15"
---

# The Tech Behind This Blog

In this post, I will show you the bits and pieces of how this blog is constructed, the technical choices I made and why. There will be two parts to this post. First, I will explain how things fit together. This will serve as an informational blog post for you, the readers, and as a reference for myself as well since I have the memory of a goldfish and will probably forget how everything works in less than a week if I stop working on this. So it goes without saying that this post will be updated often. In the second part, I will give the justifications on why I made these choices. Without further ado, let's dig in.

## The Components

Essentially, this blog is built with these amazing tools and libraries:

- [NextJS] for the framework and [Vercel] for hosting
- [Chakra UI] component library for all the styling needs
- [Markdoc] for rendering blog posts
- [date-fns] date utility library


It is open-sourced on [GitHub][Source]. Each individual post is inside it's own Markdoc file under **posts** directory,
and contains a front matter metadata block that is used for both rendering and SEO.
Everything is statically generated, with no CMS.

## NextJS and Chakra UI

During the ideation phase, I had several criteria for a framework (and a platform) to host my blog. I have substantial experience with [React], and I wanted server-side rendering for performance and SEO. I don't enjoy working with dynamic languages, so Typescript support was top priority for me as well. Plus I wanted a friction-free platform where I can focus on implementing features and writing blogs rather than maintaining a plethora of tools just to render a markdown document on the web. It was a no-brainer for me to choose NextJS and by extension, Vercel platform. I can't praise the NextJS team enough on how easy it is to start making web applications using the framework. The developer experience is simply one of the best in class. From documentation to deployments, everything just makes sense.

My expertise is in the backend, so writing my own CSS wasn't in the cards for me. I was looking for a UI component system (ala [bootstrap][Bootstrap]) that is:

1. Easy for me to learn
2. With accessibility in mind
3. Themeable, composable and works well with [React]

I went with [Chakra UI] for my styling needs. I don't really have any compelling reason for choosing this over other CSS libraries if I'm being honest, this is simply the first one that came up on Google (and of course, checks all boxes).

## Markdoc

TODO: Add boid simulation

For rendering, I used [Markdoc] from Stripe which is built on top of Markdown. You can use Markdoc to create interactive documents by defining custom node definitions which can be rendered as react components. This allows me to embed interactive canvas elements like the boid simulation above. I was inspired to make and embed these interactive elements from the amazing [Bartosz Cicechanowski]. If you don't know them I highly recommend you check out their blog posts which are both very educational and entertaining. Currently, all these components live in the same repository although there is nothing preventing you from extracting these components into separate projects. I have plans to do this in the future if I start embedding more complicated projects on this blog.

## Why Built This Instead of Using Medium, Substack, Ghost, <Insert Blogging Platform>

The main reason I've decided to build my own instead of hosting on already established platforms is the ability to embed these interactive components, you simply cannot do this if you host on the aforementioned platforms. Maybe you can, I just didn't do a good enough research. Plus I'm an engineer at heart, so it was very fun for me to build this. Which is another gigantic reason, **fun**! Maybe it wasn't the most optimal use of my time to dabble in something (namely frontend engineering) I was not really comfortable with, or build something that is relatively suboptimal compared to the other platforms built by fantastic engineers, but who cares. Life is short, do things which are enjoyable to you. Productivity hacks be damned.

[Markdoc]: https://markdoc.dev/
[Bartosz Cicechanowski]: https://ciechanow.ski/
[NextJS]: https://nextjs.org/
[Chakra UI]: https://chakra-ui.com/
[Source]: https://github.com/ha-shine/blog
[date-fns]: https://date-fns.org/
[React]: https://reactjs.org/
[Vercel]: https://vercel.com/solutions/nextjs
[Bootstrap]: https://getbootstrap.com/
