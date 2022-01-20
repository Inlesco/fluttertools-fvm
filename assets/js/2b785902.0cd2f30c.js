(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||o;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),o=(n(0),n(100)),a={id:"tools",title:"Tools",sidebar_position:4},c={unversionedId:"tools",id:"tools",isDocsHomePage:!1,title:"Tools",description:"There are a few tools that make it easier for implementing FVM in your workflow. Below is a non-exhaustive list. If there is a tool which is not listed feel free to open a pull-request with it.",source:"@site/docs/tools.md",sourceDirName:".",slug:"/tools",permalink:"/docs/tools",editUrl:"https://github.com/leoafarias/fvm/edit/master/website/docs/tools.md",version:"current",sidebarPosition:4,frontMatter:{id:"tools",title:"Tools",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Release In Multiple Channels",permalink:"/docs/advanced/release_multiple_channels"}},l=[{value:"Desktop Apps",id:"desktop-apps",children:[{value:"Sidekick",id:"sidekick",children:[]}]},{value:"Github Actions",id:"github-actions",children:[{value:"fvm-config-action",id:"fvm-config-action",children:[]}]},{value:"Docker Images",id:"docker-images",children:[{value:"Official Images",id:"official-images",children:[]},{value:"daniellampl/flutter-fvm",id:"daniellamplflutter-fvm",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are a few tools that make it easier for implementing FVM in your workflow. Below is a non-exhaustive list. If there is a tool which is not listed feel free to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/leoafarias/fvm/pulls"},"open a pull-request")," with it."),Object(o.b)("h2",{id:"desktop-apps"},"Desktop Apps"),Object(o.b)("h3",{id:"sidekick"},Object(o.b)("a",{parentName:"h3",href:"https://github.com/leoafarias/sidekick"},"Sidekick")),Object(o.b)("p",null,"Sidekick is an app that provides a simple desktop interface to tools that enhance Flutter development experience to make it even more delightful."),Object(o.b)("h2",{id:"github-actions"},"Github Actions"),Object(o.b)("h3",{id:"fvm-config-action"},Object(o.b)("a",{parentName:"h3",href:"https://github.com/kuhnroyal/flutter-fvm-config-action"},"fvm-config-action")),Object(o.b)("p",null,"An action that parses an FVM config file into environment variables which can then be used to configure the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/subosito/flutter-action"},"https://github.com/subosito/flutter-action"),"."),Object(o.b)("h2",{id:"docker-images"},"Docker Images"),Object(o.b)("h3",{id:"official-images"},Object(o.b)("a",{parentName:"h3",href:"https://github.com/leoafarias/fvm/tree/main/.docker"},"Official Images")),Object(o.b)("p",null,"We have some official Docker images which can be a starting point for customization."),Object(o.b)("h3",{id:"daniellamplflutter-fvm"},Object(o.b)("a",{parentName:"h3",href:"https://hub.docker.com/r/daniellampl/flutter-fvm"},"daniellampl/flutter-fvm")),Object(o.b)("p",null,"Allows you to build your mobile #flutter applications using fvm (Flutter Version Management) inside a Docker container \ud83d\udc33"))}u.isMDXComponent=!0}}]);