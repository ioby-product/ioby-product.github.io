"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9703],{7551:function(e,t,n){let r;n.d(t,{R:function(){return l}});var l=((r=l||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},59226:function(e,t,n){let r;n.d(t,{u:function(){return L}});var l=n(2265),i=n(3600),o=n(53509),a=n(5583),u=n(26400),s=n(61463),c=n(88703),d=n(33856),f=n(41469),v=n(70777);function h(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&n.length>0&&e.classList.add(...n)}function m(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&n.length>0&&e.classList.remove(...n)}var p=n(99299),g=n(6584),E=n(12585);function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,l.createContext)(null);y.displayName="TransitionContext";var w=((r=w||{}).Visible="visible",r.Hidden="hidden",r);let A=(0,l.createContext)(null);function F(e){return"children"in e?F(e.children):e.current.filter(e=>{let{el:t}=e;return null!==t.current}).filter(e=>{let{state:t}=e;return"visible"===t}).length>0}function N(e,t){let n=(0,c.E)(e),r=(0,l.useRef)([]),o=(0,u.t)(),s=(0,p.G)(),d=(0,g.z)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.l4.Hidden,l=r.current.findIndex(t=>{let{el:n}=t;return n===e});-1!==l&&((0,a.E)(t,{[i.l4.Unmount](){r.current.splice(l,1)},[i.l4.Hidden](){r.current[l].state="hidden"}}),s.microTask(()=>{var e;!F(r)&&o.current&&(null==(e=n.current)||e.call(n))}))}),f=(0,g.z)(e=>{let t=r.current.find(t=>{let{el:n}=t;return n===e});return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>d(e,i.l4.Unmount)}),v=(0,l.useRef)([]),h=(0,l.useRef)(Promise.resolve()),m=(0,l.useRef)({enter:[],leave:[],idle:[]}),E=(0,g.z)((e,n,r)=>{v.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(t=>{let[n]=t;return n!==e})),null==t||t.chains.current[n].push([e,new Promise(e=>{v.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(m.current[n].map(e=>{let[t,n]=e;return n})).then(()=>e())})]),"enter"===n?h.current=h.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,g.z)((e,t,n)=>{Promise.all(m.current[t].splice(0).map(e=>{let[t,n]=e;return n})).then(()=>{var e;null==(e=v.current.shift())||e()}).then(()=>n(t))});return(0,l.useMemo)(()=>({children:r,register:f,unregister:d,onStart:E,onStop:b,wait:h,chains:m}),[f,d,r,E,b,m,h])}function O(){}A.displayName="NestingContext";let S=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function T(e){var t;let n={};for(let r of S)n[r]=null!=(t=e[r])?t:O;return n}let x=i.AN.RenderStrategy,R=(0,i.yV)(function(e,t){let{show:n,appear:r=!1,unmount:a=!0,...u}=e,c=(0,l.useRef)(null),v=(0,f.T)(c,t);(0,d.H)();let h=(0,o.oJ)();if(void 0===n&&null!==h&&(n=(h&o.ZM.Open)===o.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[m,p]=(0,l.useState)(n?"visible":"hidden"),E=N(()=>{p("hidden")}),[b,w]=(0,l.useState)(!0),O=(0,l.useRef)([n]);(0,s.e)(()=>{!1!==b&&O.current[O.current.length-1]!==n&&(O.current.push(n),w(!1))},[O,n]);let S=(0,l.useMemo)(()=>({show:n,appear:r,initial:b}),[n,r,b]);(0,l.useEffect)(()=>{if(n)p("visible");else if(F(E)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&p("hidden")}else p("hidden")},[n,E]);let T={unmount:a},R=(0,g.z)(()=>{var t;b&&w(!1),null==(t=e.beforeEnter)||t.call(e)}),P=(0,g.z)(()=>{var t;b&&w(!1),null==(t=e.beforeLeave)||t.call(e)});return l.createElement(A.Provider,{value:E},l.createElement(y.Provider,{value:S},(0,i.sY)({ourProps:{...T,as:l.Fragment,children:l.createElement(C,{ref:v,...T,...u,beforeEnter:R,beforeLeave:P})},theirProps:{},defaultTag:l.Fragment,features:x,visible:"visible"===m,name:"Transition"})))}),C=(0,i.yV)(function(e,t){var n,r,w;let O;let{beforeEnter:S,afterEnter:R,beforeLeave:C,afterLeave:P,enter:L,enterFrom:M,enterTo:j,entered:k,leave:H,leaveFrom:I,leaveTo:D,...z}=e,V=(0,l.useRef)(null),U=(0,f.T)(V,t),_=null==(n=z.unmount)||n?i.l4.Unmount:i.l4.Hidden,{show:Z,appear:B,initial:q}=function(){let e=(0,l.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[Y,G]=(0,l.useState)(Z?"visible":"hidden"),K=function(){let e=(0,l.useContext)(A);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:W,unregister:J}=K;(0,l.useEffect)(()=>W(V),[W,V]),(0,l.useEffect)(()=>{if(_===i.l4.Hidden&&V.current){if(Z&&"visible"!==Y){G("visible");return}return(0,a.E)(Y,{hidden:()=>J(V),visible:()=>W(V)})}},[Y,V,W,J,Z,_]);let X=(0,c.E)({base:b(z.className),enter:b(L),enterFrom:b(M),enterTo:b(j),entered:b(k),leave:b(H),leaveFrom:b(I),leaveTo:b(D)}),Q=(w={beforeEnter:S,afterEnter:R,beforeLeave:C,afterLeave:P},O=(0,l.useRef)(T(w)),(0,l.useEffect)(()=>{O.current=T(w)},[w]),O),$=(0,d.H)();(0,l.useEffect)(()=>{if($&&"visible"===Y&&null===V.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[V,Y,$]);let ee=B&&Z&&q,et=$&&(!q||B)?Z?"enter":"leave":"idle",en=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,n]=(0,l.useState)(e),r=(0,u.t)(),i=(0,l.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),o=(0,l.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:i,hasFlag:o,removeFlag:(0,l.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,l.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),er=(0,g.z)(e=>(0,a.E)(e,{enter:()=>{en.addFlag(o.ZM.Opening),Q.current.beforeEnter()},leave:()=>{en.addFlag(o.ZM.Closing),Q.current.beforeLeave()},idle:()=>{}})),el=(0,g.z)(e=>(0,a.E)(e,{enter:()=>{en.removeFlag(o.ZM.Opening),Q.current.afterEnter()},leave:()=>{en.removeFlag(o.ZM.Closing),Q.current.afterLeave()},idle:()=>{}})),ei=N(()=>{G("hidden"),J(V)},K);!function(e){let{immediate:t,container:n,direction:r,classes:l,onStart:i,onStop:o}=e,d=(0,u.t)(),f=(0,p.G)(),g=(0,c.E)(r);(0,s.e)(()=>{t&&(g.current="enter")},[t]),(0,s.e)(()=>{let e=(0,v.k)();f.add(e.dispose);let t=n.current;if(t&&"idle"!==g.current&&d.current){var r,u,s;let n,c,d,f,p,E,b;return e.dispose(),i.current(g.current),e.add((r=l.current,u="enter"===g.current,s=()=>{e.dispose(),o.current(g.current)},c=u?"enter":"leave",d=(0,v.k)(),f=void 0!==s?(n={called:!1},function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(!n.called)return n.called=!0,s(...t)}):()=>{},"enter"===c&&(t.removeAttribute("hidden"),t.style.display=""),p=(0,a.E)(c,{enter:()=>r.enter,leave:()=>r.leave}),E=(0,a.E)(c,{enter:()=>r.enterTo,leave:()=>r.leaveTo}),b=(0,a.E)(c,{enter:()=>r.enterFrom,leave:()=>r.leaveFrom}),m(t,...r.base,...r.enter,...r.enterTo,...r.enterFrom,...r.leave,...r.leaveFrom,...r.leaveTo,...r.entered),h(t,...r.base,...p,...b),d.nextFrame(()=>{m(t,...r.base,...p,...b),h(t,...r.base,...p,...E),function(e,t){let n=(0,v.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[i,o]=[r,l].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),a=i+o;if(0!==a){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},a),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(t,()=>(m(t,...r.base,...p),h(t,...r.base,...r.entered),f()))}),d.dispose)),e.dispose}},[r])}({immediate:ee,container:V,classes:X,direction:et,onStart:(0,c.E)(e=>{ei.onStart(V,e,er)}),onStop:(0,c.E)(e=>{ei.onStop(V,e,el),"leave"!==e||F(ei)||(G("hidden"),J(V))})});let eo=z;return ee?eo={...eo,className:(0,E.A)(z.className,...X.current.enter,...X.current.enterFrom)}:(eo.className=(0,E.A)(z.className,null==(r=V.current)?void 0:r.className),""===eo.className&&delete eo.className),l.createElement(A.Provider,{value:ei},l.createElement(o.up,{value:(0,a.E)(Y,{visible:o.ZM.Open,hidden:o.ZM.Closed})|en.flags},(0,i.sY)({ourProps:{ref:U},theirProps:eo,defaultTag:"div",features:x,visible:"visible"===Y,name:"Transition.Child"})))}),P=(0,i.yV)(function(e,t){let n=null!==(0,l.useContext)(y),r=null!==(0,o.oJ)();return l.createElement(l.Fragment,null,!n&&r?l.createElement(R,{ref:t,...e}):l.createElement(C,{ref:t,...e}))}),L=Object.assign(R,{Child:P,Root:R})},6584:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(2265),l=n(88703);let i=function(e){let t=(0,l.E)(e);return r.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current(...n)},[t])}},72955:function(e,t,n){n.d(t,{M:function(){return u}});var r,l=n(2265),i=n(61463),o=n(33856),a=n(54462);let u=null!=(r=l.useId)?r:function(){let e=(0,o.H)(),[t,n]=l.useState(e?()=>a.O.nextId():null);return(0,i.e)(()=>{null===t&&n(a.O.nextId())},[t]),null!=t?""+t:void 0}},26400:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(2265),l=n(61463);function i(){let e=(0,r.useRef)(!1);return(0,l.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},61463:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(2265),l=n(54462);let i=(e,t)=>{l.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},88703:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(2265),l=n(61463);function i(e){let t=(0,r.useRef)(e);return(0,l.e)(()=>{t.current=e},[e]),t}},33856:function(e,t,n){n.d(t,{H:function(){return o}});var r,l=n(2265),i=n(54462);function o(){let e;let t=(e="undefined"==typeof document,(0,(r||(r=n.t(l,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[o,a]=l.useState(i.O.isHandoffComplete);return o&&!1===i.O.isHandoffComplete&&a(!1),l.useEffect(()=>{!0!==o&&a(!0)},[o]),l.useEffect(()=>i.O.handoff(),[]),!t&&o}},41469:function(e,t,n){n.d(t,{T:function(){return a},h:function(){return o}});var r=n(2265),l=n(6584);let i=Symbol();function o(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return Object.assign(e,{[i]:t})}function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let o=(0,r.useRef)(t);(0,r.useEffect)(()=>{o.current=t},[t]);let a=(0,l.z)(e=>{for(let t of o.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[i]))?void 0:a}},89080:function(e,t,n){let r;n.d(t,{A:function(){return i},_:function(){return o}});var l=n(3600),i=((r=i||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let o=(0,l.yV)(function(e,t){let{features:n=1,...r}=e,i={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,l.sY)({ourProps:i,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},12585:function(e,t,n){n.d(t,{A:function(){return r}});function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.from(new Set(t.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}},70777:function(e,t,n){n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,l)=>(e.addEventListener(t,r,l),n.add(()=>e.removeEventListener(t,r,l))),requestAnimationFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let l=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(l))},nextFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let l=setTimeout(...t);return n.add(()=>clearTimeout(l))},microTask(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];let i={current:!0};return(0,r.Y)(()=>{i.current&&t[0]()}),n.add(()=>{i.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(28043)},54462:function(e,t,n){n.d(t,{O:function(){return a}});var r=Object.defineProperty,l=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i=(e,t,n)=>(l(e,"symbol"!=typeof t?t+"":t,n),n);class o{set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}constructor(){i(this,"current",this.detect()),i(this,"handoffState","pending"),i(this,"currentId",0)}}let a=new o},19309:function(e,t,n){let r,l,i,o,a;n.d(t,{C5:function(){return y},EO:function(){return A},TO:function(){return f},fE:function(){return v},jA:function(){return F},sP:function(){return g},tJ:function(){return p},wI:function(){return E},z2:function(){return w}});var u=n(70777),s=n(5583),c=n(91498);let d=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>"".concat(e,":not([tabindex='-1'])")).join(",");var f=((r=f||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),v=((l=v||{})[l.Error=0]="Error",l[l.Overflow=1]="Overflow",l[l.Success=2]="Success",l[l.Underflow=3]="Underflow",l),h=((i=h||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i);function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(d)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var p=((o=p||{})[o.Strict=0]="Strict",o[o.Loose=1]="Loose",o);function g(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e!==(null==(t=(0,c.r)(e))?void 0:t.body)&&(0,s.E)(n,{0:()=>e.matches(d),1(){let t=e;for(;null!==t;){if(t.matches(d))return!0;t=t.parentElement}return!1}})}function E(e){let t=(0,c.r)(e);(0,u.k)().nextFrame(()=>{t&&!g(t.activeElement,0)&&y(e)})}var b=((a=b||{})[a.Keyboard=0]="Keyboard",a[a.Mouse=1]="Mouse",a);function y(e){null==e||e.focus({preventScroll:!0})}function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e;return e.slice().sort((e,n)=>{let r=t(e),l=t(n);if(null===r||null===l)return 0;let i=r.compareDocumentPosition(l);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function A(e,t){return F(m(),t,{relativeTo:e})}function F(e,t){var n,r,l;let{sorted:i=!0,relativeTo:o=null,skipElements:a=[]}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?i?w(e):e:m(e);a.length>0&&s.length>1&&(s=s.filter(e=>!a.includes(e))),o=null!=o?o:u.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(o))-1;if(4&t)return Math.max(0,s.indexOf(o))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},v=0,h=s.length,p;do{if(v>=h||v+h<=0)return 0;let e=d+v;if(16&t)e=(e+h)%h;else{if(e<0)return 3;if(e>=h)return 1}null==(p=s[e])||p.focus(f),v+=c}while(p!==u.activeElement);return 6&t&&null!=(l=null==(r=null==(n=p)?void 0:n.matches)?void 0:r.call(n,"textarea,input"))&&l&&p.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},5583:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t){for(var n=arguments.length,l=Array(n>2?n-2:0),i=2;i<n;i++)l[i-2]=arguments[i];if(e in t){let n=t[e];return"function"==typeof n?n(...l):n}let o=Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e=>'"'.concat(e,'"')).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}},28043:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},91498:function(e,t,n){n.d(t,{r:function(){return l}});var r=n(54462);function l(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},3600:function(e,t,n){let r,l;n.d(t,{AN:function(){return u},l4:function(){return s},sY:function(){return c},yV:function(){return v}});var i=n(2265),o=n(12585),a=n(5583),u=((r=u||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((l=s||{})[l.Unmount=0]="Unmount",l[l.Hidden=1]="Hidden",l);function c(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:l,features:i,visible:o=!0,name:u}=e,s=f(n,t);if(o)return d(s,r,l,u);let c=null!=i?i:0;if(2&c){let{static:e=!1,...t}=s;if(e)return d(t,r,l,u)}if(1&c){let{unmount:e=!0,...t}=s;return(0,a.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},r,l,u)})}return d(s,r,l,u)}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,{as:l=n,children:a,refName:u="ref",...s}=m(e,["unmount","static"]),c=void 0!==e.ref?{[u]:e.ref}:{},d="function"==typeof a?a(t):a;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let v={};if(t){let e=!1,n=[];for(let[r,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(r);e&&(v["data-headlessui-state"]=n.join(" "))}if(l===i.Fragment&&Object.keys(h(s)).length>0){if(!(0,i.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(s).map(e=>"  - ".concat(e)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - ".concat(e)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(0,o.A)(null==e?void 0:e.className(...n),s.className)}:(0,o.A)(null==e?void 0:e.className,s.className);return(0,i.cloneElement)(d,Object.assign({},f(d.props,h(m(s,["ref"]))),v,c,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return{ref:t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}}(d.ref,c.ref),t?{className:t}:{}))}return(0,i.createElement)(l,Object.assign({},m(s,["ref"]),l!==i.Fragment&&c,l!==i.Fragment&&v),d)}function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},l={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=l[t]||(l[t]=[]),l[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(l).map(e=>[e,void 0])));for(let e in l)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(let n of l[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function v(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function h(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},59923:function(e,t,n){var r=n(2265);let l=r.forwardRef(function(e,t){let{title:n,titleId:l,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":l},i),n?r.createElement("title",{id:l},n):null,r.createElement("path",{fillRule:"evenodd",d:"M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z",clipRule:"evenodd"}))});t.Z=l},59362:function(e,t,n){var r=n(2265);let l=r.forwardRef(function(e,t){let{title:n,titleId:l,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":l},i),n?r.createElement("title",{id:l},n):null,r.createElement("path",{fillRule:"evenodd",d:"M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z",clipRule:"evenodd"}))});t.Z=l},34367:function(e,t,n){var r=n(2265);let l=r.forwardRef(function(e,t){let{title:n,titleId:l,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":l},i),n?r.createElement("title",{id:l},n):null,r.createElement("path",{fillRule:"evenodd",d:"M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z",clipRule:"evenodd"}))});t.Z=l},4962:function(e,t,n){var r=n(2265);let l=r.forwardRef(function(e,t){let{title:n,titleId:l,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":l},i),n?r.createElement("title",{id:l},n):null,r.createElement("path",{fillRule:"evenodd",d:"M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z",clipRule:"evenodd"}))});t.Z=l}}]);