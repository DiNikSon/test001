(function(){"use strict";var e={9695:function(e,n,t){var r=t(5130),o=t(6768);function c(e,n){const t=(0,o.g2)("router-link"),r=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",null,[(0,o.bF)(t,{to:"/"},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.eW)("Home")]))),_:1}),n[2]||(n[2]=(0,o.eW)(" | ")),(0,o.bF)(t,{to:"/about"},{default:(0,o.k6)((()=>n[1]||(n[1]=[(0,o.eW)("About")]))),_:1})]),(0,o.bF)(r)],64)}var a=t(1241);const i={},u=(0,a.A)(i,[["render",c]]);var A=u,f=t(1387);function v(e,n,t,r,c,a){const i=(0,o.g2)("SceneManager");return(0,o.uX)(),(0,o.Wv)(i,{initial:"start"})}function s(e,n,t,r,c,a){const i=(0,o.g2)("scene");return c.current?((0,o.uX)(),(0,o.Wv)(i,{key:0,data:c.scenes[c.current]},null,8,["data"])):(0,o.Q3)("",!0)}var m=t(4232);const l=["src"];function z(e,n,t,r,c,a){return"cutscene"===t.data.type?((0,o.uX)(),(0,o.CE)("div",{key:0,onClick:n[0]||(n[0]=(...e)=>a.clicked&&a.clicked(...e))},[a.act.bg?((0,o.uX)(),(0,o.CE)("img",{key:0,src:a.act.bg,alt:"Вы не должны были это увидеть"},null,8,l)):(0,o.Q3)("",!0),(0,o.Lk)("div",null,(0,m.v_)(a.act.text),1)])):(0,o.Q3)("",!0)}var d={name:"Scene",props:{data:{type:Object,default:()=>({type:"none"})}},data(){return{current:0}},computed:{act(){return this.data.acts[this.current]}},methods:{clicked(){for(let e of this.act.click)({goTo:this.goTo})[e.method](...e.args)},goTo(e){this.current=e}}};const x=(0,a.A)(d,[["render",z]]);var g=x,M={name:"SceneManager",components:{Scene:g},props:{initial:"start"},mounted(){this.current=this.initial},data(){return{current:null,scenes:{start:{type:"cutscene",acts:{0:{bg:t(8738),text:"Я проснулся и пошёл в магазин за хлебом...",click:[{method:"goTo",args:[1]}]},1:{bg:t(2664),text:'Но магазин был закрыт, а на двери висела записка: "Закрыто до завтра!", так что я пошел домой и лег спать. А затем...',click:[{method:"goTo",args:[0]}]}}}}}}};const p=(0,a.A)(M,[["render",s]]);var h=p,P={name:"HomeView",components:{SceneManager:h}};const B=(0,a.A)(P,[["render",v]]);var O=B;const Y=[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:()=>t.e(594).then(t.bind(t,603))}],E=(0,f.aE)({history:(0,f.LA)("/test001/"),routes:Y});var y=E;(0,r.Ef)(A).use(y).mount("#app")},8738:function(e){e.exports="data:image/png;base64,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"},2664:function(e,n,t){e.exports=t.p+"img/start1.85d1a455.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={exports:{}};return e[r].call(c.exports,c,c.exports,t),c.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,c){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],c=e[f][2];for(var i=!0,u=0;u<r.length;u++)(!1&c||a>=c)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(i=!1,c<a&&(a=c));if(i){e.splice(f--,1);var A=o();void 0!==A&&(n=A)}}return n}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[r,o,c]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.ce80a43b.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="app:";t.l=function(r,o,c,a){if(e[r])e[r].push(o);else{var i,u;if(void 0!==c)for(var A=document.getElementsByTagName("script"),f=0;f<A.length;f++){var v=A[f];if(v.getAttribute("src")==r||v.getAttribute("data-webpack")==n+c){i=v;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+c),i.src=r),e[r]=[o];var s=function(n,t){i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/test001/"}(),function(){var e={178:0,57:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var c=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=c);var a=t.p+t.u(n),i=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var c=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+c+": "+a+")",i.name="ChunkLoadError",i.type=c,i.request=a,o[1](i)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,c,a=r[0],i=r[1],u=r[2],A=0;if(a.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(u)var f=u(t)}for(n&&n(r);A<a.length;A++)c=a[A],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(f)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(9695)}));r=t.O(r)})();
//# sourceMappingURL=notfound.daa82a55.js.map