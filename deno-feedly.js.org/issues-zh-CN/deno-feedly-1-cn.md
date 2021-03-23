# Deno 双周刊 #1 - Deno 获 2020 JS 年度突破开源奖

## 序言

> 本文原文是笔者写的英文版，目前维护在 GIthub([@hylerrix/deno-feedly](https://github.com/hylerrix/deno-feedly)) 上，以下是亲自翻译。

Deno v1.0 在 2020 年五月 13 日正式登场之时便引起了我的关注。更贴切 Web 本身的理念、TypeScript 开箱即用、各种必备小工具集成在 Deno 本身中、基于 Rust 和 V8、且开启了一个全新的挑战方向...... 所有我想要深入探索的 Web 潮流技术都包含在了其中。

于是我开启了我的 Deno 之旅。写作看似是我更擅长的事情：从去年的 v1 发布开始，我开始在中文社区写了几篇基础入门级的 Deno 文章并翻译了几篇同样是入门级的 Deno 文章（都有着一定的翻译授权）。[@hylerrix/deno-tutorial](https://github.com/hylerrix/deno-tutorial) 和 [@hylerrix/awesome-deno-cn](https://github.com/hylerrix/awesome-deno-cn) 沉淀了我早期对 Deno 的一切理解。同时，整个 2020 年里，我在 [@ningowood/open-source-magazine](https://github.com/ningowood/open-source-magazine) 仓库中写了近 12 期“开源爱好者月刊”，通过收集好文和咨询等来沉淀我对开源的深入理解。

2021 伊始，我准备挑战更多的东西，思路也回到了 Deno。或许像收集好文和咨询的开源爱好者月刊一样来开启新的一年中对 Deno 的深入学习也是个不错的想法。于是今天，我在 Github 上开源了 [@hylerrix/deno-feedly](https://github.com/hylerrix/deno-feedly/) 仓库。Deno 双周刊用来每两周性的收集和分享 Deno 相关的咨询、文章甚至更多。

与众不同的在于，从现在开始，我将用优先用英文来编写技术博客（并花费少量时间来翻译回中文）。对我来说，这是一个全新的体验，因为我之前从来没有用英文写过文章甚至从来没敢这么去想。

所以话说回来，欢迎来到 Deno 双周刊系列。如果有任何不适宜的地方，比如收集咨询、写作甚至分享宣传的过程，欢迎告诉我，我也会尽量处理好。双周刊仓库中也会介绍更多的信息，请戳：[https://github.com/hylerrix/deno-feedly/](https://github.com/hylerrix/deno-feedly.)。

那么开始吧。（对了，刊尾会有更多关于社群的信息可以查收。）

## 快讯

### [Deno 1.6 正式发布](https://deno.land/posts/v1.6)

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610003283055-85dce9e7-4dce-492e-a052-d91d1e3153b2.png#align=left&display=inline&height=287&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1048&originWidth=2106&size=1203494&status=done&style=none&width=576)

Deno 最新的大版本 v1.6.0 在 2020 年 12 月 8 号正式发布，其中引入了几个重要功能并修复了诸多已知 Bug：新的子命令 `deno compile` 和 `deno lsp`，一个实验性的，支持 Mac M1 芯片的 Deno。

正如 `deno fmt` 和 `deno lint`，`deno compile` 和 `deno lsp` 也成为 Deno CLI 的诸多重要工具之一。

- `deno compile` 做到了 Node 中 `nexe`、`pkg` 一样类似的功能：从你的 JavaScript/TypeScript 源码中直接编译出一个独立、自包含的二进制文件。目前这个工具还有一些已知问题，但也有一个良好的未来计划来指导方向。
- `deno lsp` 命令实现了语言服务协议（Language Server Protocol）。LSP 允许编辑器和 Deno 进行数据沟通，以让编辑器获得更多的高级功能，比如代码自动补全、代码格式化甚至悬浮窗文档。`deno lsp` 命令目前还没有开发完成，但已经实现了 LSP 中诸多重要的功能。如果你想现在就在 VSCode 中体验这个命令，需要在 VSCode 中安装 Deno (Canary) 插件。

除此之外，v1.6.0 完成了向更严格类型检查的迁移、兼容了 TypeScript 最新的稳定版 v4.1、提供了一个 Deno 开发版（canary update channel）升级选项 `deno upgrade --canary`、`std/bytes` 模块进行了大修补（这是让 Deno 标准库迈向稳定阶段的第一步）。

### [Deno 获得 JS 2020 开源奖之年度突破奖](https://www.infoq.com/news/2020/10/js-open-source-award-2020/)

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610003835814-bb7e34b6-461b-44ca-be12-17e6b3e5f959.png#align=left&display=inline&height=404&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1568&originWidth=2233&size=1086870&status=done&style=none&width=576)

> 从 2018 年开始，JavaScript 开源大奖（the JavaScript Open Source Awards）每年都会在四个类别下选出最有影响力的开源项目。[Deno](https://deno.land/) 和 [Svelte](https://svelte.dev/) 获得了 2020 年的年度突破奖。从 Deno 的官方介绍来看，Deno 是一个简单、安全的现代 JavaScript 和 TypeScript 运行时。Deno 基于 V8 和 Rust 开发。经过两年的开发，Deno 最终在 2020 年 5 月发布了重要的 v1.0 版本，并且开始做好准备来让生产环境使用。Deno 支持 WebAssembly，使用可编译到 WebAssembly 的语言(Rust、Go、C++等)开发的原生库，可在 Deno 应用程序中运行。

2020 年度其他的三个类型奖项分别颁给了 [Mock Service Worker](https://mswjs.io/)（最激动人心技术应用奖）、[Pose Animater](https://github.com/yemount/pose-animator)（年度最有趣项目奖）、[Perfume.js](https://zizzamia.github.io/perfume/)（对社区最具影响力贡献奖）。此外，还有个生产力促进奖颁给了 [Snowpack](https://www.snowpack.dev/)。

### 以及更多

- Deno LSP 现在在 [Neovim](https://github.com/neovim/nvim-lspconfig/blob/master/CONFIG.md#denols) 中正式可用。
- [Bundler@v0.5.1](https://github.com/timreichen/Bundler/releases/tag/0.5.1) 发布：Bundler 的工作方式类似于 deno bundle，但将 Web 谨记于心。
- [terminal_markdown](https://github.com/littletof/terminal_markdown) 开源：使你能够将 markdown 文本呈现为字符串，该字符串打印在终端上提供了格式化输出，而不只是纯文本。
- [pinyin@0.0.5](https://deno.land/x/pinyin@0.0.5) 发布：转换汉字到拼音。用于语音符号、排序和搜索。
- [littlezip@0.4.0](https://deno.land/x/littlezip@0.4.0) 发布：内存友好的 zip 压缩、解压缩和 deno 框架的单个文件提取器。
- [deno_tag@v1.0.2](https://deno.land/x/deno_tag@v1.0.2) 发布：一个简单的脚本替换 html 文件中出现的 `<deno>` 标签（虽然可以用 bash 来完成，但是为什么不使用 deno 来代替呢？）。
- [dragon@v1.0.6](https://github.com/xanny-projects/dragon/releases/tag/v1.0.6) 发布：强大的 HTTP 路由器和 URL 匹配器，可以使用 Dragon 构建 Deno Web 服务器。
- [drawille@v0.1.0](https://github.com/littledivy/drawille) 发布: 终端上的 HTML5 Canvas，Deno 编写。
- [Emacs-ng issue#33](https://github.com/emacs-ng/emacs-ng/pull/33)：在 Emacs 中通过 Deno/Tokio 来允许 JavaScript。
- [lume](https://github.com/lumeland/lume) 是 Deno 下的一个静态网站生成器，类似于 Jekyll 或 Eleventy。
- [AuthCompanion](https://github.com/pmprosociety/authcompanion) 是基于 token（令牌）的身份验证服务器（Deno 版），可以帮助开放人员更快地搭建 Web 应用程序。

## 好文

### [Deno 1.0](https://deno.land/posts/v1)
![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610011302793-6947ad9c-a08b-462b-a131-5309ab515036.png#align=left&display=inline&height=325&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1277&originWidth=2089&size=5362421&status=done&style=none&width=531)

> 动态语言是很有用的工具。用户可以使用脚本快速简洁地将复杂的系统连接在一起并表达自己的想法，而不必顾虑诸如内存管理或系统构建之类的细节。近年来，像 Rust 和 Go 这样的编程语言让程序员能更轻松地生成复杂的原生代码；这些项目也是计算机基础架构发展历程中极为重要的里程碑。但是，我们认为开发工作中有一个可以应对多种问题领域的强大脚本环境还是非常重要的。

2020 年 5 月 13 日，出于对 JavaScript 是动态语言工具优先的选择的信念，以及让 JavaScript 工具生态效率变得更高、使其与 Web 本身的理念更接近，Deno V1.0 正式发布。实际上，Deno 从 2018 年在 JS Conf EU 的会议中宣布以来，Deno 已经被许多热心的贡献者们开发了近两年。

本文 Deno Land 官方团队介绍了这首个两年内，Deno 的特性和进展。

### [上手 Deno 前你需要了解的一切](https://www.telerik.com/blogs/how-to-get-started-with-deno)

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610023284679-24fa1eaf-778c-4df0-9b53-9890d15382df.png#align=left&display=inline&height=152&margin=%5Bobject%20Object%5D&name=image.png&originHeight=303&originWidth=1200&size=350734&status=done&style=none&width=600)

> 对于 JavaScript 开发人员而言，Deno 很可能会是下一个重大方向。然而这并不意味着 Node.js 会被扫地出门。对那些说 Node.js 已死或 Deno 会完全替代 Node 的话语要谨慎对待。

本文基于 Deno v1.0.5 之上，发布于 2020 年 09 月 02 日，介绍了有关 Deno 运行时的一切（Deno 的安装、基础知识、功能、标准库等）。

### [介绍一下 `<deno>` 标签](https://hugodaniel.com/posts/introducing-deno-tag/)

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610024257758-e30d7494-fb6b-415f-97df-d8826ab4e3fa.png#align=left&display=inline&height=216&margin=%5Bobject%20Object%5D&name=image.png&originHeight=813&originWidth=2312&size=271554&status=done&style=none&width=613)

> Deno 正逐渐受到更多的关注。基于 Rust 语言和 V8 引擎的 TypeScript 运行时，常常会被误认为“新的 Node.js”。但经过尝试后，我觉得 Deno 不仅如此。

有没有可能在 HTML 文件中编写 Deno 代码，就像 PHP 一样？在最近于 2021 年 1 月 6 日发布的这篇文章中，展示了在 HTML 中使用 `<deno>` 标签的想法，就像 `<?php>` 一样。

## 资源

### 视频：[关于 Node.js，我所后悔的 10 件事](https://youtu.be/M3BM9TB-8yA)

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1610026187758-3670942c-6c82-4cf2-8f67-25974e3daf7c.png#align=left&display=inline&height=302&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1338&originWidth=2458&size=4219229&status=done&style=none&width=555)

正如下方评论中所说，一个开发人员能公开谈论他所构建软件的种种缺陷是值得尊敬的事。Node.js 的创建者 Ryan Dahl 在这场会议上首次介绍了 Deno。他对 Node.js 的遗憾包括 Promise、安全性、构建系统（GYP）、package.json、node_modules、`require("module")` 没有扩展名以及 `index.js` 的命名等方面。

### 视频：[100 秒内读懂 Deno](https://youtu.be/F0G9lZ7gecE)

如何在很短的时间内读懂 Deno 的基本概念？可以试试这个。

### 视频：[7 分钟了解 Deno 基础概念](https://youtu.be/VQ8Jb7GLHgk)

在七分钟的视频内，手把手带你安装 Deno，编写 Deno 代码。

## 尾声

到目前为止，使用英语写作的感觉真的挺好。希望你不会错过上方的精彩资讯，也希望我能在开启 Deno Feedly 系列后有更多的编码。

不同的社群有不同的用途，如果你想交流更多有关 Deno 甚至开源本身的知识，我建立了几个聊天室，一会见：

- Github: [https://github.com/hylerrix/deno-tutorial/discussions](https://github.com/hylerrix/deno-tutorial/discussions). 没错，我接下来将会让这个仓库更加的国际化，可以集中在这里畅聊任何有关 Deno 的内容。
- Discord: [https://discord.com/invite/e5uuDMjpFC](https://discord.com/invite/e5uuDMjpFC). 初入 Discord，有趣的是，其支持编写各种资讯机器人。前面的链接是一个仅限前一百个人加入的永久邀请链接（长远来看，估计不会超过这个数量）。
- WeChat: 公众号 ([@ningowood) ](https://www.yuque.com/ningowood))里寻找。
