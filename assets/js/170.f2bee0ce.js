(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{893:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"class-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-platform"}},[t._v("#")]),t._v(" Class Platform")]),t._v(" "),a("Badge",{attrs:{text:"Class",type:"class"}}),t._v(" "),a("Badge",{attrs:{text:"platform",title:"platform",type:"platform"}}),t._v(" "),a("section",{staticClass:"table-features"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Platform } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.47.0/packages/common/src/platform/services/Platform.ts#L0-L0"}},[t._v("/packages/common/src/platform/services/Platform.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Platform "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" injector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" platformApplication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformApplication.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformApplication")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[t._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>injector<span class="token punctuation">:</span> <a href="/api/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">,</span> platformApplication<span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformApplication.html"><span class="token">PlatformApplication</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\nget <span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformApplication.html"><span class="token">PlatformApplication</span></a>&lt;TsED.Application<span class="token punctuation">,</span> TsED.Router&gt;<span class="token punctuation">;</span>\nget <span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRouteController.html"><span class="token">IRouteController</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token function">createRoutersFromControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">(</span>".."<span class="token punctuation">)</span>.PlatformRouterMethods&lt;<span class="token keyword">any</span>&gt; | undefined<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token function">createRouter</span><span class="token punctuation">(</span>routerOptions?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformRouter.html"><span class="token">PlatformRouter</span></a><span class="token punctuation">;</span>\n<span class="token function">addRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRoute.html"><span class="token">IRoute</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">addRoute</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> token<span class="token punctuation">:</span> <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/domain/PlatformRouteDetails.html"><span class="token">PlatformRouteDetails</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[a("code",[t._v("Platform")]),t._v(" is used to provide all routes collected by annotation "),a("code",[t._v("@Controller")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" injector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" platformApplication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformApplication.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformApplication")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformApplication.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformApplication")])]),t._v("<TsED.Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TsED.Router>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/interfaces/IRouteController.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("IRouteController")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRoutersFromControllers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('".."'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".PlatformRouterMethods<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v("> | undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Create routers from the collected controllers")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routerOptions?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformRouter.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformRouter")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Create a new instance of PlatformRouter")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRoutes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/interfaces/IRoute.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("IRoute")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/interfaces/TokenProvider.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("TokenProvider")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoutes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/domain/PlatformRouteDetails.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformRouteDetails")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Get all routes built by TsExpressDecorators and mounted on Express application.")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);