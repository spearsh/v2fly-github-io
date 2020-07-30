(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{372:function(t,s,a){"use strict";a.r(s);var e=a(18),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配置预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置预览"}},[t._v("#")]),t._v(" 配置预览")]),t._v(" "),a("p",[t._v("V2Ray 本身使用基于 "),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Protobuf"),a("OutboundLink")],1),t._v(" 的配置。由于 Protobuf 的文本格式不方便阅读，V2Ray 同时也支持 JSON 格式的配置。在运行之前，V2Ray 会自动将 JSON 转换为对应的 Protobuf。换言之，V2Ray 将来也可能会支持其它格式的配置。")]),t._v(" "),a("p",[t._v("以下介绍一下基于 JSON 格式的配置。")]),t._v(" "),a("p",[t._v("JSON，全称 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/JSON",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Object Notation"),a("OutboundLink")],1),t._v("，简而言之是 Javascript 中的对象（Object）。一个 JSON 文件包含一个完整的对象，以大括号 "),a("code",[t._v("{")]),t._v(" 开头，大括号"),a("code",[t._v("}")]),t._v(" 结束。")]),t._v(" "),a("p",[t._v("一个 JSON 对象包含一系列的键值对（Key-Value Pair），一个键是一个字符串（String），而值有多种类型，常见的有字符串（String）、数字（Number）、布尔（Bool）、数组（Array）和对象（Object）。下面是一个简单的 JSON 对象示例：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stringValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a string."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"numberValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"boolValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"arrayValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"is"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"objectValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"another"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("V2Ray 的 JSON 格式支持注释，可使用 "),a("code",[t._v("//")]),t._v(" 或者 "),a("code",[t._v("/* */")]),t._v(" 来进行注释。在不支持注释的编辑器中可能被显示为“错误”，但实际上是可以正常使用的。")])]),t._v(" "),a("h2",{attrs:{id:"json-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-数据类型"}},[t._v("#")]),t._v(" JSON 数据类型")]),t._v(" "),a("p",[t._v("这里介绍一下常用的数据类型，在之后其它的配置中会用到。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("boolean")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("布尔值，只有"),a("code",[t._v("true")]),t._v("和"),a("code",[t._v("false")]),t._v("两种取值，不带引号。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("number")])])]),t._v(" "),a("p",[t._v("数字，在 V2Ray 的使用中通常为非负整数，即"),a("code",[t._v("0")]),t._v("、"),a("code",[t._v("53")]),t._v("…… 数字在 JSON 格式中不带引号。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("字符串，由引号包含的一串字符，如无特殊说明，字符的内容不限。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("array")]),t._v(": []")])]),t._v(" "),a("p",[t._v("数组，由方括号包含的一组元素，如字符串数组表示为"),a("code",[t._v("[string]")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("object")]),t._v(": {}")])]),t._v(" "),a("p",[t._v("对象，一组键值对。样例见本文上方的示例。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("通常一个键值对的后面需要有一个逗号 "),a("code",[t._v(",")]),t._v(" ，但如果这个键值对后面紧跟一个大括号 "),a("code",[t._v("}")]),t._v(" 的话，则一定不能有逗号。")])]),t._v(" "),a("h2",{attrs:{id:"v2ray-常用数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-常用数据类型"}},[t._v("#")]),t._v(" V2Ray 常用数据类型")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("map")]),t._v(": object {string:string}")])]),t._v(" "),a("p",[t._v("一组键值对，其类型在括号内指出。每一个键和值的类型对应相同。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("address")]),t._v(": string")])]),t._v(" "),a("p",[t._v("字符串，表示一个 IP 地址或域名，形如："),a("code",[t._v('"8.8.8.8"')]),t._v(" 或 "),a("code",[t._v('"www.v2ray.com"')])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("address_port")]),t._v(": string")])]),t._v(" "),a("p",[t._v("字符串，表示一个地址和端口，常见的形式如："),a("code",[t._v('"8.8.8.8:53"')]),t._v("，或者 "),a("code",[t._v('"www.v2ray.com:80"')]),t._v("。在一部分配置中，地址部分可以省略，如"),a("code",[t._v('":443"')]),t._v("。")]),t._v(" "),a("h1",{attrs:{id:"配置文件格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件格式"}},[t._v("#")]),t._v(" 配置文件格式")]),t._v(" "),a("p",[t._v("V2Ray 的配置文件形式如下，客户端和服务器通用一种形式，只是实际的配置不一样。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"log"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"policy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transport"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stats"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reverse"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("log")]),t._v(": "),a("a",{attrs:{href:"#logobject"}},[t._v("LogObject")])])]),t._v(" "),a("p",[t._v("日志配置，表示 V2Ray 如何输出日志。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("api")]),t._v(": "),a("RouterLink",{attrs:{to:"/chapter_02/api.html"}},[t._v("ApiObject")])],1)]),t._v(" "),a("p",[t._v("内置的远程控置 API，详见"),a("RouterLink",{attrs:{to:"/chapter_02/api.html"}},[t._v("远程控制配置")]),t._v("。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("dns")]),t._v(": "),a("RouterLink",{attrs:{to:"/chapter_02/04_dns.html"}},[t._v("DnsObject")])],1)]),t._v(" "),a("p",[t._v("内置的 DNS 服务器，若此项不存在，则默认使用本机的 DNS 设置。详见"),a("RouterLink",{attrs:{to:"/chapter_02/04_dns.html"}},[t._v("DNS 配置")])],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("routing")]),t._v(": "),a("RouterLink",{attrs:{to:"/chapter_02/03_routing.html"}},[t._v("RoutingObject")])],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/chapter_02/03_routing.html"}},[t._v("路由配置")])],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("policy")]),t._v(": "),a("RouterLink",{attrs:{to:"/chapter_02/policy.html"}},[t._v("PolicyObject")])],1)]),t._v(" "),a("p",[t._v("本地策略可进行一些权限相关的配置，详见"),a("RouterLink",{attrs:{to:"/chapter_02/policy.html"}},[t._v("本地策略")])],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("inbounds")]),t._v(": ["),a("a",{attrs:{href:"#inboundobject"}},[t._v("InboundObject")]),t._v("]")])]),t._v(" "),a("p",[t._v("一个数组，每个元素是一个"),a("a",{attrs:{href:"#inboundobject"}},[t._v("入站连接配置")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("outbounds")]),t._v(": ["),a("a",{attrs:{href:"#outboundobject"}},[t._v("OutboundObject")]),t._v("]")])]),t._v(" "),a("p",[t._v("一个数组，每个元素是一个"),a("a",{attrs:{href:"#outboundobject"}},[t._v("出站连接配置")]),t._v("。列表中的第一个元素作为主出站协议。当路由匹配不存在或没有匹配成功时，流量由主出站协议发出。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("transport")]),t._v(": "),a("RouterLink",{attrs:{to:"/chapter_02/05_transport.html"}},[t._v("TransportObject")])],1)]),t._v(" "),a("p",[t._v("用于配置 V2Ray 如何与其它服务器建立和使用网络连接。详见"),a("RouterLink",{attrs:{to:"/chapter_02/05_transport.html"}},[t._v("底层传输配置")])],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("stats")]),t._v(": "),a("RouterLink",{attrs:{to:"/chapter_02/stats.html"}},[t._v("StatsObject")])],1)]),t._v(" "),a("p",[t._v("当此项存在时，开启"),a("RouterLink",{attrs:{to:"/chapter_02/stats.html"}},[t._v("统计信息")]),t._v("。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("reverse")]),t._v(": "),a("RouterLink",{attrs:{to:"/chapter_02/reverse.html"}},[t._v("ReverseObject")])],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/chapter_02/reverse.html"}},[t._v("反向代理")]),t._v("配置。")],1),t._v(" "),a("h2",{attrs:{id:"logobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logobject"}},[t._v("#")]),t._v(" LogObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文件地址"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文件地址"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"loglevel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warning"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("access")]),t._v(": string")])]),t._v(" "),a("p",[t._v("访问日志的文件地址，其值是一个合法的文件地址，如"),a("code",[t._v('"/tmp/v2ray/_access.log"')]),t._v("（Linux）或者"),a("code",[t._v('"C:\\\\Temp\\\\v2ray\\\\_access.log"')]),t._v("（Windows）。当此项不指定或为空值时，表示将日志输出至 stdout。V2Ray 4.20 加入了特殊值"),a("code",[t._v("none")]),t._v("，即关闭 access log。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("error")]),t._v(": string")])]),t._v(" "),a("p",[t._v("错误日志的文件地址，其值是一个合法的文件地址，如"),a("code",[t._v('"/tmp/v2ray/_error.log"')]),t._v("（Linux）或者"),a("code",[t._v('"C:\\\\Temp\\\\v2ray\\\\_error.log"')]),t._v("（Windows）。当此项不指定或为空值时，表示将日志输出至 stdout。V2Ray 4.20 加入了特殊值"),a("code",[t._v("none")]),t._v("，即关闭 error log（跟"),a("code",[t._v('loglevel: "none"')]),t._v("等价）。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("loglevel")]),t._v(': "debug" | "info" | "warning" | "error" | "none"')])]),t._v(" "),a("p",[t._v("错误日志的级别。默认值为 "),a("code",[t._v('"warning"')]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"debug"')]),t._v("：只有开发人员能看懂的信息。同时包含所有 "),a("code",[t._v('"info"')]),t._v(" 内容。")]),t._v(" "),a("li",[a("code",[t._v('"info"')]),t._v("：V2Ray 在运行时的状态，不影响正常使用。同时包含所有 "),a("code",[t._v('"warning"')]),t._v(" 内容。")]),t._v(" "),a("li",[a("code",[t._v('"warning"')]),t._v("：V2Ray 遇到了一些问题，通常是外部问题，不影响 V2Ray 的正常运行，但有可能影响用户的体验。同时包含所有 "),a("code",[t._v('"error"')]),t._v(" 内容。")]),t._v(" "),a("li",[a("code",[t._v('"error"')]),t._v("：V2Ray 遇到了无法正常运行的问题，需要立即解决。")]),t._v(" "),a("li",[a("code",[t._v('"none"')]),t._v("：不记录任何内容。")])]),t._v(" "),a("h2",{attrs:{id:"inboundobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inboundobject"}},[t._v("#")]),t._v(" InboundObject")]),t._v(" "),a("p",[t._v("入站连接用于接收从客户端（浏览器或上一级代理服务器）发来的数据，可用的协议请见 "),a("RouterLink",{attrs:{to:"/chapter_02/02_protocols.html"}},[t._v("协议列表")]),t._v("。")],1),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"协议名称"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"标识"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sniffing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destOverride"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allocate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strategy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"concurrency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v(': number | "env:variable" | string')])]),t._v(" "),a("p",[t._v("端口。接受的格式如下:")]),t._v(" "),a("ul",[a("li",[t._v("整型数值：实际的端口号。")]),t._v(" "),a("li",[t._v("环境变量：以 "),a("code",[t._v('"env:"')]),t._v(" 开头，后面是一个环境变量的名称，如 "),a("code",[t._v('"env:PORT"')]),t._v("。V2Ray 会以字符串形式解析这个环境变量。")]),t._v(" "),a("li",[t._v("字符串：可以是一个数值类型的字符串，如 "),a("code",[t._v('"1234"')]),t._v("；或者一个数值范围，如 "),a("code",[t._v('"5-10"')]),t._v(" 表示端口 5 到端口 10，这 6 个端口。")])]),t._v(" "),a("p",[t._v("当只有一个端口时，V2Ray 会在此端口监听入站连接。当指定了一个端口范围时，取决于 "),a("code",[t._v("allocate")]),t._v(" 设置。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("listen")]),t._v(": address")])]),t._v(" "),a("p",[t._v("监听地址，只允许 IP 地址，默认值为 "),a("code",[t._v('"0.0.0.0"')]),t._v("，表示接收所有网卡上的连接。除此之外，必须指定一个现有网卡的地址。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("protocol")]),t._v(": string")])]),t._v(" "),a("p",[t._v("连接协议名称，可选的值见 "),a("RouterLink",{attrs:{to:"/chapter_02/02_protocols.html"}},[t._v("协议列表")]),t._v("。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("settings")]),t._v(": InboundConfigurationObject")])]),t._v(" "),a("p",[t._v("具体的配置内容，视协议不同而不同。详见每个协议中的 "),a("code",[t._v("InboundConfigurationObject")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("streamSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/chapter_02/05_transport.html#perproxy"}},[t._v("StreamSettingsObject")]),t._v("。")],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/chapter_02/05_transport.html#perproxy"}},[t._v("底层传输配置")])],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),a("p",[t._v("此入站连接的标识，用于在其它的配置中定位此连接。当其不为空时，其值必须在所有 "),a("code",[t._v("tag")]),t._v(" 中唯一。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("sniffing")]),t._v(": "),a("a",{attrs:{href:"#sniffingobject"}},[t._v("SniffingObject")])])]),t._v(" "),a("p",[t._v("尝试探测流量的类型")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("allocate")]),t._v(": "),a("a",{attrs:{href:"#allocateobject"}},[t._v("AllocateObject")])])]),t._v(" "),a("p",[t._v("端口分配设置")]),t._v(" "),a("h3",{attrs:{id:"sniffingobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sniffingobject"}},[t._v("#")]),t._v(" SniffingObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destOverride"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("enabled")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("是否开启流量探测。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("destOverride")]),t._v(': ["http" | "tls"]')])]),t._v(" "),a("p",[t._v("当流量为指定类型时，按其中包括的目标地址重置当前连接的目标。")]),t._v(" "),a("h3",{attrs:{id:"allocateobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allocateobject"}},[t._v("#")]),t._v(" AllocateObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strategy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"concurrency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("strategy")]),t._v(': "always" | "random"')])]),t._v(" "),a("p",[t._v("端口分配策略。"),a("code",[t._v('"always"')]),t._v(" 表示总是分配所有已指定的端口，"),a("code",[t._v("port")]),t._v(" 中指定了多少个端口，V2Ray 就会监听这些端口。"),a("code",[t._v('"random"')]),t._v(" 表示随机开放端口，每隔 "),a("code",[t._v("refresh")]),t._v(" 分钟在 "),a("code",[t._v("port")]),t._v(" 范围中随机选取 "),a("code",[t._v("concurrency")]),t._v(" 个端口来监听。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("refresh")]),t._v(": number")])]),t._v(" "),a("p",[t._v("随机端口刷新间隔，单位为分钟。最小值为 "),a("code",[t._v("2")]),t._v("，建议值为 "),a("code",[t._v("5")]),t._v("。这个属性仅当 "),a("code",[t._v("strategy = random")]),t._v(" 时有效。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("concurrency")]),t._v(": number")])]),t._v(" "),a("p",[t._v("随机端口数量。最小值为 "),a("code",[t._v("1")]),t._v("，最大值为 "),a("code",[t._v("port")]),t._v(" 范围的三分之一。建议值为 "),a("code",[t._v("3")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"outboundobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundobject"}},[t._v("#")]),t._v(" OutboundObject")]),t._v(" "),a("p",[t._v("出站连接用于向远程网站或下一级代理服务器发送数据，可用的协议请见 "),a("RouterLink",{attrs:{to:"/chapter_02/02_protocols.html"}},[t._v("协议列表")]),t._v("。")],1),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sendThrough"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"协议名称"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"标识"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proxySettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"another-outbound-tag"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mux"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("sendThrough")]),t._v(": address")])]),t._v(" "),a("p",[t._v("用于发送数据的 IP 地址，当主机有多个 IP 地址时有效，默认值为 "),a("code",[t._v('"0.0.0.0"')]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("protocol")]),t._v(": string")])]),t._v(" "),a("p",[t._v("连接协议名称，可选的值见 "),a("RouterLink",{attrs:{to:"/chapter_02/02_protocols.html"}},[t._v("协议列表")]),t._v("。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("settings")]),t._v(": OutboundConfigurationObject")])]),t._v(" "),a("p",[t._v("具体的配置内容，视协议不同而不同。详见每个协议中的 "),a("code",[t._v("OutboundConfigurationObject")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),a("p",[t._v("此出站连接的标识，用于在其它的配置中定位此连接。当其值不为空时，必须在所有 tag 中唯一。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("streamSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/chapter_02/05_transport.html#perproxy"}},[t._v("StreamSettingsObject")])],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/chapter_02/05_transport.html#perproxy"}},[t._v("底层传输配置")])],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("proxySettings")]),t._v(": "),a("a",{attrs:{href:"#proxysettingsobject"}},[t._v("ProxySettingsObject")])])]),t._v(" "),a("p",[t._v("出站代理配置。当出站代理生效时，此出站协议的 "),a("code",[t._v("streamSettings")]),t._v(" 将不起作用。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("mux")]),t._v(": "),a("RouterLink",{attrs:{to:"/chapter_02/mux.html"}},[t._v("MuxObject")])],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/chapter_02/mux.html"}},[t._v("Mux 配置")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"proxysettingsobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxysettingsobject"}},[t._v("#")]),t._v(" ProxySettingsObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"another-outbound-tag"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),a("p",[t._v("当指定另一个出站协议的标识时，此出站协议发出的数据，将被转发至所指定的出站协议发出。")])])}),[],!1,null,null,null);s.default=r.exports}}]);