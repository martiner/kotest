"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[16915],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return p}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),s=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=s(e.components);return o.createElement(a.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),p=r,b=d["".concat(a,".").concat(p)]||d[p]||g[p]||i;return t?o.createElement(b,u(u({ref:n},l),{},{components:t})):o.createElement(b,u({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,u=new Array(i);u[0]=d;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var s=2;s<i;s++)u[s]=t[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44307:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return g}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),u=["components"],c={id:"coroutine_debugging",title:"Coroutine Debugging",slug:"coroutine-debugging.html",sidebar_label:"Coroutine Debugging"},a=void 0,s={unversionedId:"framework/coroutines/coroutine_debugging",id:"version-5.4/framework/coroutines/coroutine_debugging",title:"Coroutine Debugging",description:"kotlinx-coroutines-debug is a module that provides debugging capabilities for coroutines on the JVM. When enabled, a debug agent",source:"@site/versioned_docs/version-5.4/framework/coroutines/coroutine_debugging.md",sourceDirName:"framework/coroutines",slug:"/framework/coroutines/coroutine-debugging.html",permalink:"/docs/5.4/framework/coroutines/coroutine-debugging.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/framework/coroutines/coroutine_debugging.md",tags:[],version:"5.4",frontMatter:{id:"coroutine_debugging",title:"Coroutine Debugging",slug:"coroutine-debugging.html",sidebar_label:"Coroutine Debugging"},sidebar:"framework",previous:{title:"Test Coroutine Dispatcher",permalink:"/docs/5.4/framework/coroutines/test-coroutine-dispatcher.html"},next:{title:"Exceptions",permalink:"/docs/5.4/framework/exceptions.html"}},l={},g=[{value:"Spec level config",id:"spec-level-config",level:3},{value:"Project wide config",id:"project-wide-config",level:3}],d={toc:g};function p(e){var n=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.coroutines/tree/master/kotlinx-coroutines-debug"},"kotlinx-coroutines-debug")," is a module that provides debugging capabilities for coroutines on the JVM. When enabled, a debug agent\nis installed by ByteBuddy and captures information on coroutines as they are created, started, suspended and resumed."),(0,i.kt)("p",null,"Kotest provides the ability to enable debugging per test. We can do this by enabling ",(0,i.kt)("inlineCode",{parentName:"p"},"coroutineDebugProbes")," in test config."),(0,i.kt)("p",null,'Once enabled, any coroutines launched inside the test will be included in a "coroutine dump" after the test completes, or as soon\nas an exception is thrown.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class CoroutineDebugging : FunSpec() {\n   init {\n      test("foo").config(coroutineDebugProbes = true) {\n         someMethodThatLaunchesACoroutine() // launches a new coroutine\n      }\n   }\n}\n')),(0,i.kt)("p",null,"The coroutine dump will look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Coroutines dump 2021/11/27 22:17:43\n\nCoroutine DeferredCoroutine{Active}@71f1906, state: CREATED\n    (Coroutine creation stacktrace)\n    at kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt.createCoroutineUnintercepted(IntrinsicsJvm.kt:122)\n    at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:30)\n    at kotlinx.coroutines.BuildersKt__Builders_commonKt.async$default(Builders.common.kt:82)\n    at kotlinx.coroutines.BuildersKt.async$default(Unknown Source)\n    at com.sksamuel.kotest.engine.coroutines.Wibble$1.invokeSuspend(CoroutineDebugTest.kt:37)\n    at com.sksamuel.kotest.engine.coroutines.Wibble$1.invoke(CoroutineDebugTest.kt)\n")),(0,i.kt)("h3",{id:"spec-level-config"},"Spec level config"),(0,i.kt)("p",null,"Coroutine debugging can be enabled for all tests in a spec by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"coroutineDebugProbes")," setting\ninside a spec:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class CoroutineDebugging : FunSpec() {\n  init {\n\n    coroutineDebugProbes = true\n\n    test("foo") {\n      // debugging enabled here\n    }\n\n    test("bar") {\n      // debugging enabled here\n    }\n\n  }\n}\n')),(0,i.kt)("h3",{id:"project-wide-config"},"Project wide config"),(0,i.kt)("p",null,"Coroutine debugging can be enabled for all tests in a project by using ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.4/framework/project-config.html"},"ProjectConfig"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ProjectConfig : AbstractProjectConfig() {\n  override val coroutineDebugProbes = true\n}\n")))}p.isMDXComponent=!0}}]);