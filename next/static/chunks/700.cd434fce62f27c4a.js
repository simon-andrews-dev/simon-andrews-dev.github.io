"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700,649],{8700:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var i=n(5893);n(7294);var r=n(2850),o=n(4146),s=n(8099),c={src:"/next/static/media/univer.11af1771.png",height:720,width:1353,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAARklEQVR42g3EPQpAcBwA0F8pmQxGE+VjdAByAxcwGIxKBhdx4pd/r1647S6bWeOxRup1uhwWnymMBp1KKeQi9DptUiuE7Ad3yCaVlcGYsQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},l=n(5675),u=n.n(l);function a(){let{ref:e}=(0,s.r)("Education");return(0,i.jsxs)(o.E.section,{id:"education",ref:e,className:"mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},viewport:{once:!0},children:[(0,i.jsx)(r.Z,{children:"Education"}),(0,i.jsxs)("div",{className:"mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20",children:[(0,i.jsx)("div",{className:"self-center",children:(0,i.jsx)(u(),{src:c,alt:"QUT",width:"150"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"text-lg font-medium",children:"Bachelor's in Computer Science"}),(0,i.jsx)("p",{children:"Syddansk University"}),(0,i.jsx)("p",{className:"mt-1",children:"Graduated in 2016"}),(0,i.jsxs)("ul",{className:"list-disc pl-6",children:[(0,i.jsx)("li",{children:"Major in Computer Science"}),(0,i.jsx)("li",{children:"Minor in Networks & Security"}),(0,i.jsx)("li",{children:"Minor in Mobile Applications"})]})]})]})]})}},2850:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(5893);function r(e){let{children:t}=e;return(0,i.jsx)("h2",{className:"text-5xl font-medium capitalize mb-8 text-center mt-16",children:t})}n(7294)},9649:function(e,t,n){n.r(t),n.d(t,{ActiveSectionContext:function(){return o},default:function(){return s},useActiveSectionContext:function(){return c}});var i=n(5893),r=n(7294);let o=(0,r.createContext)(null);function s(e){let{children:t}=e,[n,s]=(0,r.useState)("Home"),[c,l]=(0,r.useState)(0);return(0,i.jsx)(o.Provider,{value:{activeSection:n,setActiveSection:s,timeOfLastClick:c,setTimeOfLastClick:l},children:t})}function c(){let e=(0,r.useContext)(o);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},8099:function(e,t,n){n.d(t,{r:function(){return s}});var i=n(9649),r=n(7294),o=n(2708);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.75,{ref:n,inView:s}=(0,o.YD)({threshold:t}),{setActiveSection:c,timeOfLastClick:l}=(0,i.useActiveSectionContext)();return(0,r.useEffect)(()=>{s&&Date.now()-l>1e3&&c(e)},[s,c,l,e]),{ref:n}}},2708:function(e,t,n){n.d(t,{YD:function(){return u}});var i=n(7294),r=Object.defineProperty,o=new Map,s=new WeakMap,c=0,l=void 0;function u({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:u,triggerOnce:a,skip:d,initialInView:h,fallbackInView:f,onChange:A}={}){var p;let[v,g]=i.useState(null),x=i.useRef(),[m,b]=i.useState({inView:!!h,entry:void 0});x.current=A,i.useEffect(()=>{let i;if(!d&&v)return i=function(e,t,n={},i=l){if(void 0===window.IntersectionObserver&&void 0!==i){let r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:r,observer:u,elements:a}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(s.has(n)||(c+=1,s.set(n,c.toString())),s.get(n)):"0":e[t]}`}).toString(),n=o.get(t);if(!n){let i;let r=new Map,s=new IntersectionObserver(t=>{t.forEach(t=>{var n;let o=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach(e=>{e(o,t)})})},e);i=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:r},o.set(t,n)}return n}(n),d=a.get(e)||[];return a.has(e)||a.set(e,d),d.push(t),u.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(a.delete(e),u.unobserve(e)),0===a.size&&(u.disconnect(),o.delete(r))}}(v,(e,t)=>{b({inView:e,entry:t}),x.current&&x.current(e,t),t.isIntersecting&&a&&i&&(i(),i=void 0)},{root:u,rootMargin:r,threshold:e,trackVisibility:n,delay:t},f),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,v,u,r,a,d,n,f,t]);let w=null==(p=m.entry)?void 0:p.target,y=i.useRef();v||!w||a||d||y.current===w||(y.current=w,b({inView:!!h,entry:void 0}));let j=[g,m.inView,m.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}i.Component}}]);