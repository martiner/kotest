"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3743],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),m=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=m(n),c=a,k=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?r.createElement(k,i(i({ref:e},d),{},{components:n})):r.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93533:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"index",title:"Extensions",slug:"extensions.html",sidebar_label:"Introduction"},s=void 0,m={unversionedId:"extensions/index",id:"version-5.5/extensions/index",title:"Extensions",description:"Kotest integrates with many other libraries and frameworks. Some are provided by the Kotest team, and others are",source:"@site/versioned_docs/version-5.5/extensions/index.md",sourceDirName:"extensions",slug:"/extensions/extensions.html",permalink:"/docs/extensions/extensions.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.5/extensions/index.md",tags:[],version:"5.5",frontMatter:{id:"index",title:"Extensions",slug:"extensions.html",sidebar_label:"Introduction"},sidebar:"extensions",next:{title:"Spring",permalink:"/docs/extensions/spring.html"}},d={},p=[{value:"Kotest Team Extensions",id:"kotest-team-extensions",level:3},{value:"Third Party Extensions",id:"third-party-extensions",level:3}],u={toc:p};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kotest integrates with many other libraries and frameworks. Some are provided by the Kotest team, and others are\nmaintained and hosted by third parties."),(0,o.kt)("h3",{id:"kotest-team-extensions"},"Kotest Team Extensions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Project"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/spring.html"},"Spring")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds support for spring beans in tests and spring test annotations")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/ktor.html"},"Ktor")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides matchers for Ktor endpoints")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/koin.html"},"Koin")),(0,o.kt)("td",{parentName:"tr",align:null},"Kotlin DI framework")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/mockserver.html"},"Mockserver")),(0,o.kt)("td",{parentName:"tr",align:null},"Integrate mockserver HTTP servers with the test lifecycle")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/system_extensions.html"},"System")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides utilities for integrating with System.* functions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/instant.html"},"Instant")),(0,o.kt)("td",{parentName:"tr",align:null},"Override the 'now' context in java.time")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/test_containers.html"},"Test Containers")),(0,o.kt)("td",{parentName:"tr",align:null},"Run docker images as part of a test lifecycle")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/wiremock.html"},"Wiremock")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides a mock HTTP server. Project homepage ",(0,o.kt)("a",{parentName:"td",href:"http://wiremock.org/"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/robolectric.html"},"Roboelectric")),(0,o.kt)("td",{parentName:"tr",align:null},"Integrate roboelectric with the test lifecycle")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/allure.html"},"Allure")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides output for the allure framework")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/junit_xml.html"},"JUnit XML")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides output in the JUnit XML format for integration with reporting tools")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/html_reporter.html"},"HTML Reporter")),(0,o.kt)("td",{parentName:"tr",align:null},"Generates HTML reports of test results based on ",(0,o.kt)("a",{parentName:"td",href:"/docs/extensions/junit_xml.html"},"JUnit XML"))))),(0,o.kt)("h3",{id:"third-party-extensions"},"Third Party Extensions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Project"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.http4k.org/guide/reference/kotest/"},"Http4k")),(0,o.kt)("td",{parentName:"tr",align:null},"Functional toolkit for Kotlin HTTP applications")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/micronaut-projects/micronaut-test"},"Micronaut")),(0,o.kt)("td",{parentName:"tr",align:null},"JVM-based, full-stack framework for building modular, easily testable microservice")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.sniffy.io/docs/latest/#_integration_with_kotest"},"Sniffy")),(0,o.kt)("td",{parentName:"tr",align:null},"Network connectivity testing")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/jGleitz/testfiles"},"TestFiles")),(0,o.kt)("td",{parentName:"tr",align:null},"Creates organized files and directories for testing")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/MrBergin/result4k-kotest-matchers"},"Result4s")),(0,o.kt)("td",{parentName:"tr",align:null},"Result4s matchers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/LeoColman/kotest-kotless"},"Kotless")),(0,o.kt)("td",{parentName:"tr",align:null},"Utilties for kotless and kotest")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/jsalinaspolo/logcapture"},"LogCapture")),(0,o.kt)("td",{parentName:"tr",align:null},"LogCapture is a testing library for asserting logging messages")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/appmattus/kotlinfixture/blob/main/fixture-kotest/README.adoc"},"KotlinFixture")),(0,o.kt)("td",{parentName:"tr",align:null},"generate well-defined, but essentially random, input")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://fluentlenium.com/docs/test-runners/#kotest"},"Fluentlenium")),(0,o.kt)("td",{parentName:"tr",align:null},"FluentLenium integration with Kotest")))))}c.isMDXComponent=!0}}]);