"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[19201],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81551:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),s=["components"],r={},l="Release 4.2",p={unversionedId:"blog/release_4.2",id:"version-5.4/blog/release_4.2",title:"Release 4.2",description:"The Kotest team is pleased to announce the release of Kotest 4.2.0.",source:"@site/versioned_docs/version-5.4/blog/release_4.2.md",sourceDirName:"blog",slug:"/blog/release_4.2",permalink:"/docs/5.4/blog/release_4.2",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/blog/release_4.2.md",tags:[],version:"5.4",frontMatter:{}},c={},u=[{value:"Module changes",id:"module-changes",level:3},{value:"Multiplatform improvements",id:"multiplatform-improvements",level:3},{value:"Kotlinx Date/Time Matchers",id:"kotlinx-datetime-matchers",level:3},{value:"Multiple Project Configs",id:"multiple-project-configs",level:3},{value:"Extended Callbacks",id:"extended-callbacks",level:3},{value:"Spec Ordering",id:"spec-ordering",level:3},{value:"Tag Expressions",id:"tag-expressions",level:3},{value:"Spec level Timeout Overrides",id:"spec-level-timeout-overrides",level:3},{value:"Exhaustive Specific forAll / checkAll",id:"exhaustive-specific-forall--checkall",level:3},{value:"Generic Contracts in Matchers",id:"generic-contracts-in-matchers",level:3},{value:"Kotest Plugin Updates",id:"kotest-plugin-updates",level:3},{value:"Improved JUnit XML Report",id:"improved-junit-xml-report",level:3},{value:"Spring Listener Warning",id:"spring-listener-warning",level:3},{value:"Thanks",id:"thanks",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-42"},"Release 4.2"),(0,o.kt)("p",null,"The Kotest team is pleased to announce the release of Kotest 4.2.0.\nThis minor feature release continues on the excellent work that was included in the 4.1.0 release (which itself was almost as large as the 4.0.0 release!)."),(0,o.kt)("p",null,"In this blog post we'll cover some of the more notable features and changes but for the full list see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.4/changelog.html"},"changelog"),"."),(0,o.kt)("h3",{id:"module-changes"},"Module changes"),(0,o.kt)("p",null,"Firstly, the ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest-runner-console")," dependency is no longer required by the intellij plugin, and therefore no longer exists.\nSo that can be removed completely from your build if you were using it."),(0,o.kt)("p",null,"Secondly, the ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest-core")," dependency has become ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest-framework-engine"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are using JVM tests, you should continue to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"kotest-runner-junit5-jvm")," dependency as before, and no changes are needed."),(0,o.kt)("li",{parentName:"ul"},"If you were explicitly depending on the core module (for JS tests), then\nyou can add ",(0,o.kt)("inlineCode",{parentName:"li"},"kotest-framework-engine")," to your ",(0,o.kt)("inlineCode",{parentName:"li"},"commonMain")," sourceset or ",(0,o.kt)("inlineCode",{parentName:"li"},"kotest-framework-engine-js")," to your ",(0,o.kt)("inlineCode",{parentName:"li"},"jsMain")," sourceset.")),(0,o.kt)("p",null,"Finally this release of Kotest is fully compatible with Kotlin 1.4."),(0,o.kt)("h3",{id:"multiplatform-improvements"},"Multiplatform improvements"),(0,o.kt)("p",null,"The core assertions library is now published for ios, watchos and tvos. This brings the list of support platforms to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"linuxX64, mingwX64, macosX64, tvosX64, tvosArm64, watchosX86, watchosArm64, iosX64, iosArm64, iosArm32")),(0,o.kt)("h3",{id:"kotlinx-datetime-matchers"},"Kotlinx Date/Time Matchers"),(0,o.kt)("p",null,"A new ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest/kotest-assertions-kotlinx-time"},"assertions module")," has been created ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest-assertions-kotlinx-time"),"\nwhich contains matchers for the new ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx-datetime"},"Kotlinx Datetime library"),".\nSince the datetime library has an ",(0,o.kt)("em",{parentName:"p"},"incubating")," status, this assertions module may require breaking changes in the future if the date/time API mandates it."),(0,o.kt)("p",null,"This assertions module is multi platform and is released for the JVM, JS, Linux, Mac and Windows targets."),(0,o.kt)("p",null,"An example assertion is checking that a date time has a given hour."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val date = LocalDateTime(2019, 2, 15, 12, 10, 0, 0)\ndate.shouldHaveHour(12)\n")),(0,o.kt)("p",null,"For the full list of matchers, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest/tree/master/kotest-assertions/kotest-assertions-kotlinx-time/src/commonMain/kotlin/io/kotest/matchers/kotlinx/datetime"},"source code"),"."),(0,o.kt)("h3",{id:"multiple-project-configs"},"Multiple Project Configs"),(0,o.kt)("p",null,"Kotest supports customizing test plans by extending the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractProjectConfig")," class and placing it in your classpath somewhere. From 4.2.0, you can\nnow create more than one and all will be detected and configs merged. This is really nice if you want to have some shared config for all your tests in\na root module, and then customize with more finer details per module."),(0,o.kt)("p",null,"In the case of clashes, one value will be arbitrarily picked, so it is not recommended to add competing settings to different configs."),(0,o.kt)("h3",{id:"extended-callbacks"},"Extended Callbacks"),(0,o.kt)("p",null,"Kotest has always had ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeTest")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"afterTest")," callbacks which run before / after any 'test scope'. However sometimes you need a way to run setup/teardown code only before leaf\ntest scopes (called tests in Kotest) or branch test scopes (called containers in Kotest)."),(0,o.kt)("p",null,"So in 4.2.0 we've introduced ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"afterEach"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeContainer"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterContainer"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"xxEach")," functions are invoked only for leaf level test scopes.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"xxContainer")," functions are invoked only for branch level test scopes."),(0,o.kt)("p",null,"This distinction is only relevant to ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.4/framework/testing-styles.html"},"test styles")," that support nested scopes."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class CallbacksTest : DescribeSpec({\n\n   beforeEach {\n      println("Test: " + it.displayName)\n   }\n\n   beforeContainer {\n      println("Container: " + it.displayName)\n   }\n\n   beforeTest {\n      println("All: " + it.displayName)\n   }\n\n   describe("I am a container scope") {\n      it("And I am a test scope") { }\n   }\n})\n')),(0,o.kt)("p",null,"The output you would receive is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Container: I am a container scope\nAll: I am a container scope\n\nTest: And I am a test scope\nAll: And I am a test scope\n")),(0,o.kt)("h3",{id:"spec-ordering"},"Spec Ordering"),(0,o.kt)("p",null,"Kotest previously allowed the execution order of Specs to be decided randomly, discovery order (the default), or lexicographically. Now, there is support for an\nannotation based approach. By selecting this, and annotating your Specs with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Order(int)")," you can specify any order you wish, with the specs with\nthe lowest int values executing first."),(0,o.kt)("p",null,"Any spec without an ",(0,o.kt)("inlineCode",{parentName:"p"},"@Order"),' annotation is considered "last". Any specs that tie will be executed arbitrarily.'),(0,o.kt)("h3",{id:"tag-expressions"},"Tag Expressions"),(0,o.kt)("p",null,"Tests and Specs can be tagged with ",(0,o.kt)("inlineCode",{parentName:"p"},"Tag")," objects and then at runtime, tests can be enabled or disabled by specifying which tags to use. Previously, you\ncould do this by specifying which tags to include and which tags to exclude but nothing more advanced."),(0,o.kt)("p",null,"Now, you are able to specfify full boolean expressions using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.tags")," system property, for example:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'gradle test -Dkotest.tags="Linux & !Database"'),"."),(0,o.kt)("p",null,"Expressions can be nested using parenthesis and can be arbitrarily complex. For full details see ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.4/framework/tags.html"},"Tags"),"."),(0,o.kt)("p",null,"Note: Existing system properties ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.tags.include")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.tags.exclude")," are still supported, but the new functionality supersedes this."),(0,o.kt)("h3",{id:"spec-level-timeout-overrides"},"Spec level Timeout Overrides"),(0,o.kt)("p",null,"It has always been possible to add a timeout to a test at the global level or via test case config for each specific test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},' test("my test").config(timeout = 20.seconds) { }\n')),(0,o.kt)("p",null,"But it has not previously been possible to override this as the spec level for all tests in that spec. Now you can."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : DescribeSpec({\n\n   timeout = 1000\n\n   describe("I will timeout in 1000 millis") {\n      it("And so will I") { }\n      it("But I\'m a little faster").config(timeout = 500.milliseconds) { }\n   }\n\n})\n')),(0,o.kt)("p",null,"Note: You can apply a spec level timeout and then override this per test case, as you can see in the example above.\nThe same functionality exists for invocation timeouts."),(0,o.kt)("h3",{id:"exhaustive-specific-forall--checkall"},"Exhaustive Specific forAll / checkAll"),(0,o.kt)("p",null,"When property testing, if you are using only ",(0,o.kt)("inlineCode",{parentName:"p"},"exhaustive")," generators, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"forAll")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"checkAll")," methods will now ensure that the number of iterations\nis equal to the number of combinations in the exhaustives, and that all combinations are executed."),(0,o.kt)("p",null,"As a contrived example, consider this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," val context = checkAll(\n    Exhaustive.ints(0..5),\n    Exhaustive.ints(0..5),\n    Exhaustive.ints(0..5)\n ) { ... }\n")),(0,o.kt)("p",null,"Here, the number of iterations is 6 ",(0,o.kt)("em",{parentName:"p"}," 6 ")," 6 = 216 and each tuple combination of (0-5, 0-5, 0-5) will be executed. The first will be (0, 0, 0) and the\nlast wil be (5, 5, 5) with every combination in between."),(0,o.kt)("h3",{id:"generic-contracts-in-matchers"},"Generic Contracts in Matchers"),(0,o.kt)("p",null,"When using shouldBeInstanceOf<T",">"," or shouldBeTypeOf<T",">",", the assertions can now use generic contracts to smart case down to generic instances."),(0,o.kt)("p",null,"For example, consider the following example where we are given an Any. After invoking ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldBeTypeOf")," with a generic type, the type is smart\ncasted if the assertion passes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val list: Any = arrayListOf(1, 2, 3)\nlist.shouldBeTypeOf<ArrayList<Int>>()\nlist[0] shouldBe 1 // can only work with a smart case\n")),(0,o.kt)("h3",{id:"kotest-plugin-updates"},"Kotest Plugin Updates"),(0,o.kt)("p",null,"The Kotest Intellij Plugin is released on a separate cadence from Kotest itself, but here are some notable changes since Kotest 4.1.0."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No extra dependencies are needed to use the plugin - the plugin ships with all required libraries."),(0,o.kt)("li",{parentName:"ul"},"The new extended callbacks are recognized in the Kotest tool window."),(0,o.kt)("li",{parentName:"ul"},"Runnning single tests is now supported in ",(0,o.kt)("inlineCode",{parentName:"li"},"AnnotationSpec"),"."),(0,o.kt)("li",{parentName:"ul"},"Seperate builds for Android Studio / Intellij 2019 to address some minor incompatibilities."),(0,o.kt)("li",{parentName:"ul"},"Added inspection for using focus mode in nested tests"),(0,o.kt)("li",{parentName:"ul"},"Added implicit usage provider for object based project config")),(0,o.kt)("h3",{id:"improved-junit-xml-report"},"Improved JUnit XML Report"),(0,o.kt)("p",null,"The Junit XML report (what JUnit refers to as the legacy XML report because it existed prior to JUnit5) has no concept of nested tests.\nTherefore, if you are using a spec style that supports nested tests, the gradle report generator will only use the leaf test name.\nThis can be confusing if you are expecting the full test path for context."),(0,o.kt)("p",null,"In 4.2.0 Kotest has it's own implementation of this XML report that contains options to a) include the full test path and / or b) ignore parent tests completely."),(0,o.kt)("p",null,"Example usage from within project config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ProjectConfig : AbstractProjectConfig() {\n\n   override fun listeners(): List<Listener> = listOf(\n     JunitXmlReporter(\n        includeContainers = true, // write out status for all tests\n        useTestPathAsName = true // use the full test path (ie, includes parent test names)\n     )\n   )\n}\n")),(0,o.kt)("h3",{id:"spring-listener-warning"},"Spring Listener Warning"),(0,o.kt)("p",null,"If you are using the spring support and are using a final class, you will receive a warning from Kotest:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Using SpringListener on a final class. If any Spring annotation fails to work, try making this class open")),(0,o.kt)("p",null,"You can disable this warning by setting the system property ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.listener.spring.ignore.warning")," to true."),(0,o.kt)("h3",{id:"thanks"},"Thanks"),(0,o.kt)("p",null,"Huge thanks to all who contributed to this release."),(0,o.kt)("p",null,"Alberto Ballano, Ali Albaali, amollberg, Ashish Kumar Joy, Christian Stoenescu, Cleidiano Oliveira ,Daniel Asztalos,\nfauscik, Juanjo Aguililla, Justin, Leonardo Colman, Matthew Mikolay, Neenad Ingole, Shane Lathrop, sksamuel, Timothy Lusk"))}m.isMDXComponent=!0}}]);