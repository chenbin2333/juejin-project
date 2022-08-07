<template>
  <main class="Article-container">
    <div class="content">
      <!--      文章主内容区-->
      <div class="main-area article-area">
        <article class="article">
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
import ArticleLeft from "@/views/Article/ArticleLeft";
import ArticleRight from "@/views/Article/ArticleRight"

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
<p>有很多值得注意的生态系统拥有大量用于开发区块链解决方案的编程语言，但最终，需要选择一种。这不是最容易做出的选择，因此要顺利完成整个过程，应该首先专注于选择生态系统。然而，生态系统的选择也强加了编码语言，以及一定程度的专业知识。</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style></div>`
    }
  },
  components: {
    ArticleLeft,
    ArticleRight
  },

}

</script>

<style lang="less" scoped>
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
      }
    }
  }
}
</style>