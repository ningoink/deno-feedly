# Deno Feedly #1 - 20210108

## Introduction

When Deno v1.0 released on May 13, 2020, I'm totally obsessed with it. More approach to the ideals of Web, TypeScript out of the box, all essential tools in one binary, based on Rust and V8, and a fresh new community... All the fashion Web tech I want to deep into is included.

So I began my Deno adventure from that time. It seems that writing is something I'm better at. I started writing the most basic article about Deno and make some authorized translations into the Chinese Deno community. [@hylerrix/deno-tutorial](https://github.com/hylerrix/deno-tutorial) and [a@hylerrix/awesome-deno-cn](https://github.com/hylerrix/awesome-deno-cn) condensed all my early understanding of Deno. Meanwhile, in the whole of 2020, I started to write [@ningowood/open-source-magazine](https://github.com/ningowood/open-source-magazine) in the Chinese community to know the philosophy of Open Source deeper by collecting and sharing news and articles monthly.

At the beginning of 2021, I want to challenge myself for more. It goes back to Deno, the fantastic web tech I loved with. Maybe collecting good articles on the web about Deno, just like my [@ningowood/pen-source-magazine](https://github.com/ningowood/open-source-magazine) repo does, is a good way to start as well. So I brought the [@hylerrix/deno-feedly](https://github.com/hylerrix/deno-feedly/) repo into the Github world. Deno Feedly is designed for collecting and sharing news, articles, and more about Deno biweekly.

Different things are, from now on, I will write tech articles all through English (and use a little time to translate back to Chinese). It's a whole new experience for me, I never wrote an English article before and even not dare to think about it.

So again, welcome to the Deno Feedly series. If there is anything, ANYTHING inappropriate about collecting, writing, and sharing, PLEASE let me know and I will try to handle it well. I will introduce more about background info in this repo too, check this link: [https://github.com/hylerrix/deno-feedly/](https://github.com/hylerrix/deno-feedly.).

Let the show begin. (Plus, I will introduce more community info at the end of this issue).

## News

### [Deno 1.6 Released](https://deno.land/posts/v1.6)

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610003283055-85dce9e7-4dce-492e-a052-d91d1e3153b2.png#align=left&display=inline&height=287&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1048&originWidth=2106&size=1203494&status=done&style=none&width=576)

Deno's latest big version v1.6.0 released on Dec 8, 2020, which contains some major features and many bug fixes: new subcommands `deno compile` and `deno lsp`, experimental support for Mac Arm64(M1 chip).

Such as `deno fmt` and `deno lint`, `deno compile` and `deno lsp` is also one of the useful toolchains of utilities in the Deno CLI.

- `deno compile` does for Deno what `nexe` or `pkg` do for Node: create a standalone, self-contained binary from your JavaScript or TypeScript source code. It still has limitations now, but it is being developed under some good future plans.
- `deno lsp` subcommand provides a language server implementing Language Server Protocol. LSP allows editors to communicate with Deno to provide all sorts of advanced features like code completion, linting, and on-hover documentation. The new `deno lsp` subcommand is not yet feature-complete, but it implements many of the main LSP functionalities. If you want to try deno lsp with VSCode, you must install VSCode Deno Canary.

Furthermore, v1.6.0 completed the migration to stricter type checks, ships with the latest stable v4.1 version of TypeScript, provide a canary update channel to pre-code for the next stable Deno release with `deno upgrade --canary`, and `std/bytes` module has seen major overhaul to make the first step towards stabilizing the Deno standard libray.

### [Deno won one of the JavaScript Open Source Awards 2020](https://www.infoq.com/news/2020/10/js-open-source-award-2020/)

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610003835814-bb7e34b6-461b-44ca-be12-17e6b3e5f959.png#align=left&display=inline&height=404&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1568&originWidth=2233&size=1086870&status=done&style=none&width=576)

> Since 2018, the JavaScript Open Source Awards distinguishes impactful open-source projects across four categories every year. [Deno](https://deno.land/) and [Svelte](https://svelte.dev/) received the award for the _Breakthrough of the Year_ category.

Deno, according to its website, is a simple, modern, and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust. After two years of development, Deno eventually reached version 1.0 in May 2020 and is ready to use in production. Deno supports WebAssembly, allowing native libraries written in compiles-to-WebAssembly languages (Rust, Go, C++, and more) to run inside a Deno application.

The other three categories is _The Most Exciting Use of Technology_([Mock Service Worker](https://mswjs.io/)), _Fun Side Project of the Year_([Pose Animator](https://github.com/yemount/pose-animator)), and _The Most Impactful Contribution to the Community_([Perfume.js](https://zizzamia.github.io/perfume/)). And another _Productivity Booster Award_ goes to [Snowpack](https://www.snowpack.dev/).

### Other Quick News

- Deno LSP now officially available in [Neovim](https://github.com/neovim/nvim-lspconfig/blob/master/CONFIG.md#denols).
- [Bundler@v0.5.1](https://github.com/timreichen/Bundler/releases/tag/0.5.1) released: Bundler works similar to deno bundle but with the web in mind.
- [terminal_markdown](https://github.com/littletof/terminal_markdown) open sourced: Enables you, to render a markdown text into a string, which printed in the terminal provides a formatted output, instead of plain text.
- [pinyin@0.0.5](https://deno.land/x/pinyin@0.0.5) released: Convert Han to pinyin. useful for phonetic notation, sorting, and searching.
- [littlezip@0.4.0](https://deno.land/x/littlezip@0.4.0) released: memory-friendly basic zip compression, decompression, and single file extraction for deno framework.
- [deno_tag@v1.0.2](https://deno.land/x/deno_tag@v1.0.2) released: A simple script that replaces `<deno>`  tag occurrences in html files (could be done with bash but why not use deno instead? hehehe).=
- [dragon@v1.0.6](https://github.com/xanny-projects/dragon/releases/tag/v1.0.6) released: A powerful HTTP router and URL matcher for building Deno web servers with dragon.
- [drawille@v0.1.0](https://github.com/littledivy/drawille) released: HTML5 Canvas on the terminal with Deno.
- [Emacs-ng issue#33](https://github.com/emacs-ng/emacs-ng/pull/33) – Run JavaScript in Emacs using Deno/Tokio.
- [lume](https://github.com/lumeland/lume) is a static site generators like Jekyll or Eleventy but its in Deno.
- [AuthCompanion](https://github.com/pmprosociety/authcompanion) is a token-based authentication server (Deno) which helps developers build apps for the web, faster.

## Articles

### [Deno 1.0](https://deno.land/posts/v1)

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610011302793-6947ad9c-a08b-462b-a131-5309ab515036.png#align=left&display=inline&height=325&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1277&originWidth=2089&size=5362421&status=done&style=none&width=531)

> Dynamic languages are useful tools. Scripting allows users to rapidly and succinctly tie together complex systems and express ideas without worrying about details like memory management or build systems. In recent years programming languages like Rust and Go have made it much easier to produce sophisticated native machine code; these projects are incredibly important developments in computer infrastructure. However, we claim it is still important to have a powerful scripting environment that can address a wide range of problem domains.

On May 13, 2020, with the strong belief that JavaScript is the natural choice for dynamic language tooling, and with the hope of making the JavaScript tools ecology more efficient and be more relevant to the ideals of Web itself, Deno v1.0 released. Actually, it has already been developed by many enthusiastic developers for nearly two years since it was first announced in the JS Conf EU, 2018.

In this article, Deno Land, the official Deno team introduced what happened in the first two years of development and it's progress now. 

### [Everything You Need to Know to Get Started with Deno](https://www.telerik.com/blogs/how-to-get-started-with-deno)

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610023284679-24fa1eaf-778c-4df0-9b53-9890d15382df.png#align=left&display=inline&height=152&margin=%5Bobject%20Object%5D&name=image.png&originHeight=303&originWidth=1200&size=350734&status=done&style=none&width=600)

> Deno could become the next big thing for JavaScript developers. However, that doesn't mean Node.js will be swept under the rug. Be cautious about people saying Node.js is dead, or Deno is here to replace it entirely.

This article is upon on Deno v1.0.5, released in Sep 02, 2020, delineating the runtime about Deno (Deno's installation, fundamentals, features, standard library, etc.).

### [Introducing the `<deno>` tag](https://hugodaniel.com/posts/introducing-deno-tag/)

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610024257758-e30d7494-fb6b-415f-97df-d8826ab4e3fa.png#align=left&display=inline&height=216&margin=%5Bobject%20Object%5D&name=image.png&originHeight=813&originWidth=2312&size=271554&status=done&style=none&width=613)

> Deno is gaining traction. A TypeScript runtime based on the Rust language and the V8 engine commonly associated with Node.js, or seen as the "new Node.js". After trying it out, I feel that Deno is much more than that.

What if it would be possible to run Deno from within an HTML file? Yes, like PHP but with Deno munching TypeScript. In this article posted recently (06, Jan, 2021), shows the idea to use `<deno>` tag in HTML just like `<?php>`.

## Resources

### Video: [10 Things I Regret About Node.js](https://youtu.be/M3BM9TB-8yA)

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610026187758-3670942c-6c82-4cf2-8f67-25974e3daf7c.png#align=left&display=inline&height=302&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1338&originWidth=2458&size=4219229&status=done&style=none&width=555)

As the comment said, it is respectful to a developer talking about flaws in the software he built. Ryan Dahl, the creator of Node.js introduced Deno for the first time. And his regret about Node.js contains the _Promise_, _Security_, _Build System(GYP)_, _package.json_, _node_modules_, _require("module")_ without the extension and _index.js_.

### Video: [Deno in 100 Seconds](https://youtu.be/F0G9lZ7gecE)

How to elaborate on the basic concept of Deno to others within 100 seconds? You can try this way.

### Video: [Learn the Basics of Deno in 7 minutes](https://youtu.be/VQ8Jb7GLHgk)

In 7 minutes, you can quickly learn how to install, write, and run in Deno step by step.

## Epilogue

So far, it feels good to write articles in English. Wish you would not miss the excellent info above and wish I can code more and write more after this new Deno Feedly series begin.

Different community have different purposes, I created some server (chat room) where we can communicate about Deno or Open Source more! See u soon:

- Github: [https://github.com/hylerrix/deno-tutorial/discussions](https://github.com/hylerrix/deno-tutorial/discussions). Yeah, I will try to make this repo more international, this is the central discussion place in Github.
- Discord: [https://discord.com/invite/e5uuDMjpFC](https://discord.com/invite/e5uuDMjpFC). I'm new to Discord, it seems like we can program automatic robot on it, so exciting! This is a permanent invite link for the first 100 people (probably won't exceed this amount in the foreseeable future).
- WeChat: Official Account ([@ningowood) ](/ningowood) ) with chat room inside.
