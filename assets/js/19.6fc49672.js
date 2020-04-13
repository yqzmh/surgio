(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{271:function(t,s,a){"use strict";a.r(s);var e=a(29),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"artifact-产品"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#artifact-产品"}},[t._v("#")]),t._v(" Artifact 产品")]),t._v(" "),a("p",[t._v("Surgio 会根据 Artifact 的值来生成配置文件。你可以一次性配置多个 Artifact，一次性生成所有需要的配置文件。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SurgeV3.conf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'surge_v3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" name")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[a("Badge",{attrs:{text:"必须",vertical:"middle"}})],1)]),t._v(" "),a("p",[t._v("配置文件名")]),t._v(" "),a("h3",{attrs:{id:"template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template"}},[t._v("#")]),t._v(" template")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[a("Badge",{attrs:{text:"必须",vertical:"middle"}})],1)]),t._v(" "),a("p",[t._v("模板名。会在 "),a("code",[t._v("./template")]),t._v(" 目录内寻找同名文件（"),a("code",[t._v(".tpl")]),t._v(" 后缀可省略）。")]),t._v(" "),a("h3",{attrs:{id:"provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[t._v("#")]),t._v(" provider")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[a("Badge",{attrs:{text:"必须",vertical:"middle"}})],1)]),t._v(" "),a("p",[t._v("模板名。会在 "),a("code",[t._v("./provider")]),t._v(" 目录内寻找同名文件（"),a("code",[t._v(".js")]),t._v(" 后缀可省略）。")]),t._v(" "),a("h3",{attrs:{id:"combineproviders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#combineproviders"}},[t._v("#")]),t._v(" combineProviders")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string[]")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("合并其它 Provider。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("由于我们可以在 Provider 中定义属于自己的 "),a("code",[t._v("customFilters")]),t._v(" 和 "),a("code",[t._v("nodeFilter")]),t._v("，它们在合并时需要你注意以下几点：")]),t._v(" "),a("ul",[a("li",[t._v("不论是主 Provider（即 "),a("code",[t._v("provider")]),t._v(" 定义的 Provider），还是合并进来的 Provider，它们的 "),a("code",[t._v("nodeFilter")]),t._v(" 只对自身的节点有效；")]),t._v(" "),a("li",[t._v("对于 "),a("code",[t._v("customFilters")]),t._v(" 来说，只有主 Provider 中定义的才会生效；")])])]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("p",[t._v("最终生成的节点配置会包含 "),a("code",[t._v("my-provider")]),t._v(", "),a("code",[t._v("rixcloud")]),t._v(", "),a("code",[t._v("dlercloud")]),t._v(" 三个 Provider 的节点。如果 "),a("code",[t._v("my-provider")]),t._v(" 中有自定义过滤器 "),a("code",[t._v("customFilters")]),t._v("，那这些过滤器对 "),a("code",[t._v("rixcloud")]),t._v(" 和 "),a("code",[t._v("dlercloud")]),t._v(" 节点同样有效。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-provider'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  combineProviders"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rixcloud'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dlercloud'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"customparams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customparams"}},[t._v("#")]),t._v(" customParams")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("object")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("{}")])])]),t._v(" "),a("p",[t._v("自定义的模板变量。可以在模板中获取，方便定制化模板。")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  customParams"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    beta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此后即可在模板中使用")]),t._v(" "),a("div",{pre:!0},[a("p",[a("code",[t._v("{{ customParams.foo }}")])])]),a("p",[t._v("来输出 "),a("code",[t._v("foo")]),t._v(" 的内容。")]),t._v(" "),a("p",[t._v("你也可以定义布尔值以实现模板中的逻辑判断，比如：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- .tpl 文件 --\x3e")]),t._v("\n{% if customParams.beta %}\n\n{% endif %}\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ol",[a("li",[t._v("逻辑语句能够让你仅通过一个模板就能实现多种不同的配置。Nunjucks 的条件语法请参考其文档；")]),t._v(" "),a("li",[t._v("你可以"),a("RouterLink",{attrs:{to:"/guide/custom-config.html#customparams"}},[t._v("定义全局的自定义模板变量了")]),t._v("；")],1)])]),t._v(" "),a("h3",{attrs:{id:"destdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destdir"}},[t._v("#")]),t._v(" destDir "),a("Badge",{attrs:{text:"v1.4.0",vertical:"middle"}})],1),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("该 Artifact 的生成目录。对于本地管理规则仓库的朋友可能会非常有用，你不再需要人肉复制粘贴了。")]),t._v(" "),a("h2",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("h3",{attrs:{id:"proxygroupmodifier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxygroupmodifier"}},[t._v("#")]),t._v(" proxyGroupModifier")]),t._v(" "),a("p",[a("code",[t._v("proxyGroupModifier(nodeList, filters)")])]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("入参: "),a("code",[t._v("(NodeConfig[], { hkFilter, usFilter, netflixFilter, youtubePremiumFilter })")])]),t._v(" "),a("li",[t._v("返回值: "),a("code",[t._v("object[]")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guide/client/clash.html"}},[t._v("Clash 规则维护指南")])],1)]),t._v(" "),a("p",[t._v("为了解决 Clash 的 "),a("code",[t._v("Proxy Group")]),t._v(" 组装引入了这个构造函数。在使用 "),a("a",{attrs:{href:"/guide/custom-template#clashproxyconfig"}},[a("code",[t._v("clashProxyConfig")]),t._v(" 模板变量")]),t._v(" 之前必须要自己实现这个方法。")]),t._v(" "),a("p",[t._v("方法返回的数组中可以包含以下几种对象：")]),t._v(" "),a("p",[a("em",[t._v("1. 完整的代理选择列表")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🚀 Proxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("em",[t._v("2. 经过过滤的代理选择列表")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🎬 Netflix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" filters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("netflixFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proxies: ['Auto'],")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("内置的 "),a("code",[t._v("filters")]),t._v(" 会被 Provider 中定义的 filter 覆盖")]),t._v(" "),a("li",[t._v("假设你有一个名为 "),a("code",[t._v("myFilter")]),t._v(" 的自定义过滤器，则可以通过 "),a("code",[t._v("filters.myFilter")]),t._v(" 调用")]),t._v(" "),a("li",[t._v("如果包含 "),a("code",[t._v("proxies")]),t._v(" 节点，则过滤出的节点名会合并到末尾")])])]),t._v(" "),a("p",[a("em",[t._v("3. 经过过滤的代理自动测速列表")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'US'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" filters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持 'url-test', 'fallback', 'load-balance'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proxies: ['Auto'],")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("使用原理同上")])])]),t._v(" "),a("p",[a("em",[t._v("4. 自定义的代理选择列表")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🍎 Apple'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  proxies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DIRECT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🚀 Proxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'US'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("code",[t._v("proxies")]),t._v(" 中的代理名称必须已被定义")])]),t._v(" "),a("p",[a("em",[t._v("5. 自定义的代理自动测速列表")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🍎 Apple'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  proxies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🚀 Proxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'US'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持 'url-test', 'fallback', 'load-balance'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);