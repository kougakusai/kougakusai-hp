(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{6010:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})},2167:function(e,t,r){"use strict";var a=r(3848);t.default=void 0;var n,s=(n=r(7294))&&n.__esModule?n:{default:n},l=r(1063),c=r(4651),o=r(7426);var i={};function p(e,t,r,a){if(e&&l.isLocalURL(t)){e.prefetch(t,r,a).catch((function(e){0}));var n=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;i[t+"%"+r+(n?"%"+n:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),u=s.default.useMemo((function(){var t=l.resolveHref(n,e.href,!0),r=a(t,2),s=r[0],c=r[1];return{href:s,as:e.as?l.resolveHref(n,e.as):c||s}}),[n,e.href,e.as]),f=u.href,d=u.as,x=e.children,h=e.replace,m=e.shallow,g=e.scroll,v=e.locale;"string"===typeof x&&(x=s.default.createElement("a",null,x));var b=(t=s.default.Children.only(x))&&"object"===typeof t&&t.ref,w=o.useIntersection({rootMargin:"200px"}),k=a(w,2),j=k[0],N=k[1],y=s.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);s.default.useEffect((function(){var e=N&&r&&l.isLocalURL(f),t="undefined"!==typeof v?v:n&&n.locale,a=i[f+"%"+d+(t?"%"+t:"")];e&&!a&&p(n,f,d,{locale:t})}),[d,f,N,v,r,n]);var Z={ref:y,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,a,n,s,c,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==c&&a.indexOf("#")>=0&&(c=!1),t[n?"replace":"push"](r,a,{shallow:s,locale:o,scroll:c}))}(e,n,f,d,h,m,g,v)},onMouseEnter:function(e){l.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),p(n,f,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof v?v:n&&n.locale,P=n&&n.isLocaleDomain&&l.getDomainLocale(d,E,n&&n.locales,n&&n.domainLocales);Z.href=P||l.addBasePath(l.addLocale(d,E,n&&n.defaultLocale))}return s.default.cloneElement(t,Z)};t.default=u},7426:function(e,t,r){"use strict";var a=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,o=n.useRef(),i=n.useState(!1),p=a(i,2),u=p[0],f=p[1],d=n.useCallback((function(e){o.current&&(o.current(),o.current=void 0),r||u||e&&e.tagName&&(o.current=function(e,t,r){var a=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var a=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:n,elements:a}),r}(r),n=a.id,s=a.observer,l=a.elements;return l.set(e,t),s.observe(e),function(){l.delete(e),s.unobserve(e),0===l.size&&(s.disconnect(),c.delete(n))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return n.useEffect((function(){if(!l&&!u){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),[d,u]};var n=r(7294),s=r(3447),l="undefined"!==typeof IntersectionObserver;var c=new Map},270:function(e,t,r){"use strict";var a=r(6010),n=r(5893);t.Z=function(e){return(0,n.jsx)("div",{className:(0,a.Z)(e.className),children:(0,n.jsxs)("div",{className:"z-10 w-[120px] h-[120px] relative k-lg:scale-[1.48] k-lg:top-[29px] k-lg:right-[29px]",children:[(0,n.jsx)("div",{className:(0,a.Z)("z-30 top-0 right-0","bg-k-navy-dark w-[117px] h-[76px] absolute mb-[33px]","flex justify-center items-center","after:w-[117px] after:h-0 after:absolute after:bottom-0 after:left-0","after:border-t-k-navy-dark after:border-t-[41px]","after:border-l-[40px] after:border-l-transparent","after:border-r-0 after:border-b-0","after:top-[99%]"),children:(0,n.jsxs)("div",{className:"z-30 k-lg:scale-[0.9] text-center translate-x-[5px] translate-y-[20px] text-[#94DD26] text-4xl font-medium slashed-zero brightness-125 saturate-200 glitch",children:[(0,n.jsx)("p",{className:"font-bold tracking-[0.8rem]",children:"\u958b\u50ac"}),(0,n.jsx)("p",{className:"font-semibold tracking-[0.5rem]",children:"2021"}),(0,n.jsx)("p",{children:"11.06"})]})}),(0,n.jsx)("div",{className:(0,a.Z)("z-20","bg-[#94DD26] w-[120px] h-[79px] absolute mb-[40px] top-0","after:w-[120px] after:h-0 after:absolute after:bottom-0 after:left-0","after:border-t-[#94DD26] after:border-t-[41px]","after:border-l-[40px] after:border-l-transparent","after:border-r-0 after:border-b-0","after:top-[99%]")})]})})}},5426:function(e,t,r){"use strict";var a=r(1664),n=r(6010),s=r(9638),l=r(5893),c=[{pagePath:"/",description:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8"},{pagePath:"/about",description:"\u30aa\u30f3\u30e9\u30a4\u30f3\u958b\u50ac\u306b\u3064\u3044\u3066"},{pagePath:"/event/show",description:"\u4f01\u753b\u4e00\u89a7"},{pagePath:"/company",description:"\u5354\u8cdb\u4f01\u696d\u4e00\u89a7"},{pagePath:"/contact",description:"\u304a\u554f\u3044\u5408\u308f\u305b"},{pagePath:"/policy",description:"\u30b5\u30a4\u30c8\u30dd\u30ea\u30b7\u30fc"}];t.Z=function(){return(0,l.jsx)("footer",{className:(0,n.Z)("k-lg:ml-auto w-full k-lg:w-[calc(100%-20vw)]","bg-k-navy-black text-white text-[1.8rem]","px-[10%] pt-[10%] pb-[180px] k-lg:py-[5%] k-lg:pl-[7%] k-lg:pr-[20%] k-lg:pb-[130px]"),children:(0,l.jsxs)("div",{children:[(0,l.jsx)(s.Z,{className:"mb-[20px]"}),(0,l.jsx)("ul",{className:"space-y-[10px]",children:c.map((function(e){var t=e.pagePath,r=e.description;return(0,l.jsx)("li",{children:(0,l.jsx)(a.default,{href:t,children:(0,l.jsx)("a",{children:r})})},t)}))})]})})}},9003:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var a=r(7294),n=r(1664),s=r(6010),l=r(5893),c="/kougakusai-hp",o=function(e){return(0,l.jsxs)("div",{className:(0,s.Z)("relative w-[150px]",e.className),children:[(0,l.jsx)("img",{src:"".concat(c,"/menuButton.svg"),alt:"MenuToggleButton"}),(0,l.jsxs)("button",{className:"absolute w-[70px] h-[60px] top-[calc(50%-25px)] left-[calc(50%-35px)]",onClick:e.toggleIsExpand,children:[(0,l.jsx)("div",{className:(0,s.Z)("absolute bg-white w-[50px] h-px left-[calc(50%-27px)] transform duration-[400ms] ease-in-out",e.isExpand?"top-[20px] rotate-[225deg]":"top-[6px]")}),(0,l.jsx)("div",{className:(0,s.Z)("absolute bg-white w-[50px] h-px top-[20px] left-[calc(50%-27px)] transform duration-[400ms] ease-in-out",{"rotate-[225deg] bg-transparent":e.isExpand})}),(0,l.jsx)("div",{className:(0,s.Z)("absolute bg-white w-[50px] h-px left-[calc(50%-27px)] transform duration-[400ms] ease-in-out",e.isExpand?"top-[20px] rotate-[135deg]":"top-[34px]")}),(0,l.jsx)("img",{src:"".concat(c,"/menuText.svg"),alt:"MenuText",width:"55px",className:"absolute top-[40px] left-[calc(50%-30px)]"})]})]})},i=r(9638),p="/kougakusai-hp",u=[{pagePath:"/",description:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8"},{pagePath:"/about",description:"\u30aa\u30f3\u30e9\u30a4\u30f3\u958b\u50ac\u306b\u3064\u3044\u3066"},{pagePath:"/event/show",description:"\u4f01\u753b\u4e00\u89a7"},{pagePath:"/company",description:"\u5354\u8cdb\u4f01\u696d\u4e00\u89a7"},{pagePath:"/contact",description:"\u304a\u554f\u3044\u5408\u308f\u305b"}],f=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];return(0,l.jsxs)("header",{className:"relative",children:[(0,l.jsxs)("div",{className:"bg-k-navy-dark fixed w-full h-[104px] bottom-0 z-50 k-lg:hidden",children:[(0,l.jsx)("div",{className:"h-[4px] bg-gradient-to-r from-k-blue-light to-k-pink",children:(0,l.jsx)(o,{isExpand:t,toggleIsExpand:function(){return r((function(e){return!e}))},className:"top-[-75px] left-[calc(50%-75px)]"})}),(0,l.jsx)("div",{className:"w-full px-[15%] py-[10px]",children:(0,l.jsxs)("div",{className:"flex justify-between text-2xl text-white text-center",children:[(0,l.jsx)("div",{children:(0,l.jsx)(n.default,{href:"/",children:(0,l.jsxs)("a",{onClick:function(){return r(!1)},className:"w-[44px]",children:[(0,l.jsx)("img",{src:"".concat(p,"/home.svg"),alt:"TOP\u3078",width:"44px"}),(0,l.jsx)("span",{children:"Top"})]})})}),(0,l.jsx)("div",{children:(0,l.jsx)(n.default,{href:"/event/show",children:(0,l.jsxs)("a",{onClick:function(){return r(!1)},className:"w-[44px]",children:[(0,l.jsx)("img",{src:"".concat(p,"/event.svg"),alt:"\u4f01\u753b\u30da\u30fc\u30b8\u3078",width:"44px",height:"44px"}),(0,l.jsx)("span",{children:"Event"})]})})})]})})]}),(0,l.jsxs)("nav",{className:(0,s.Z)("bg-k-navy-dark fixed w-full max-h-[40vh] text-white z-40 transform duration-[400ms] ease-in-out","k-lg:p-[20px] k-lg:bottom-0 k-lg:h-screen k-lg:max-h-screen k-lg:w-[20vw] k-lg:min-w-[250px] k-lg:transition-none",t?"bottom-[104px]":"bottom-[-40vh]"),children:[(0,l.jsx)(n.default,{href:"/",children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:"".concat(p,"/logoWhite.svg"),alt:"\u3053\u3046\u304c\u304f\u796d",className:"hidden k-lg:block w-full"})})}),(0,l.jsx)("ul",{className:"w-full px-[55px] pt-[25px] pb-[60px] k-lg:p-0",children:u.map((function(e){var t=e.pagePath,a=e.description;return(0,l.jsx)("li",{className:"flex flex-row",children:(0,l.jsx)(n.default,{href:t,children:(0,l.jsxs)("a",{className:(0,s.Z)("text-2xl flex w-full block border-b border-k-gray-dark","transition-opacity duration-300 hover:opacity-60","h-[44px] leading-[40px]","k-lg:h-[60px] k-lg:leading-[60px]"),onClick:function(){return r(!1)},children:[a,(0,l.jsx)("div",{className:"flex w-[8px] h-[8px] ml-auto my-auto border-t-2 border-r-2 border-white transform rotate-45"})]})})},t)}))}),(0,l.jsx)(i.Z,{className:"hidden k-lg:block pt-[30px]"})]})]})}},5233:function(e,t,r){"use strict";var a=r(5893),n=(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"fill-current",children:(0,a.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})});t.Z=function(e){return(0,a.jsxs)("div",{className:"".concat(e.className," hover:text-transparent duration-[400ms]"),children:[n,(0,a.jsx)("img",{src:"/kougakusai-hp/instagram.svg",alt:"Instagram",className:"opacity-0 hover:opacity-100 duration-[400ms] w-full h-full mt-[-100%]"})]})}},9638:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(6010),n=r(2487),s=r(5233),l=r(5893),c=function(e){return(0,l.jsx)("svg",{viewBox:"0 0 167 188",version:"1.1",id:"svg8",width:"167",height:"188",xmlns:"http://www.w3.org/2000/svg",className:"".concat(e.className," fill-current text-white hover:text-[#41C9B4] duration-[400ms]"),children:(0,l.jsx)("g",{id:"white/logo_symbol",stroke:"none",strokeWidth:"1",transform:"translate(-116.5,-106)",children:(0,l.jsx)("path",{d:"m 180.3885,169.6969 v -14.37858 c 0,-2.62027 0.13567,-3.49409 0.53908,-4.83834 1.07815,-3.6952 4.71843,-6.44953 9.03105,-6.44953 4.31262,0 7.95169,2.82137 9.02985,6.44953 0.40461,1.34425 0.54028,2.21807 0.54028,4.83834 v 22.17236 c 0,1.34425 0,2.68731 -0.27014,3.89749 -0.74078,3.35883 -3.77355,6.3837 -7.14368,7.12226 -1.21263,0.26813 -2.56092,0.26813 -3.90921,0.26813 h -22.23906 c -2.62815,0 -3.5046,-0.13407 -4.8529,-0.53746 -3.63907,-1.07493 -6.46893,-4.70309 -6.46893,-9.00277 0,-4.30089 2.82986,-7.92905 6.46893,-9.00397 1.3483,-0.40339 2.22475,-0.53746 4.8529,-0.53746 z m 79.25401,100.51836 H 140.35749 V 165.46424 c 0,-1.34425 0.47184,-2.4862 1.41552,-3.42706 l 30.93273,-30.84116 c 0.94369,-0.93965 2.08908,-1.41008 3.43737,-1.41008 h 83.4994 z M 273.18909,106.13407 C 272.58278,106.06703 271.77356,106 270.22356,106 h -97.24888 c -1.07695,0 -2.15511,0.067 -2.89709,0.13407 -4.44829,0.40339 -8.42474,2.4862 -11.59197,5.64393 l -36.19024,36.08171 c -3.16603,3.15893 -5.2563,7.12225 -5.65971,11.5572 -0.0684,0.73856 -0.13567,1.81348 -0.13567,2.88841 v 118.45806 c 0,1.54535 0.0672,2.35214 0.13567,2.95663 0.53788,5.03945 5.12064,9.60727 10.17524,10.14473 0.60751,0.0682 1.41553,0.13526 2.96553,0.13526 h 140.44712 c 1.55,0 2.35922,-0.067 2.96553,-0.13526 5.0546,-0.53746 9.63736,-5.10528 10.17644,-10.14473 0.066,-0.60449 0.13447,-1.41128 0.13447,-2.95663 V 119.23662 c 0,-1.54535 -0.0684,-2.35214 -0.13447,-2.95663 -0.53908,-5.03945 -5.12184,-9.60846 -10.17644,-10.14592 z",id:"Shape"})})})},o="w-[32px] h-[32px] m-auto",i=[{title:"Twitter",url:"https://twitter.com/kougakufes",icon:(0,l.jsx)(n.Z,{className:o})},{title:"Instagram",url:"https://www.instagram.com/kougakufes/",icon:(0,l.jsx)(s.Z,{className:o})},{title:"note",url:"https://note.com/mtea/m/m4e45de2664ba/",icon:(0,l.jsx)(c,{className:o})}],p=function(e){return(0,l.jsxs)("div",{className:(0,a.Z)("text-white",e.className),children:[(0,l.jsx)("p",{className:"mb-[10px] k-lg:mb-[15px]",children:"FOLLOW US"}),(0,l.jsx)("ul",{className:"flex flex-wrap",children:i.map((function(e){var t=e.title,r=e.url,a=e.icon;return(0,l.jsx)("li",{className:"flex",children:(0,l.jsx)("a",{title:t,href:r,target:"_blank",rel:"noopener noreferrer",className:"w-[44px] h-[44px] p-[6px]",children:a})},t)}))})]})}},2487:function(e,t,r){"use strict";var a=r(5893);t.Z=function(e){return(0,a.jsx)("svg",{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 249.89999 203.2",xmlSpace:"preserve",id:"svg12",width:"249.89999",height:"203.2",xmlns:"http://www.w3.org/2000/svg",className:"".concat(e.className," stroke-current fill-current text-white hover:text-[#1D9BF0] duration-[400ms]"),children:(0,a.jsx)("path",{transform:"translate(-75.1,-98.4)",d:"m 153.6,301.6 c 94.3,0 145.9,-78.2 145.9,-145.9 0,-2.2 0,-4.4 -0.1,-6.6 10,-7.2 18.7,-16.3 25.6,-26.6 -9.2,4.1 -19.1,6.8 -29.5,8.1 10.6,-6.3 18.7,-16.4 22.6,-28.4 -9.9,5.9 -20.9,10.1 -32.6,12.4 -9.4,-10 -22.7,-16.2 -37.4,-16.2 -28.3,0 -51.3,23 -51.3,51.3 0,4 0.5,7.9 1.3,11.7 -42.6,-2.1 -80.4,-22.6 -105.7,-53.6 -4.4,7.6 -6.9,16.4 -6.9,25.8 0,17.8 9.1,33.5 22.8,42.7 -8.4,-0.3 -16.3,-2.6 -23.2,-6.4 0,0.2 0,0.4 0,0.7 0,24.8 17.7,45.6 41.1,50.3 -4.3,1.2 -8.8,1.8 -13.5,1.8 -3.3,0 -6.5,-0.3 -9.6,-0.9 6.5,20.4 25.5,35.2 47.9,35.6 -17.6,13.8 -39.7,22 -63.7,22 -4.1,0 -8.2,-0.2 -12.2,-0.7 22.6,14.4 49.6,22.9 78.5,22.9"})})}},9008:function(e,t,r){e.exports=r(639)},1664:function(e,t,r){e.exports=r(2167)}}]);