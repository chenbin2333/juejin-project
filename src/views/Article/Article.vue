<template>
  <main class="Article-container">
    <div class="content">
      <!--文章主内容区-->
      <div class="main-area article-area">
        <article class="article">
          <!--文章标题-->
          <h1 class="article-title">如何实现输入框跟随文字内容适配宽度？</h1>
          <div class="author-info-block">
            <!--作者头像-->
            <a href="/user/1538972006755838" target="_blank" rel="" class="avatar-link">
              <img loading="eager"
                   src="https://p9-passport.byteacctimg.com/img/user-avatar/e51ac4db038a1ac3f7903a3b770b3000~300x300.image"
                   alt="" class="avatar">
            </a>
            <div class="author-info-box">
              <div class="author-name">
                <a
                    href="/user/1538972006755838"
                    target="_blank"
                    class="username ellipsis">
                  <span class="name" style="max-width: 128px;">西炒蛋</span>
                  <span blank="true" class="rank">
                  <img
                      src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png"
                      alt="lv-4"
                      title="创作等级">
                </span>
                </a>
              </div>
              <div class="meta-box">
                <time datetime="2022-08-11T08:54:04.000Z"
                      title="Thu Aug 11 2022 16:54:04 GMT+0800 (中国标准时间)" class="time">
                  2022年08月11日 16:54
                </time>
                <span class="views-count">
                    ·&nbsp;&nbsp;阅读 684
                </span> <!---->
              </div> <!---->
            </div>
            <button class="follow-button follow">
              <span class="icon icon-follow">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.18 1C6.29144 1 6.33185 1.0116 6.37259 1.03339C6.41333 1.05518 6.44531 1.08715 6.4671 1.12789C6.48889 1.16864 6.50049 1.20905 6.50049 1.32049V5.5H10.68C10.7914 5.5 10.8319 5.5116 10.8726 5.53339C10.9133 5.55518 10.9453 5.58715 10.9671 5.62789C10.9889 5.66864 11.0005 5.70905 11.0005 5.82049V6.17951C11.0005 6.29095 10.9889 6.33136 10.9671 6.37211C10.9453 6.41285 10.9133 6.44482 10.8726 6.46661C10.8319 6.4884 10.7914 6.5 10.68 6.5H6.50024L6.50049 10.6795C6.50049 10.791 6.48889 10.8314 6.4671 10.8721C6.44531 10.9128 6.41333 10.9448 6.37259 10.9666C6.33185 10.9884 6.29144 11 6.18 11H5.82097C5.70953 11 5.66912 10.9884 5.62838 10.9666C5.58764 10.9448 5.55567 10.9128 5.53388 10.8721C5.51209 10.8314 5.50049 10.791 5.50049 10.6795L5.50024 6.49975L1.32097 6.5C1.20953 6.5 1.16912 6.4884 1.12838 6.46661C1.08764 6.44482 1.05567 6.41285 1.03388 6.37211C1.01209 6.33136 1.00049 6.29095 1.00049 6.17951V5.82049C1.00049 5.70905 1.01209 5.66864 1.03388 5.62789C1.05567 5.58715 1.08764 5.55518 1.12838 5.53339C1.16912 5.5116 1.20953 5.5 1.32097 5.5L5.50049 5.49975V1.32049C5.50049 1.20905 5.51209 1.16864 5.53388 1.12789C5.55567 1.08715 5.58764 1.05518 5.62838 1.03339C5.66912 1.0116 5.70953 1 5.82097 1H6.18Z" fill="#1E80FF"/>
</svg>
              </span>
              <span data-text="取消关注" class="text">关注</span></button>
          </div>
          <div class="article-content" v-html="articleContent">

          </div>
        </article>
        <!--        评论区-->
        <div></div>
      </div>
      <ArticleLeft></ArticleLeft>
      <ArticleRight></ArticleRight>
    </div>
  </main>
</template>

<script>
import ArticleLeft from "@/views/Article/ArticleRight";
import ArticleRight from "@/views/Article/ArticleLeft"

export default {
  name: "Article",
  data() {

    return {
      articleContent: `<div class="markdown-body"><style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:16px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:24px;margin-bottom:5px}.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{font-size:20px}.markdown-body h2{padding-bottom:12px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第1天，<a href="https://juejin.cn/post/7123120819437322247" title="https://juejin.cn/post/7123120819437322247" target="_blank">点击查看活动详情</a></p>
<p>区块链行业已经达到了一个相对成熟的阶段，它由几个竞争性的生态系统组成，这些生态系统统治着市场并决定了未来项目的条款。</p>
<blockquote>
<p>目前，已经拥有了一个庞大的 EVM 区块链生态系统，包括以太坊、币安智能链、Polygon、Avalanche 等。还有两个基于互操作性连接不同生态系统的大项目：Polkadot 与基于 Substrate 的项目和Cosmos 与 Cosmos SDK 兼容的项目。此外，还可以找到一些年轻、快节奏的生态系统（Solana 或 Secret Network）、自给自足的 DFINITY 以及相当古老但仍然值得的 Telos 和 EOS 生态系统，更不用说整个比特币分叉和山寨链家族了。</p>
</blockquote>
<p>根据自己团队情况为项目选择的适合的生态系统，将会遇到这些区块链和框架中使用的不同编程语言的问题，主要的困难是选择最适合的那个。</p>
<p>本文将分享在开发真正永恒的产品时应该考虑的顶级区块链编码语言，将描述这些语言的优缺点，以及它们的创建的历史。希望这将帮助下定决心并找到一个经验丰富的团队来帮助构建一个出色的项目。本文将主要分享用于现代智能合约和 dApps 开发的顶级区块链编程语言。明智地选择，不要忘记为团队聘请经验丰富的开发人员，以充分利用选择的语言！</p>
<h3 data-id="heading-0">Rust：区块链开发的最佳编程语言</h3>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53c80fead8384ef6bd95ff6995bfdd6d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="rust.png" loading="lazy" class="medium-zoom-image"></p>
<p>Rust 是一种相对年轻的编程语言，已经在区块链行业证明了它的效率。不久前，它被 Parity 带到了聚光灯下，Parity 已经开发了一个相关的以太坊客户端。</p>
<p>Parity 的创始人之一，Gavin Wood，在他关于可互操作区块链 Polkadot 及其框架 Substrate 的演讲中，很快为 Rust 的大规模采用做出了巨大贡献。此后，区块链市场的其他大玩家开始欣赏 Rust 语言及其优势。正因为这一点，现在可以使用像 Solana、NEAR、Secret Network 和其他在技术边缘工作的年轻区块链这样的高速网络。</p>
<h4 data-id="heading-1">什么是 Rust</h4>
<p>Rust 是一种多范式编程语言，专为提高性能和安全性而创建。它提供了出色的文档、大量的工具以及带有有用错误消息的友好编译器。</p>
<p>Rust 可能是智能合约开发最有效的编程语言，因为它可以为项目团队以及希望为协议做出贡献的开源开发人员提供高效的协作工作。Rust 语言允许程序员在没有任何麻烦或微管理的情况下控制低级细节，提供了技术能力和编码经验的完美平衡。</p>
<p>最重要的是，Rust 通过实时编译器实现一流的速度和稳定性，该编译器通过功能添加和重构检查代码。因此，这种语言符合区块链开发的所有主要要求等等。</p>
<h4 data-id="heading-2">Rust 优势</h4>
<ul>
<li>明确的发展路线；</li>
<li>零成本抽象；</li>
<li>速度;</li>
<li>内存效率；</li>
<li>可靠性;</li>
<li>由于使用了 WASM 的自我升级功能；</li>
<li>基于并发的机制；</li>
<li>管理可变状态</li>
</ul>
<h4 data-id="heading-3">Rust 区块链实例</h4>
<ul>
<li><code>Solana</code> — 一种高性能区块链，可提供增长最快的加密生态系统。它提供低成本交易（开发人员和用户不到 0.01 美元）和极快的速度（400 毫秒的出块时间）。</li>
<li><code>Substrate</code> — 一个区块链框架，允许开发人员快速轻松地为任何用例构建定制的区块链。</li>
<li><code>NEAR</code> ——一个完整的生态系统，包括一个分片、权益证明、第一层区块链、一个基金会，以及一个由开发人员、企业和创意人员组成的庞大的社区成员网络。</li>
<li><code>Parity.io</code> — 一种去中心化网络的区块链基础设施，允许协议大规模无缝运行并进入 <code>Web3.0</code> 世界。</li>
<li><code>Polkadot</code> — 一个去中心化的 <code>Web3.0</code> 区块链网络，可实现跨链互操作性和可扩展性。</li>
</ul>
<blockquote>
<p>如果想在区块链行业使用快速网络和新概念，或者如果想为 Solana 或 NEAR 进行开发，请选择 Rust。</p>
</blockquote>
<h3 data-id="heading-4">Go</h3>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96713bea3b8e451491495cdf853af40d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="go.png" loading="lazy" class="medium-zoom-image"></p>
<p>Go 已经在区块链世界名声大噪，和 Rust 的故事类似，都是从以太坊开始的。准确地说，它始于 Geth，一个以太坊 Go 客户端，目前是所有以太坊客户端中最广泛的解决方案。</p>
<p>区块链社区采用 Go 的下一阶段与引入 Cosmos 互操作链及其 Cosmos SDK（用于快速区块链开发的框架）相关。然后，Go 的普及是由于 Tendermint，这是一种由许多区块链客户端集成的 BFT 共识。最终，目前，Go 是一种非常普遍的编程语言，以多种方式使用。</p>
<h4 data-id="heading-5">什么是Go</h4>
<p>Go（通常称为 Golang）是一种开源编程语言，它以 Google 的 C 语言为模型，目前用于多种用途。</p>
<p>Golang 是当今最好的区块链编程语言之一，因为它具有简单易读的语法和快速的编译时间。它是一种支持同时编程的单一语言，这对许多团队来说非常有益。此外，与其他编码语言，尤其是传统语言相比，从长远来看，它相对容易维护和高效。</p>
<h4 data-id="heading-6">优势</h4>
<ul>
<li>非常容易学习；</li>
<li>可读性和可用性；</li>
<li>高速性能；</li>
<li>易于长期维护；</li>
<li>高效的;</li>
<li>适用于高性能程序和分布式生态系统。</li>
</ul>
<h4 data-id="heading-7">实例</h4>
<ul>
<li><code>Go-Ethereum</code> — 以太坊协议的三个原始实现之一（以及 C++ 和 Python）。目前，它既可以作为名为 Geth 的独立客户端使用，也可以作为可以嵌入到 Go、Android 或 iOS 项目中的库使用。</li>
<li><code>Cosmos</code>——一个不断扩展的互连应用程序和服务生态系统，与 IBC（区块链间通信协议）连接。</li>
<li><code>Hyperledger Fabric</code> — 由 Linux 基金会托管的开源区块链框架。它是模块化和多功能的，允许创建各种 dApp 和区块链解决方案。</li>
</ul>
<blockquote>
<p>如果正在寻找一种可以在 EVM 链和新的替代链中轻松学习和使用的编程语言，请选择 Go。</p>
</blockquote>
<h3 data-id="heading-8">C++</h3>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8efb8871d7934e33b3afc822d72f9e26~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="c++.png" loading="lazy" class="medium-zoom-image"></p>
<p><code>C++</code> 是一种标志性的编程语言，因为中本聪本人使用它来创建比特币链。这意味着整个 altchain 家族，包括 Litecoin、PIVX、Qtum、Dogecoin 等等，都是用 <code>C++</code> 构建的。</p>
<p>此外，<code>C++</code> 语言用于开发 EOS 和 Telos 区块链及其智能合约框架。</p>
<h4 data-id="heading-9">什么是 C++？</h4>
<p><code>C++</code> 是最古老的通用编程语言之一，也被许多世界著名的项目用作区块链编码语言。</p>
<p>尽管 <code>C++</code> 于 1985 年首次使用，但它仍然是区块链开发人员和 DeFi 产品的热门选择。主要原因是它提供了对任何区块链都必不可少的精致的 CPU 和内存控制，以及高效率、代码隔离和编译时多态性。</p>
<h4 data-id="heading-10">C++ 优势</h4>
<ul>
<li>高效的 CPU 管理和内存控制；</li>
<li>易于运行并行/非并行线程；</li>
<li>移动语义以有效复制数据的选项；</li>
<li>用于增强性能的编译时多态性；</li>
<li>不同数据结构的代码隔离等等。</li>
</ul>
<h4 data-id="heading-11">实例</h4>
<p><code>比特币</code>：世界上第一个区块链和第一个加密货币。作为一种电子点对点货币，比特币已经超过了 6 万美元的门槛，预计将再次升值。
<code>莱特币</code>：从比特币分叉出来的第二古老的加密货币，并成为最早的已知山寨币之一。
<code>Ripple</code>：领先的区块链解决方案提供商之一，创建了实时总结算系统、货币兑换和汇款网络，以及其他发展。
<code>Stellar</code>：一个用于货币和支付的开源网络，提供钱包和去中心化交易所，实现快速加密、外汇和证券交易。
<code>EOS</code>：一种开源区块链协议，允许程序员开发、托管和运行 dApp。EOS 旨在每秒处理数百万笔交易，并提供一流的可扩展性和灵活性。</p>
<blockquote>
<p>如果需要许多区块链开发人员都知道的旧的、可靠的编程语言，请选择 <code>C++</code>，可以将它用于构建区块链和智能合约。</p>
</blockquote>
<h3 data-id="heading-12">Solidity：智能合约开发的最佳编程语言</h3>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d96465a202f7441a8aea7c4372794710~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="Solidity.png" loading="lazy" class="medium-zoom-image"></p>
<p>受 C++、Python 和 JavaScript 的影响，Solidity 继承了这些语言的所有优点，成为智能合约开发最常用的编程语言。</p>
<p>来自世界各地的开发者选择 Solidity 是因为它的可访问性、精确性和极高的灵活性，在区块链行业受到高度重视。从 Uniswap 到 Chainlink，整个 DeFi 领域都是在 Solidity 的帮助下构建的。大多数项目都选择它进行智能合约开发，这也难怪它简洁、定义明确、易于学习和使用。</p>
<h4 data-id="heading-13">什么是Solidity？</h4>
<p>Solidity 是一种面向对象的高级编程语言，专为在以太坊虚拟机 (EVM) 上运行智能合约而创建。这使得 Solidity 非常适合在区块链上开发智能合约和 dApp。</p>
<p>Solidity 与 JavaScript 非常相似，这意味着它对大多数开发人员来说很容易学习。更重要的是，它是目前发展最快的编程语言之一，因此可以肯定地说，在未来，它会更加开发人员友好且易于学习。</p>
<h4 data-id="heading-14">Solidity 的优势</h4>
<ul>
<li>对开发人员友好；</li>
<li>对 JavaScript 基础设施、调试器和其他工具的可访问性；</li>
<li>静态类型编程；</li>
<li>智能合约中继承属性的可能性；</li>
<li>精确的准确性。</li>
</ul>
<h4 data-id="heading-15">实例</h4>
<ul>
<li><code>以太坊</code>：所有在以太坊上运行的智能合约都是用 Solidity 制作的。该语言是专门为在 EVM 上开发和运行程序而创建的。</li>
<li><code>Chainlink</code>：Solidity用于在 Chainlink 上创建智能合约，Chainlink 是一个去中心化的预言机网络，可以在区块链内外进行计算。</li>
<li><code>Uniswap</code>：一个由协议、加密货币交易所、不断增长的 DeFi 应用程序网络以及许多其他基础设施组成的生态系统，这些都由社区管理。Uniswap 也是在 Solidity 的帮助下构建的。</li>
<li><code>Compound</code>：以太坊区块链上建立货币市场的协议。它是一种算法、自主的利率协议，旨在创建各种 dApp。复合智能合约是使用 Solidity 创建的。</li>
</ul>
<blockquote>
<p>选择 Solidity 来开发智能合约，因为它是用于此目的的完美语言。</p>
</blockquote>
<h3 data-id="heading-16">Motoko</h3>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e428e179b6814486896d9b52d195576f~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="Motoko.png" loading="lazy" class="medium-zoom-image"></p>
<p>Motoko 是 DFINITY 生态系统中用于智能合约开发的编程语言的绝佳选择。</p>
<p>如果你还没有听说过 DFINITY，它是一个开发互联网计算机的非营利组织，它是一个基于互联网计算机协议（ICP）的公共区块链网络平台。这是一个相当孤立的链，它是从无法关闭的世界计算机的概念中创建的，并且仅在 2021 年推出。</p>
<p>目前，DFINITY 拥有自己独立的 DeFi 生态系统，其工作方式类似于我们习惯的现代 DeFi。唯一的区别是它是用 Motoko 编写的，与常规的 EVM 链没有任何联系。</p>
<p>由于 DFINITY 的孤立性，Motoko 语言仍然有需求，可以与 EVM 链和 Solidity 竞争。</p>
<h4 data-id="heading-17">什么是Motoko？</h4>
<p>Motoko 是一种相对较新的编程语言，由 DFINITY 基金会创建，用于直接在 Internet 计算机上开发智能合约。该语言在创建时考虑到了区块链技术，因此旨在确保安全性和通用性，同时为方便和快速的 dApp 开发提供所有必要的工具，并支持互联网计算机的独特功能。</p>
<p>Motoko 为 Internet 计算机容器（智能合约）、顺序样式、简单的现代编码样式和多种功能提供本机支持，以帮助您利用正交持久性。所有这些特性使它成为互联网计算机生态系统的一种简单而安全的语言。</p>
<h4 data-id="heading-18">Motoko优势</h4>
<ul>
<li>自动内存管理；</li>
<li>生产力和安全特性；</li>
<li>内置对正交持久性的支持；</li>
<li>固定精度算术。</li>
</ul>
<h4 data-id="heading-19">实例</h4>
<ul>
<li><code>互联网计算机</code>：一种现代公共区块链，允许部署安全、自主和防篡改的容器（智能合约）并以网络速度运行它们。</li>
</ul>
<blockquote>
<p>如果希望项目成为 DFINITY 生态系统的一部分，请选择 Motoko。使用这种语言进行智能合约开发。</p>
</blockquote>
<h3 data-id="heading-20">总结</h3>
<p>有很多值得注意的生态系统拥有大量用于开发区块链解决方案的编程语言，但最终，需要选择一种。这不是最容易做出的选择，因此要顺利完成整个过程，应该首先专注于选择生态系统。然而，生态系统的选择也强加了编码语言，以及一定程度的专业知识。</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style></div>`,
//       articleContent: `<div class="markdown-body"><style>.markdown-body{color:#383838;font-size:15px;line-height:30px;letter-spacing:2px;word-break:break-word;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;scroll-behavior:smooth;background-image:linear-gradient(0deg,transparent 24%,rgba(201,195,195,.329) 25%,hsla(0,8%,80.4%,.05) 26%,transparent 27%,transparent 74%,hsla(0,5.2%,81%,.185) 75%,rgba(180,176,176,.05) 76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%,rgba(204,196,196,.226) 25%,hsla(0,4%,66.1%,.05) 26%,transparent 27%,transparent 74%,hsla(0,5.2%,81%,.185) 75%,rgba(180,176,176,.05) 76%,transparent 77%,transparent);background-color:#fff;background-size:50px 50px;padding-bottom:60px}.markdown-body ::selection{color:#fff;background-color:#a862ea}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin:24px 0 12px;color:#a862ea}.markdown-body h1{line-height:2;font-size:1.4em}.markdown-body h1~p:first-of-type:first-letter{color:#a862ea;float:left;font-size:2em;margin-right:.4em;font-weight:bolder}.markdown-body h2{font-size:1.2em}.markdown-body h3{font-size:1.1em}.markdown-body ol,.markdown-body ul{padding-left:2em}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;padding-left:.2em}.markdown-body ol li::marker,.markdown-body ul li::marker{color:#a862ea}.markdown-body ol li.task-list-item,.markdown-body ul li.task-list-item{list-style:none}.markdown-body ol li.task-list-item ol,.markdown-body ol li.task-list-item ul,.markdown-body ul li.task-list-item ol,.markdown-body ul li.task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:10px}.markdown-body a,.markdown-body code,.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6,.markdown-body li,.markdown-body p{opacity:.85;vertical-align:baseline;transition:all .1s ease}.markdown-body a:hover,.markdown-body code:hover,.markdown-body h1:hover,.markdown-body h2:hover,.markdown-body h3:hover,.markdown-body h4:hover,.markdown-body h5:hover,.markdown-body h6:hover,.markdown-body li:hover,.markdown-body p:hover{opacity:1}.markdown-body a{display:inline-block;color:#a862ea;cursor:pointer;text-decoration:none;position:relative}.markdown-body a:after{content:"";position:absolute;width:98%;height:1px;bottom:0;left:0;transform:scaleX(0);background-color:#a862ea;transform-origin:bottom right;transition:transform .3s ease-in-out}.markdown-body a:hover:after{transform:scaleX(1);transform-origin:bottom left}.markdown-body a:active,.markdown-body a:link{color:#a862ea}.markdown-body img{max-width:100%;user-select:none;margin:1em 0;transition:transform .2s ease 0s;background-color:#f8f5ff;box-shadow:0 0 10px #e7daff}.markdown-body img:hover{opacity:1;box-shadow:0 0 20px #e7daff;transform:translateY(-1px)}.markdown-body blockquote{padding:.5em 1em;margin:12px 0;border-top-left-radius:2px;border-bottom-left-radius:2px;border-left:3px solid #a862ea;background-color:#f8f5ff}.markdown-body blockquote>p{margin:0}.markdown-body .math{font-style:italic;margin:12px 0;padding:.5em 1em;background-color:#f8f5ff}.markdown-body .math>p{margin:0}.markdown-body code{padding:2px .4em;overflow-x:auto;color:#a862ea;font-weight:700;word-break:break-word;font-family:Operator Mono,Consolas,Monaco,Menlo,monospace;background-color:#f8f5ff}.markdown-body pre{margin:2em 0}.markdown-body pre>code{display:block;padding:1.5em;word-break:normal;font-size:.9em;font-style:normal;font-weight:400;font-family:Operator Mono,Consolas,Monaco,Menlo,monospace;line-height:18px;color:#383838;border-radius:2px;scroll-behavior:smooth;box-shadow:0 0 10px #e7daff}.markdown-body pre>code:hover{box-shadow:0 0 20px #e7daff}.markdown-body pre>code::-webkit-scrollbar{height:6px;background-color:#f8f5ff}.markdown-body pre>code::-webkit-scrollbar-thumb{background-color:#e7daff;border-bottom-left-radius:3px;border-bottom-right-radius:3px}.markdown-body hr{margin:2em 0;border-top:1px solid #a862ea}.markdown-body table{width:100%;font-size:12px;max-width:100%;overflow:auto;border-collapse:collapse}.markdown-body thead{color:#a862ea;background:#f8f5ff}.markdown-body td,.markdown-body th{padding:.5em;border:1px solid #e7daff}.markdown-body tr{background-color:#f8f5ff}@media (max-width:720px){.markdown-body{font-size:12px}}</style><p>“这是我参与8月更文挑战的第8天，活动详情查看：&nbsp;<a href="https://juejin.cn/post/6987962113788493831" title="https://juejin.cn/post/6987962113788493831" target="_blank">8月更文挑战</a>”</p>
// <hr>
// <p>不知不觉，已是八月中旬。最近有很多大四的小伙伴都在跟我谈论<strong>秋招面试</strong>的问题，其实对于面试，我也没有太多的经验，只能默默地把之前整理的前端面试题分享给Ta。今天就来大致的梳理一下前端的面试体系（每一部分最后都有相应的面试题参考答案哦）。</p>
// <h3 data-id="heading-0">1. 前端知识体系</h3>
// <p>在说前端面试体系之前，先来看一下之前整理的前端知识体系图（可能不太完整，毕竟我只是一个刚毕业一个多月的小菜鸡），这只是一个基础版的前端知识体系图，适合刚入门前端的小伙伴参考，大佬勿喷：
// <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e752a753f4a04bae948f410d483d9b83~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="前端.png" loading="lazy" class="medium-zoom-image"></p>
// <h3 data-id="heading-1">2. HTML</h3>
// <h4 data-id="heading-2">（1）面试题目</h4>
// <p>常考的HTML面试题：</p>
// <ol>
// <li>src和href的区别</li>
// <li>对HTML语义化的理解</li>
// <li>DOCTYPE(⽂档类型) 的作⽤</li>
// <li>script标签中defer和async的区别</li>
// <li>常⽤的meta标签有哪些</li>
// <li>HTML5有哪些更新</li>
// <li>img的srcset属性的作⽤？</li>
// <li>行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？</li>
// <li>说一下 web worker</li>
// <li>HTML5的离线储存怎么使用，它的工作原理是什么</li>
// <li>浏览器是如何对 HTML5 的离线储存资源进行管理和加载？</li>
// <li>title与h1的区别、b与strong的区别、i与em的区别？</li>
// <li>iframe 有那些优点和缺点？</li>
// <li>label 的作用是什么？如何使用？</li>
// <li>Canvas和SVG的区别</li>
// <li>head 标签有什么作用，其中什么标签必不可少？</li>
// <li>文档声明（Doctype）和有何作用? 严格模式与混杂模式如何区分？它们有何意义?</li>
// <li>浏览器乱码的原因是什么？如何解决？</li>
// <li>渐进增强和优雅降级之间的区别</li>
// <li>说一下 HTML5 drag API</li>
// </ol>
// <h4 data-id="heading-3">（2）思维导图</h4>
// <p>下图对HTML面试题的考察频率进行了大致的区分，可以选择性的学习：
// <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/469624491eda40dabdecfe2fbb45a6aa~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="HTML面试题.png" loading="lazy" class="medium-zoom-image"></p>
// <h4 data-id="heading-4">（3）答案解析</h4>
// <p><strong>既然有面试题，那面试题答案也是必不可少的，参考文章：</strong><a href="https://juejin.cn/post/6905294475539513352" target="_blank" title="https://juejin.cn/post/6905294475539513352"><strong>「2021」高频前端面试题汇总之HTML篇</strong></a></p>
// <h3 data-id="heading-5">2. CSS</h3>
// <h4 data-id="heading-6">（1）面试题目</h4>
// <p>常考的CSS面试题：</p>
// <p><strong>一、CSS基础</strong></p>
// <ol>
// <li>
// <p>CSS选择器及其优先级</p>
// </li>
// <li>
// <p>CSS中可继承与不可继承属性有哪些</p>
// </li>
// <li>
// <p>display的属性值及其作用</p>
// </li>
// <li>
// <p>display的block、inline和inline-block的区别</p>
// </li>
// <li>
// <p>隐藏元素的方法有哪些</p>
// </li>
// <li>
// <p>link和@import的区别</p>
// </li>
// <li>
// <p>transition和animation的区别</p>
// </li>
// <li>
// <p>display:none与visibility:hidden的区别</p>
// </li>
// <li>
// <p>伪元素和伪类的区别和作用？</p>
// </li>
// <li>
// <p>对requestAnimationframe的理解</p>
// </li>
// <li>
// <p>对盒模型的理解</p>
// </li>
// <li>
// <p>为什么有时候⽤translate来改变位置⽽不是定位？</p>
// </li>
// <li>
// <p>li 与 li 之间有看不见的空白间隔是什么原因引起的？如何解决？</p>
// </li>
// <li>
// <p>CSS3中有哪些新特性</p>
// </li>
// <li>
// <p>替换元素的概念及计算规则</p>
// </li>
// <li>
// <p>常见的图片格式及使用场景</p>
// </li>
// <li>
// <p>对 CSSSprites 的理解</p>
// </li>
// <li>
// <p>什么是物理像素，逻辑像素和像素密度，为什么在移动端开发时需要用到@3x, @2x这种图片？</p>
// </li>
// <li>
// <p>margin 和 padding 的使用场景</p>
// </li>
// <li>
// <p>对line-height 的理解及其赋值方式</p>
// </li>
// <li>
// <p>CSS 优化和提高性能的方法有哪些？</p>
// </li>
// <li>
// <p>CSS预处理器/后处理器是什么？为什么要使用它们？</p>
// </li>
// <li>
// <p>::before 和 :after 的双冒号和单冒号有什么区别？</p>
// </li>
// <li>
// <p>display:inline-block 什么时候会显示间隙？</p>
// </li>
// <li>
// <p>单行、多行文本溢出隐藏</p>
// </li>
// <li>
// <p>Sass、Less 是什么？为什么要使用他们？</p>
// </li>
// <li>
// <p>对媒体查询的理解？</p>
// </li>
// <li>
// <p>对 CSS 工程化的理解</p>
// </li>
// <li>
// <p>如何判断元素是否到达可视区域</p>
// </li>
// <li>
// <p>z-index属性在什么情况下会失效</p>
// </li>
// <li>
// <p>CSS3中的transform有哪些属性
// <strong>二、页面布局</strong></p>
// </li>
// <li>
// <p>常见的CSS布局单位</p>
// </li>
// <li>
// <p>px、em、rem的区别及使用场景</p>
// </li>
// <li>
// <p>两栏布局的实现</p>
// </li>
// <li>
// <p>三栏布局的实现</p>
// </li>
// <li>
// <p>水平垂直居中的实现</p>
// </li>
// <li>
// <p>如何根据设计稿进行移动端适配？</p>
// </li>
// <li>
// <p>对Flex布局的理解及其使用场景</p>
// </li>
// <li>
// <p>响应式设计的概念及基本原理</p>
// </li>
// </ol>
// <p><strong>三、定位与浮动</strong></p>
// <ol>
// <li>为什么需要清除浮动？清除浮动的方式</li>
// <li>使用 clear 属性清除浮动的原理？</li>
// <li>对BFC的理解，如何创建BFC</li>
// <li>什么是margin重叠问题？如何解决？</li>
// <li>元素的层叠顺序</li>
// <li>position的属性有哪些，区别是什么</li>
// <li>display、float、position的关系</li>
// <li>absolute与fixed共同点与不同点</li>
// <li>对 sticky 定位的理解</li>
// </ol>
// <p><strong>四、场景应用</strong></p>
// <ol>
// <li>实现一个三角形</li>
// <li>实现一个扇形</li>
// <li>实现一个宽高自适应的正方形</li>
// <li>画一条0.5px的线</li>
// <li>设置小于12px的字体</li>
// <li>如何解决 1px 问题？</li>
// </ol>
// <h4 data-id="heading-7">（2）思维导图</h4>
// <p>下图对CSS面试题的考察频率进行了大致的区分，可以选择性的学习：
// <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64931630a728403bb0caa99f86f5f662~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="CSS面试题.png" loading="lazy" class="medium-zoom-image"></p>
// <h4 data-id="heading-8">（3）答案解析</h4>
// <p><strong>既然有面试题，那面试题答案也是必不可少的，参考文章：</strong><a href="https://juejin.cn/post/6905539198107942919" target="_blank" title="https://juejin.cn/post/6905539198107942919">「2021」高频前端面试题汇总之CSS篇</a></p>
// <h3 data-id="heading-9">3. JavaScript</h3>
// <h4 data-id="heading-10">（1）面试题目</h4>
// <p><strong>一、数据类型</strong></p>
// <ol>
// <li>JavaScript有哪些数据类型，它们的区别？</li>
// <li>数据类型检测的方式有哪些</li>
// <li>判断数组的方式有哪些</li>
// <li>null和undefined区别</li>
// <li>typeof null 的结果是什么，为什么？</li>
// <li>intanceof 操作符的实现原理及实现</li>
// <li>为什么0.1+0.2 ! == 0.3，如何让其相等</li>
// <li>如何获取安全的 undefined 值？</li>
// <li>typeof NaN 的结果是什么？</li>
// <li>isNaN 和 Number.isNaN 函数的区别？</li>
// <li>== 操作符的强制类型转换规则？</li>
// <li>其他值到字符串的转换规则？</li>
// <li>其他值到数字值的转换规则？</li>
// <li>其他值到布尔类型的值的转换规则？</li>
// <li>|| 和 &amp;&amp; 操作符的返回值？</li>
// <li>Object.is() 与比较操作符 “===”、“==” 的区别？</li>
// <li>什么是 JavaScript 中的包装类型？</li>
// <li>JavaScript 中如何进行隐式类型转换？</li>
// <li>+操作符什么时候用于字符串的拼接？</li>
// <li>为什么会有BigInt的提案？</li>
// <li>object.assign和扩展运算法是深拷贝还是浅拷贝，两者区别</li>
// </ol>
// <p><strong>二、ES6</strong></p>
// <ol>
// <li>let、const、var的区别</li>
// <li>const对象的属性可以修改吗</li>
// <li>如果new一个箭头函数的会怎么样</li>
// <li>箭头函数与普通函数的区别</li>
// <li>箭头函数的this指向哪⾥？</li>
// <li>扩展运算符的作用及使用场景</li>
// <li>Proxy 可以实现什么功能？</li>
// <li>对对象与数组的解构的理解</li>
// <li>如何提取高度嵌套的对象里的指定属性？</li>
// <li>对 rest 参数的理解</li>
// <li>ES6中模板语法与字符串处理</li>
// </ol>
// <p><strong>三、JavaScript基础</strong></p>
// <ol>
// <li>
// <p>new操作符的实现原理</p>
// </li>
// <li>
// <p>map和Object的区别</p>
// </li>
// <li>
// <p>map和weakMap的区别</p>
// </li>
// <li>
// <p>JavaScript有哪些内置对象</p>
// </li>
// <li>
// <p>常用的正则表达式有哪些？</p>
// </li>
// <li>
// <p>对JSON的理解</p>
// </li>
// <li>
// <p>JavaScript脚本延迟加载的方式有哪些？</p>
// </li>
// <li>
// <p>JavaScript 类数组对象的定义？</p>
// </li>
// <li>
// <p>数组有哪些原生方法？</p>
// </li>
// <li>
// <p>Unicode、UTF-8、UTF-16、UTF-32的区别？</p>
// </li>
// <li>
// <p>常见的位运算符有哪些？其计算规则是什么？</p>
// </li>
// <li>
// <p>为什么函数的 arguments 参数是类数组而不是数组？如何遍历类数组?</p>
// </li>
// <li>
// <p>什么是 DOM 和 BOM？</p>
// </li>
// <li>
// <p>对类数组对象的理解，如何转化为数组</p>
// </li>
// <li>
// <p>escape、encodeURI、encodeURIComponent 的区别</p>
// </li>
// <li>
// <p>对AJAX的理解，实现一个AJAX请求</p>
// </li>
// <li>
// <p>JavaScript为什么要进行变量提升，它导致了什么问题？</p>
// </li>
// <li>
// <p>什么是尾调用，使用尾调用有什么好处？</p>
// </li>
// <li>
// <p>ES6模块与CommonJS模块有什么异同？</p>
// </li>
// <li>
// <p>常见的DOM操作有哪些</p>
// </li>
// <li>
// <p>use strict是什么意思 ? 使用它区别是什么？</p>
// </li>
// <li>
// <p>如何判断一个对象是否属于某个类？</p>
// </li>
// <li>
// <p>强类型语言和弱类型语言的区别</p>
// </li>
// <li>
// <p>解释性语言和编译型语言的区别</p>
// </li>
// <li>
// <p>for...in和for...of的区别</p>
// </li>
// <li>
// <p>如何使用for...of遍历对象</p>
// </li>
// <li>
// <p>ajax、axios、fetch的区别</p>
// </li>
// <li>
// <p>数组的遍历方法有哪些</p>
// </li>
// <li>
// <p>forEach和map方法有什么区别</p>
// </li>
// </ol>
// <p><strong>四、原型与原型链</strong></p>
// <ol>
// <li>对原型、原型链的理解</li>
// <li>原型修改、重写</li>
// <li>原型链指向</li>
// <li>原型链的终点是什么？如何打印出原型链的终点？</li>
// <li>如何获得对象非原型链上的属性？</li>
// </ol>
// <p><strong>五、执行上下文/作用域链/闭包</strong></p>
// <ol>
// <li>
// <p>对闭包的理解</p>
// </li>
// <li>
// <p>对作用域、作用域链的理解</p>
// </li>
// <li>
// <p>对执行上下文的理解</p>
// </li>
// </ol>
// <p><strong>六、this/call/apply/bind</strong></p>
// <ol>
// <li>对this对象的理解</li>
// <li>call() 和 apply() 的区别？</li>
// <li>实现call、apply 及 bind 函数</li>
// </ol>
// <p><strong>七、异步编程</strong></p>
// <ol>
// <li>异步编程的实现方式？</li>
// <li>setTimeout、Promise、Async/Await 的区别</li>
// <li>对Promise的理解</li>
// <li>Promise的基本用法</li>
// <li>Promise解决了什么问题</li>
// <li>Promise.all和Promise.race的区别的使用场景</li>
// <li>对async/await 的理解</li>
// <li>await 到底在等啥？</li>
// <li>async/await的优势</li>
// <li>async/await对比Promise的优势</li>
// <li>async/await 如何捕获异常</li>
// <li>并发与并行的区别？</li>
// <li>什么是回调函数？回调函数有什么缺点？如何解决回调地狱问题？</li>
// <li>setTimeout、setInterval、requestAnimationFrame 各有什么特点？</li>
// </ol>
// <p><strong>八、面向对象</strong></p>
// <ol>
// <li>对象创建的方式有哪些？</li>
// <li>对象继承的方式有哪些？</li>
// </ol>
// <p><strong>九、垃圾回收与内存泄漏</strong></p>
// <ol>
// <li>浏览器的垃圾回收机制</li>
// <li>哪些情况会导致内存泄漏</li>
// </ol>
// <h4 data-id="heading-11">（2）思维导图</h4>
// <p>下图对JavaScript面试题的考察频率进行了大致的区分，可以选择性的学习：
// <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b48c47f54a944f21aea3696e6b413d17~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="JavaScript面试题.png" loading="lazy" class="medium-zoom-image"></p>
// <h4 data-id="heading-12">（3）答案解析</h4>
// <p><strong>既然有面试题，那面试题答案也是必不可少的，参考文章：</strong></p>
// <ul>
// <li><a href="https://juejin.cn/post/6940945178899251230" target="_blank" title="https://juejin.cn/post/6940945178899251230">「2021」高频前端面试题汇总之JavaScript篇（上）</a></li>
// <li><a href="https://juejin.cn/post/6941194115392634888" target="_blank" title="https://juejin.cn/post/6941194115392634888">「2021」高频前端面试题汇总之JavaScript篇（下）</a></li>
// </ul>
// <h3 data-id="heading-13">4. Vue</h3>
// <h4 data-id="heading-14">（1）面试题目</h4>
// <p><strong>一、Vue 基础</strong></p>
// <ol>
// <li>Vue的基本原理</li>
// <li>双向数据绑定的原理</li>
// <li>使用 Object.defineProperty() 来进行数据劫持有什么缺点？</li>
// <li>MVVM、MVC、MVP的区别</li>
// <li>Computed 和 Watch 的区别</li>
// <li>Computed 和 Methods 的区别</li>
// <li>slot是什么？有什么作用？原理是什么？</li>
// <li>过滤器的作用，如何实现一个过滤器</li>
// <li>如何保存页面的当前的状态</li>
// <li>常见的事件修饰符及其作用</li>
// <li>v-if、v-show、v-html 的原理</li>
// <li>v-if和v-show的区别</li>
// <li>v-model 是如何实现的，语法糖实际是什么？</li>
// <li>v-model 可以被用在自定义组件上吗？如果可以，如何使用？</li>
// <li>data为什么是一个函数而不是对象</li>
// <li>对keep-alive的理解，它是如何实现的，具体缓存的是什么？</li>
// <li>$nextTick 原理及作用</li>
// <li>Vue 中给 data 中的对象属性添加一个新的属性时会发生什么？如何解决？</li>
// <li>Vue中封装的数组方法有哪些，其如何实现页面更新</li>
// <li>Vue 单页应用与多页应用的区别</li>
// <li>Vue template 到 render 的过程</li>
// <li>Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？</li>
// <li>简述 mixin、extends 的覆盖逻辑</li>
// <li>描述下Vue自定义指令</li>
// <li>子组件可以直接改变父组件的数据吗？</li>
// <li>Vue是如何收集依赖的？</li>
// <li>对 React 和 Vue 的理解，它们的异同</li>
// <li>Vue的优点</li>
// <li>assets和static的区别</li>
// <li>delete和Vue.delete删除数组的区别</li>
// <li>vue如何监听对象或者数组某个属性的变化</li>
// <li>什么是 mixin ？</li>
// <li>Vue模版编译原理</li>
// <li>对SSR的理解</li>
// <li>Vue的性能优化有哪些</li>
// <li>对 SPA 单页面的理解，它的优缺点分别是什么？</li>
// <li>template和jsx的有什么分别？</li>
// <li>vue初始化页面闪动问题</li>
// <li>extend 有什么作用</li>
// <li>mixin 和 mixins 区别</li>
// <li>MVVM的优缺点?</li>
// </ol>
// <p><strong>二、生命周期</strong></p>
// <ol>
// <li>说一下Vue的生命周期</li>
// <li>Vue 子组件和父组件执行顺序</li>
// <li>created和mounted的区别</li>
// <li>一般在哪个生命周期请求异步数据</li>
// <li>keep-alive 中的生命周期哪些</li>
// </ol>
// <p><strong>三、组件通信</strong></p>
// <ol>
// <li>组件通信的方式</li>
// </ol>
// <p>四、路由</p>
// <ol>
// <li>Vue-Router 的懒加载如何实现</li>
// <li>路由的hash和history模式的区别</li>
// <li>如何获取页面的hash变化</li>
// <li><span class="math math-inline"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>o</mi><mi>u</mi><mi>t</mi><mi>e</mi><mtext>和</mtext></mrow><annotation encoding="application/x-tex">route 和</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">o</span><span class="mord mathnormal">u</span><span class="mord mathnormal">t</span><span class="mord mathnormal">e</span><span class="mord cjk_fallback">和</span></span></span></span></span>router 的区别</li>
// <li>如何定义动态路由？如何获取传过来的动态参数？</li>
// <li>Vue-router 路由钩子在生命周期的体现</li>
// <li>Vue-router跳转和location.href有什么区别</li>
// <li>params和query的区别</li>
// <li>Vue-router 导航守卫有哪些</li>
// <li>对前端路由的理解</li>
// </ol>
// <p><strong>五、Vuex</strong></p>
// <ol>
// <li>
// <p>Vuex 的原理</p>
// </li>
// <li>
// <p>Vuex中action和mutation的区别</p>
// </li>
// <li>
// <p>Vuex 和 localStorage 的区别</p>
// </li>
// <li>
// <p>Redux 和 Vuex 有什么区别，它们的共同思想</p>
// </li>
// <li>
// <p>为什么要用 Vuex 或者 Redux</p>
// </li>
// <li>
// <p>Vuex有哪几种属性？</p>
// </li>
// <li>
// <p>Vuex和单纯的全局对象有什么区别？</p>
// </li>
// <li>
// <p>为什么 Vuex 的 mutation 中不能做异步操作？</p>
// </li>
// <li>
// <p>Vuex的严格模式是什么,有什么作用，如何开启？</p>
// </li>
// <li>
// <p>如何在组件中批量使用Vuex的getter属性</p>
// </li>
// <li>
// <p>如何在组件中重复使用Vuex的mutation
// <strong>六、Vue 3.0</strong></p>
// </li>
// <li>
// <p>Vue3.0有什么更新</p>
// </li>
// <li>
// <p>defineProperty和proxy的区别</p>
// </li>
// <li>
// <p>Vue3.0 为什么要用 proxy？</p>
// </li>
// <li>
// <p>Vue 3.0 中的 Vue Composition API？</p>
// </li>
// <li>
// <p>Composition API与React Hook很像，区别是什么</p>
// </li>
// </ol>
// <p><strong>七、虚拟DOM</strong></p>
// <ol>
// <li>对虚拟DOM的理解？</li>
// <li>虚拟DOM的解析过程</li>
// <li>为什么要用虚拟DOM</li>
// <li>虚拟DOM真的比真实DOM性能好吗</li>
// <li>DIFF算法的原理</li>
// <li>Vue中key的作用</li>
// <li>为什么不建议用index作为key?</li>
// </ol>
// <h4 data-id="heading-15">（2）思维导图</h4>
// <p>下图对Vue面试题的考察频率进行了大致的区分，可以选择性的学习：
// <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/666ec009cd6c478d82fc11c2a89f31a5~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="Vue面试题.png" loading="lazy" class="medium-zoom-image"></p>
// <h4 data-id="heading-16">（3）答案解析</h4>
// <p><strong>既然有面试题，那面试题答案也是必不可少的，参考文章：</strong></p>
// <ul>
// <li><a href="https://juejin.cn/post/6919373017218809864" target="_blank" title="https://juejin.cn/post/6919373017218809864">「2021」高频前端面试题汇总之Vue篇（上）</a></li>
// <li><a href="https://juejin.cn/post/6964779204462247950/" target="_blank" title="https://juejin.cn/post/6964779204462247950/">「2021」高频前端面试题汇总之Vue篇（下）</a></li>
// </ul>
// <h3 data-id="heading-17">5. React</h3>
// <h4 data-id="heading-18">（1）面试题目</h4>
// <p><strong>一、组件基础</strong></p>
// <ol>
// <li>React 事件机制</li>
// <li>React的事件和普通的HTML事件有什么不同？</li>
// <li>React 组件中怎么做事件代理？它的原理是什么？</li>
// <li>React 高阶组件、Render props、hooks 有什么区别，为什么要不断迭代</li>
// <li>React如何获取组件对应的DOM元素？</li>
// <li>React中可以在render访问refs吗？为什么？</li>
// <li>对React的插槽(Portals)的理解，如何使用，有哪些使用场景</li>
// <li>在React中如何避免不必要的render？</li>
// <li>对 React-Intl 的理解，它的工作原理？</li>
// <li>对 React context 的理解</li>
// <li>为什么React并不推荐优先考虑使用Context？</li>
// <li>React中什么是受控组件和非控组件？</li>
// <li>React中refs的作用是什么？有哪些应用场景？</li>
// <li>React组件的构造函数有什么作用？它是必须的吗？</li>
// <li>React.forwardRef是什么？它有什么作用？</li>
// <li>类组件与函数组件有什么异同？</li>
// <li>React中可以在render访问refs吗？为什么？</li>
// <li>对React的插槽(Portals)的理解，如何使用，有哪些使用场景</li>
// <li>在React中如何避免不必要的render？</li>
// <li>对 React-Intl 的理解，它的工作原理？</li>
// <li>对 React context 的理解</li>
// <li>为什么React并不推荐优先考虑使用Context？</li>
// <li>React中什么是受控组件和非控组件？</li>
// <li>React中refs的作用是什么？有哪些应用场景？</li>
// <li>React组件的构造函数有什么作用？它是必须的吗？</li>
// <li>React.forwardRef是什么？它有什么作用？</li>
// <li>类组件与函数组件有什么异同？</li>
// </ol>
// <p><strong>二、数据管理</strong></p>
// <ol>
// <li>React setState 调用的原理</li>
// <li>React setState 调用之后发生了什么？是同步还是异步？</li>
// <li>React中的setState批量更新的过程是什么？</li>
// <li>React中有使用过getDefaultProps吗？它有什么作用？</li>
// <li>React中setState的第二个参数作用是什么？</li>
// <li>React中的setState和replaceState的区别是什么？</li>
// <li>在React中组件的this.state和setState有什么区别？</li>
// <li>state 是怎么注入到组件的，从 reducer 到组件经历了什么样的过程</li>
// <li>React组件的state和props有什么区别？</li>
// <li>React中的props为什么是只读的？</li>
// <li>在React中组件的props改变时更新组件的有哪些方法？</li>
// <li>React中怎么检验props？验证props的目的是什么？</li>
// </ol>
// <p><strong>三、生命周期</strong></p>
// <ol>
// <li>React的生命周期有哪些？</li>
// <li>React 废弃了哪些生命周期？为什么？</li>
// <li>React 16.X 中 props 改变后在哪个生命周期中处理</li>
// <li>React 性能优化在哪个生命周期？它优化的原理是什么？</li>
// <li>state 和 props 触发更新的生命周期分别有什么区别？</li>
// <li>React中发起网络请求应该在哪个生命周期中进行？为什么？</li>
// <li>React 16中新生命周期有哪些</li>
// </ol>
// <p><strong>四、组件通信</strong></p>
// <ol>
// <li>父子组件的通信方式？</li>
// <li>跨级组件的通信方式？</li>
// <li>非嵌套关系组件的通信方式？</li>
// <li>如何解决 props 层级过深的问题</li>
// <li>组件通信的方式有哪些</li>
// </ol>
// <p><strong>五、路由</strong></p>
// <ol>
// <li>React-Router的实现原理是什么？</li>
// <li>如何配置 React-Router 实现路由切换</li>
// <li>React-Router怎么设置重定向？</li>
// <li>react-router 里的 Link 标签和 a 标签的区别</li>
// <li>React-Router如何获取URL的参数和历史对象？</li>
// <li>React-Router 4怎样在路由变化时重新渲染同一个组件？</li>
// <li>React-Router的路由有几种模式？</li>
// <li>React-Router 4的Switch有什么用？</li>
// </ol>
// <p><strong>六、Redux</strong></p>
// <ol>
// <li>对 Redux 的理解，主要解决什么问题</li>
// <li>Redux 原理及工作流程</li>
// <li>Redux 中异步的请求怎么处理</li>
// <li>Redux 怎么实现属性传递，介绍下原理</li>
// <li>Redux 中间件是什么？接受几个参数？柯里化函数两端的参数具体是什么？</li>
// <li>Redux 请求中间件如何处理并发</li>
// <li>Redux 状态管理器和变量挂载到 window 中有什么区别</li>
// <li>mobox 和 redux 有什么区别？</li>
// <li>Redux 和 Vuex 有什么区别，它们的共同思想</li>
// <li>Redux 中间件是怎么拿到store 和 action? 然后怎么处理?</li>
// <li>Redux中的connect有什么作用</li>
// </ol>
// <p><strong>七、Hooks</strong></p>
// <ol>
// <li>对 React Hook 的理解，它的实现原理是什么</li>
// <li>为什么 useState 要使用数组而不是对象</li>
// <li>React Hooks 解决了哪些问题？</li>
// <li>React Hook 的使用限制有哪些？</li>
// <li>useEffect 与 useLayoutEffect 的区别</li>
// <li>React Hooks在平时开发中需要注意的问题和原因</li>
// <li>React Hooks 和生命周期的关系？</li>
// </ol>
// <p><strong>八、虚拟DOM</strong></p>
// <ol>
// <li>对虚拟 DOM 的理解？虚拟 DOM 主要做了什么？虚拟 DOM 本身是什么？</li>
// <li>React diff 算法的原理是什么？</li>
// <li>React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的</li>
// <li>虚拟 DOM 的引入与直接操作原生 DOM 相比，哪一个效率更高，为什么</li>
// <li>React 与 Vue 的 diff 算法有何不同？</li>
// </ol>
// <p><strong>九、其他</strong></p>
// <ol>
// <li>React组件命名推荐的方式是哪个？</li>
// <li>react 最新版本解决了什么问题，增加了哪些东西</li>
// <li>react 实现一个全局的 dialog</li>
// <li>React 数据持久化有什么实践吗？</li>
// <li>对 React 和 Vue 的理解，它们的异同</li>
// <li>可以使用TypeScript写React应用吗？怎么操作？</li>
// <li>React 设计思路，它的理念是什么？</li>
// <li>React中props.children和React.Children的区别</li>
// <li>React的状态提升是什么？使用场景有哪些？</li>
// <li>React中constructor和getInitialState的区别?</li>
// <li>React的严格模式如何使用，有什么用处？</li>
// <li>在React中遍历的方法有哪些？</li>
// <li>在React中页面重新加载时怎样保留数据？</li>
// <li>同时引用这三个库react.js、react-dom.js和babel.js它们都有什么作用？</li>
// <li>React必须使用JSX吗？</li>
// <li>为什么使用jsx的组件中没有看到使用react却需要引入react？</li>
// <li>在React中怎么使用async/await？</li>
// <li>React.Children.map和js的map有什么区别？</li>
// <li>对React SSR的理解</li>
// <li>为什么&nbsp;React 要用 JSX？</li>
// <li>HOC相比 mixins 有什么优点？</li>
// <li>React 中的高阶组件运用了什么设计模式？</li>
// </ol>
// <h4 data-id="heading-19">（2）思维导图</h4>
// <p>下图对React面试题的考察频率进行了大致的区分，可以选择性的学习：
// <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a72ebc3a1f9f47c7a333976769740e7e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="React面试题.png" loading="lazy" class="medium-zoom-image"></p>
// <h4 data-id="heading-20">（3）答案解析</h4>
// <p><strong>既然有面试题，那面试题答案也是必不可少的，参考文章：</strong></p>
// <ul>
// <li><a href="https://juejin.cn/post/6941546135827775525" target="_blank" title="https://juejin.cn/post/6941546135827775525">「2021」高频前端面试题汇总之React篇（上）</a></li>
// <li><a href="https://juejin.cn/post/6940942549305524238" target="_blank" title="https://juejin.cn/post/6940942549305524238">「2021」高频前端面试题汇总之React篇（下）</a></li>
// </ul>
// <h3 data-id="heading-21">6. 浏览器原理</h3>
// <h4 data-id="heading-22">（1）面试题目</h4>
// <p><strong>一、浏览器安全</strong></p>
// <ol>
// <li>什么是 XSS 攻击？</li>
// <li>如何防御 XSS 攻击？</li>
// <li>什么是 CSRF 攻击？</li>
// <li>如何防御 CSRF 攻击？</li>
// <li>什么是中间人攻击？如何防范中间人攻击？</li>
// <li>有哪些可能引起前端安全的问题?</li>
// <li>网络劫持有哪几种，如何防范？</li>
// </ol>
// <p><strong>二、进程与线程</strong></p>
// <ol>
// <li>进程与线程的概念</li>
// <li>进程和线程的区别</li>
// <li>浏览器渲染进程的线程有哪些</li>
// <li>进程之前的通信方式</li>
// <li>僵尸进程和孤儿进程是什么？</li>
// <li>死锁产生的原因？ 如果解决死锁的问题？</li>
// <li>如何实现浏览器内多个标签页之间的通信?</li>
// <li>对Service Worker的理解</li>
// </ol>
// <p>三、浏览器缓存</p>
// <ol>
// <li>对浏览器的缓存机制的理解</li>
// <li>浏览器资源缓存的位置有哪些？</li>
// <li>协商缓存和强缓存的区别</li>
// <li>为什么需要浏览器缓存？</li>
// <li>点击刷新按钮或者按 F5、按 Ctrl+F5 （强制刷新）、地址栏回车有什么区别？</li>
// </ol>
// <p><strong>四、浏览器组成</strong></p>
// <ol>
// <li>对浏览器的理解</li>
// <li>对浏览器内核的理解</li>
// <li>常见的浏览器内核比较</li>
// <li>常见浏览器所用内核</li>
// <li>浏览器的主要组成部分</li>
// <li>五、浏览器渲染原理</li>
// <li>浏览器的渲染过程</li>
// <li>浏览器渲染优化</li>
// <li>渲染过程中遇到 JS 文件如何处理？</li>
// <li>什么是文档的预解析？</li>
// <li>CSS 如何阻塞文档解析？</li>
// <li>如何优化关键渲染路径？</li>
// <li>什么情况会阻塞渲染？</li>
// </ol>
// <p><strong>六、浏览器本地存储</strong></p>
// <ol>
// <li>浏览器本地存储方式及使用场景</li>
// <li>Cookie有哪些字段，作用分别是什么</li>
// <li>Cookie、LocalStorage、SessionStorage区别</li>
// <li>前端储存的⽅式有哪些？</li>
// <li>IndexedDB有哪些特点？</li>
// </ol>
// <p><strong>七、浏览器同源策略</strong></p>
// <ol>
// <li>什么是同源策略</li>
// <li>如何解决跨越问题</li>
// <li>正向代理和反向代理的区别</li>
// <li>Nginx的概念及其工作原理</li>
// </ol>
// <p><strong>八、浏览器事件机制</strong></p>
// <ol>
// <li>事件是什么？事件模型？</li>
// <li>如何阻止事件冒泡</li>
// <li>对事件委托的理解</li>
// <li>事件委托的使用场景</li>
// <li>同步和异步的区别</li>
// <li>对事件循环的理解</li>
// <li>宏任务和微任务分别有哪些</li>
// <li>什么是执行栈</li>
// <li>Node 中的 Event Loop 和浏览器中的有什么区别？process.nextTick 执行顺序？</li>
// <li>事件触发的过程是怎样的</li>
// </ol>
// <p><strong>九、浏览器垃圾回收机制</strong></p>
// <ol>
// <li>V8的垃圾回收机制是怎样的</li>
// <li>哪些操作会造成内存泄漏？</li>
// </ol>
// <h4 data-id="heading-23">（2）思维导图</h4>
// <p>下图对浏览器原理面试题的考察频率进行了大致的区分，可以选择性的学习：
// <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc2c03a1285049428ce6769269d948b3~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="浏览器原理面试题.png" loading="lazy" class="medium-zoom-image"></p>
// <h4 data-id="heading-24">（3）答案解析</h4>
// <p><strong>既然有面试题，那面试题答案也是必不可少的，参考文章：</strong><a href="https://juejin.cn/post/6916157109906341902/" target="_blank" title="https://juejin.cn/post/6916157109906341902/">「2021」高频前端面试题汇总之浏览器原理篇</a>。</p>
// <h3 data-id="heading-25">7. 计算机网络</h3>
// <h4 data-id="heading-26">（1）面试题目</h4>
// <p><strong>一、HTTP协议</strong></p>
// <ol>
// <li>GET和POST的请求的区别</li>
// <li>POST和PUT请求的区别</li>
// <li>常见的HTTP请求头和响应头</li>
// <li>HTTP状态码304是多好还是少好</li>
// <li>常见的HTTP请求方法</li>
// <li>OPTIONS请求方法及使用场景</li>
// <li>HTTP 1.0 和 HTTP 1.1 之间有哪些区别？</li>
// <li>HTTP 1.1 和 HTTP 2.0 的区别</li>
// <li>HTTP和HTTPS协议的区别</li>
// <li>GET方法URL长度限制的原因</li>
// <li>当在浏览器中输入 Google.com 并且按下回车之后发生了什么？</li>
// <li>对keep-alive的理解</li>
// <li>页面有多张图片，HTTP是怎样的加载表现？</li>
// <li>HTTP2的头部压缩算法是怎样的？</li>
// <li>HTTP请求报文的是什么样的？</li>
// <li>HTTP响应报文的是什么样的？</li>
// <li>HTTP协议的优点和缺点</li>
// <li>说一下HTTP 3.0</li>
// <li>HTTP协议的性能怎么样</li>
// <li>URL有哪些组成部分</li>
// <li>与缓存相关的HTTP请求头有哪些</li>
// </ol>
// <p><strong>二、HTTPS协议</strong></p>
// <ol>
// <li>什么是HTTPS协议？</li>
// <li>TLS/SSL的工作原理</li>
// <li>数字证书是什么？</li>
// <li>HTTPS通信（握手）过程</li>
// <li>HTTPS的特点</li>
// <li>HTTPS是如何保证安全的？</li>
// </ol>
// <p><strong>三、HTTP状态码</strong></p>
// <ol>
// <li>常见的状态码</li>
// <li>同样是重定向，307，303，302的区别？</li>
// </ol>
// <p><strong>四、DNS协议介绍</strong></p>
// <ol>
// <li>DNS 协议是什么</li>
// <li>DNS同时使用TCP和UDP协议？</li>
// <li>DNS完整的查询过程</li>
// <li>迭代查询与递归查询</li>
// <li>DNS 记录和报文</li>
// </ol>
// <p><strong>五、网络模型</strong></p>
// <ol>
// <li>OSI七层模型</li>
// <li>TCP/IP五层协议</li>
// </ol>
// <p><strong>六、TCP与UDP</strong></p>
// <ol>
// <li>TCP 和 UDP的概念及特点</li>
// <li>TCP和UDP的区别</li>
// <li>TCP和UDP的使用场景</li>
// <li>UDP协议为什么不可靠？</li>
// <li>TCP的重传机制</li>
// <li>TCP的拥塞控制机制</li>
// <li>TCP的流量控制机制</li>
// <li>TCP的可靠传输机制</li>
// <li>TCP的三次握手和四次挥手</li>
// <li>TCP粘包是怎么回事，如何处理?</li>
// <li>为什么udp不会粘包？</li>
// </ol>
// <p><strong>七、WebSocket</strong></p>
// <ol>
// <li>对 WebSocket 的理解</li>
// <li>即时通讯的实现：短轮询、长轮询、SSE 和 WebSocket 间的区别？</li>
// </ol>
// <h4 data-id="heading-27">（2）思维导图</h4>
// <p>下图对计算机网络面试题的考察频率进行了大致的区分，可以选择性的学习：<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e3746a6a0a8c4dc3a220ecd3de62f1a0~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="计算机网络面试题.png" loading="lazy" class="medium-zoom-image"></p>
// <h4 data-id="heading-28">（3）答案解析</h4>
// <p><strong>既然有面试题，那面试题答案也是必不可少的，参考文章：</strong><a href="https://juejin.cn/post/6908327746473033741" target="_blank" title="https://juejin.cn/post/6908327746473033741">「2021」高频前端面试题汇总之计算机网络篇</a>。</p>
// <h3 data-id="heading-29">8. 前端性能优化</h3>
// <h4 data-id="heading-30">（1）面试题目</h4>
// <p><strong>一、CDN</strong></p>
// <ol>
// <li>CDN的概念</li>
// <li>CDN的作用</li>
// <li>CDN的原理</li>
// <li>CDN的使用场景</li>
// </ol>
// <p><strong>二、懒加载</strong></p>
// <ol>
// <li>懒加载的概念</li>
// <li>懒加载的特点</li>
// <li>懒加载的实现原理</li>
// <li>懒加载与预加载的区别</li>
// </ol>
// <p><strong>三、回流与重绘</strong></p>
// <ol>
// <li>回流与重绘的概念及触发条件</li>
// <li>如何避免回流与重绘？</li>
// <li>如何优化动画？</li>
// <li>documentFragment 是什么？用它跟直接操作 DOM 的区别是什么？</li>
// </ol>
// <p><strong>四、节流与防抖</strong></p>
// <ol>
// <li>对节流与防抖的理解</li>
// <li>实现节流函数和防抖函数</li>
// </ol>
// <p><strong>五、图片优化</strong></p>
// <ol>
// <li>如何对项目中的图片进行优化？</li>
// <li>常见的图片格式及使用场景</li>
// </ol>
// <p><strong>六、Webpack优化</strong></p>
// <ol>
// <li>如何提⾼webpack的打包速度?</li>
// <li>如何减少 Webpack 打包体积</li>
// <li>如何⽤webpack来优化前端性能？</li>
// <li>如何提⾼webpack的构建速度？</li>
// </ol>
// <h4 data-id="heading-31">（2）思维导图</h4>
// <p>下图对前端性能优化面试题的考察频率进行了大致的区分，可以选择性的学习：
// <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea2f509436de4e32b0a2072ad4dcdf47~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="性能优化面试题.png" loading="lazy" class="medium-zoom-image"></p>
// <h4 data-id="heading-32">（3）答案解析</h4>
// <p><strong>既然有面试题，那面试题答案也是必不可少的，参考文章：</strong><a href="https://juejin.cn/post/6941278592215515143" target="_blank" title="https://juejin.cn/post/6941278592215515143">「2021」高频前端面试题汇总之性能优化篇</a>。</p>
// <h3 data-id="heading-33">9. 手写代码</h3>
// <h4 data-id="heading-34">（1）面试题目</h4>
// <p><strong>一、JavaScript 基础</strong></p>
// <ol>
// <li>手写 Object.create</li>
// <li>手写 instanceof 方法</li>
// <li>手写 new 操作符</li>
// <li>手写 Promise</li>
// <li>手写 Promise.then</li>
// <li>手写 Promise.all</li>
// <li>手写 Promise.race</li>
// <li>手写防抖函数</li>
// <li>手写节流函数</li>
// <li>手写类型判断函数</li>
// <li>手写 call 函数</li>
// <li>手写 apply 函数</li>
// <li>手写 bind 函数</li>
// <li>函数柯里化的实现</li>
// <li>实现AJAX请求</li>
// <li>使用Promise封装AJAX请求</li>
// <li>实现浅拷贝</li>
// <li>实现深拷贝</li>
// </ol>
// <p><strong>二、数据处理</strong></p>
// <ol>
// <li>实现日期格式化函数</li>
// <li>交换a,b的值，不能用临时变量</li>
// <li>实现数组的乱序输出</li>
// <li>实现数组元素求和</li>
// <li>实现数组的扁平化</li>
// <li>实现数组去重</li>
// <li>实现数组的flat方法</li>
// <li>实现数组的push方法</li>
// <li>实现数组的filter方法</li>
// <li>实现数组的map方法</li>
// <li>实现字符串的repeat方法</li>
// <li>实现字符串翻转</li>
// <li>将数字每千分位用逗号隔开</li>
// <li>实现非负大整数相加</li>
// <li>实现 add(1)(2)(3)</li>
// <li>实现类数组转化为数组</li>
// <li>使用 reduce 求和</li>
// <li>将js对象转化为树形结构</li>
// <li>使用ES5和ES6求函数参数的和</li>
// <li>解析 URL Params 为对象</li>
// </ol>
// <p><strong>三、场景应用</strong></p>
// <ol>
// <li>循环打印红黄绿</li>
// <li>实现每隔一秒打印 1,2,3,4</li>
// <li>小孩报数问题</li>
// <li>用Promise实现图片的异步加载</li>
// <li>实现发布-订阅模式</li>
// <li>查找文章中出现频率最高的单词</li>
// <li>封装异步的fetch，使用async await方式来使用</li>
// <li>实现prototype继承</li>
// <li>实现双向数据绑定</li>
// <li>实现简单路由</li>
// <li>实现斐波那契数列</li>
// <li>字符串出现的不重复最长长度</li>
// <li>使用 setTimeout 实现 setInterval</li>
// <li>实现 jsonp</li>
// <li>判断对象是否存在循环引用</li>
// </ol>
// <h4 data-id="heading-35">（2）思维导图</h4>
// <p>下图对手写代码面试题的考察频率进行了大致的区分，可以选择性的学习：
// <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de74df757b684584b10480cd6f95a4dc~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="手写代码面试题.png" loading="lazy" class="medium-zoom-image"></p>
// <h4 data-id="heading-36">（3）答案解析</h4>
// <p><strong>既然有面试题，那面试题答案也是必不可少的，参考文章：</strong><a href="https://juejin.cn/post/6946136940164939813" target="_blank" title="https://juejin.cn/post/6946136940164939813">「2021」高频前端面试题汇总之手写代码篇</a>。</p>
// <h3 data-id="heading-37">10. 代码输出结果</h3>
// <p><strong>代码输出结果</strong>是面试中常考的题目，一段代码中可能涉及到很多的知识点，这就考察到了应聘者的基础能力。在前端面试中，常考的代码输出问题主要涉及到以下知识点：<strong>异步编程、事件循环、this指向、作用域、变量提升、闭包、原型、继承</strong>等，这里就不一一列举相关的面试题了，已经在另外一篇文章写的很清楚了，参考文章：<a href="https://juejin.cn/post/6959043611161952269" target="_blank" title="https://juejin.cn/post/6959043611161952269">「2021」高频前端面试题汇总之代码输出结果篇</a>。</p>
// <p>如果这一篇文章中的面试题都能搞懂了，那面试中的代码输出结果问题基本都很容易就解决了。</p>
// <h3 data-id="heading-38">11. 前端工程化</h3>
// <h4 data-id="heading-39">（1）面试题目</h4>
// <p><strong>一、Git</strong></p>
// <ol>
// <li>git 和 svn 的区别</li>
// <li>经常使用的 git 命令？</li>
// <li>git pull 和 git fetch 的区别</li>
// <li>git rebase 和 git merge 的区别</li>
// </ol>
// <p><strong>二、Webpack</strong></p>
// <ol>
// <li>webpack与grunt、gulp的不同？</li>
// <li>webpack、rollup、parcel优劣？</li>
// <li>有哪些常⻅的Loader？</li>
// <li>有哪些常⻅的Plugin？</li>
// <li>bundle，chunk，module是什么？</li>
// <li>Loader和Plugin的不同？</li>
// <li>webpack的构建流程?</li>
// <li>编写loader或plugin的思路？</li>
// <li>webpack的热更新是如何做到的？说明其原理？</li>
// <li>如何⽤webpack来优化前端性能？</li>
// <li>如何提⾼webpack的打包速度?</li>
// <li>如何提⾼webpack的构建速度？</li>
// <li>怎么配置单⻚应⽤？怎么配置多⻚应⽤？</li>
// </ol>
// <p><strong>三、其他</strong></p>
// <ol>
// <li>Babel的原理是什么?</li>
// </ol>
// <p><strong>注：</strong> 关于前端工程相关的面试题，由于个人还在整理中，还不是很全面，会尽快发在掘金上，暂时就不给出答案了，大家可以自行查找学习。</p>
// <h3 data-id="heading-40">12. 其他</h3>
// <p>除了上面给出的这些类别的面试题，其实还有很多，比如数据结构与算法，前端业务实现等。关于数据结构与算法，主要考察方向就是LeetCode题目，可以参考<strong>一个搬砖的胖子</strong>大佬的<a href="https://link.juejin.cn?target=https%3A%2F%2Fcodetop.cc%2F%23%2Fhome" target="_blank" rel="nofollow noopener noreferrer" title="https://codetop.cc/#/home" ref="nofollow noopener noreferrer">codeTop</a>来针对性的刷题。下面只给出几个业务实现的问题，大家可以参考：</p>
// <ol>
// <li>如何优化长列表</li>
// <li>如何实现一个dialog组件</li>
// <li>服务端渲染的原理</li>
// <li>项目打包到服务器的整个过程</li>
// <li>以前端角度出发做好 SEO 需要考虑什么？</li>
// <li>如何实现前端登录</li>
// <li>如何实现扫码登录</li>
// </ol>
// <p><strong>最后，这篇文章只给出了前端面试中经常考察到的“八股文”，基本没有涉及到项目经历相关的问题，
// 只能根据自己的实际情况去作答了。整理不易，本文所附链接中的面试题文章的总字数已经超过了30w字，如果觉得有用就点个赞吧！</strong></p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style></div>`
    }
  },
  components: {
    ArticleLeft,
    ArticleRight
  },

}

</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}

.Article-container {
  position: relative;
  margin: 0 auto;
  max-width: 1140px;

  .content {
    margin-top: 1.767rem;
    padding: 0 0 8rem;

    .article-area {
      margin-bottom: 1.5rem;
    }

    .main-area {
      position: relative;
      width: 820px;
      max-width: 100%;
      box-sizing: border-box;

      .article {
        height: 100%;
        position: relative;
        z-index: 1;
        border-radius: 4px;
        background-color: #fff;
        padding: 2.667rem 2.67rem 3.33rem;
        box-sizing: border-box;

        .article-title {
          margin: 0 0 1.667rem;
          font-size: 2.667rem;
          font-weight: 600;
          line-height: 1.31;
          color: #252933;
        }

        .author-info-block {
          display: flex;
          align-items: center;
          margin-bottom: 1.667rem;

          .avatar-link {
            font-size: 0;
          }

          .avatar {
            display: inline-block;
            position: relative;
            background-size: cover;
            flex: 0 0 auto;
            margin-right: 1rem;
            width: 3.333rem;
            height: 3.333rem;
            border-radius: 50%;
          }

          .author-info-box {
            min-width: 0;
            flex: 1;
            min-height: 43px;
          }

          .author-name {
            height: 2rem;

            .username {
              width: 100%;
              font-size: 1.333rem;
              font-weight: 500;
              color: #515767;
              line-height: 2rem;
              display: flex;
              align-items: center;

              .name {
                display: inline-block;
              }

              .rank {
                display: inline-flex;
                align-items: center;
                margin-left: 0.33rem;
                vertical-align: middle;

                img {
                  width: 35px;
                  height: 16px;
                }
              }
            }
          }

          .meta-box {
            font-size: 1.2rem;
            color: #8a919f;
            margin-top: 2px;
            line-height: 22px;

            .time {
              //字母之间的间隔
              letter-spacing: 1px;
            }
          }

          .follow-button {
            margin: 0 0 0 auto;
            padding: 0 1rem;
            height: 34px;
            font-size: 14px;
            color: #1e80ff;
            background: rgba(30, 128, 255, .05);
            border: 1px solid rgba(30, 128, 255, .3);
            border-radius: 4px;
            display: flex;
            align-items: center;

            .icon {
              margin-right: 4px;
              display: inline-block;
              width: 12px;
              height: 12px;
            }
          }
        }
      }
      .markdown-body {
        color: #595959;
        font-size: 15px;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
        background-image: linear-gradient(90deg, rgba(60, 10, 30, .04) 3%, transparent 0), linear-gradient(1turn, rgba(60, 10, 30, .04) 3%, transparent 0);
        background-size: 20px 20px;
        background-position: 50%;

      }
    }
  }
}



</style>