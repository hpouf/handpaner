(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(t,e,n){var content=n(165);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("4fd2638e",content,!0,{sourceMap:!1})},153:function(t,e,n){var content=n(167);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("43105096",content,!0,{sourceMap:!1})},154:function(t,e,n){var r=n(158);t.exports=function(t,e){return new(r(t))(e)}},155:function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},156:function(t,e,n){"use strict";var r=n(6),o=n(157)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(77)("find")},157:function(t,e,n){var r=n(19),o=n(78),c=n(20),l=n(16),d=n(154);t.exports=function(t,e){var n=1==t,m=2==t,v=3==t,h=4==t,f=6==t,y=5==t||f,_=e||d;return function(e,d,x){for(var N,S,C=c(e),A=o(C),O=r(d,x,3),k=l(A.length),P=0,w=n?_(e,k):m?_(e,0):void 0;k>P;P++)if((y||P in A)&&(S=O(N=A[P],P,C),t))if(n)w[P]=S;else if(S)switch(t){case 3:return!0;case 5:return N;case 6:return P;case 2:w.push(N)}else if(h)return!1;return f?-1:v||h?h:w}}},158:function(t,e,n){var r=n(9),o=n(107),c=n(2)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},159:function(t,e,n){"use strict";var strong=n(160),r=n(155);t.exports=n(161)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},160:function(t,e,n){"use strict";var r=n(8).f,o=n(79),c=n(110),l=n(19),d=n(108),m=n(109),v=n(81),h=n(112),f=n(82),y=n(7),_=n(106).fastKey,x=n(155),N=y?"_s":"size",S=function(t,e){var n,r=_(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){d(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[N]=0,null!=r&&m(r,n,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=x(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[N]=0},delete:function(t){var n=x(this,e),r=S(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[N]--}return!!r},forEach:function(t){x(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!S(x(this,e),t)}}),y&&r(h.prototype,"size",{get:function(){return x(this,e)[N]}}),h},def:function(t,e,n){var r,o,c=S(t,e);return c?c.v=n:(t._l=c={i:o=_(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[N]++,"F"!==o&&(t._i[o]=c)),t},getEntry:S,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=x(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))}),n?"entries":"values",!n,!0),f(e)}}},161:function(t,e,n){"use strict";var r=n(3),o=n(6),c=n(11),l=n(110),meta=n(106),d=n(109),m=n(108),v=n(9),h=n(10),f=n(80),y=n(42),_=n(114);t.exports=function(t,e,n,x,N,S){var C=r[t],A=C,O=N?"set":"add",k=A&&A.prototype,P={},w=function(t){var e=k[t];c(k,t,"delete"==t||"has"==t?function(a){return!(S&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return S&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof A&&(S||k.forEach&&!h((function(){(new A).entries().next()})))){var j=new A,H=j[O](S?{}:-0,1)!=j,M=h((function(){j.has(1)})),D=f((function(t){new A(t)})),T=!S&&h((function(){for(var t=new A,e=5;e--;)t[O](e,e);return!t.has(-0)}));D||((A=e((function(e,n){m(e,A,t);var r=_(new C,e,A);return null!=n&&d(n,N,r[O],r),r}))).prototype=k,k.constructor=A),(M||T)&&(w("delete"),w("has"),N&&w("get")),(T||H)&&w(O),S&&k.clear&&delete k.clear}else A=x.getConstructor(e,t,N,O),l(A.prototype,n),meta.NEED=!0;return y(A,t),P[t]=A,o(o.G+o.W+o.F*(A!=C),P),S||x.setStrong(A,t,N),A}},162:function(t,e,n){"use strict";var r=n(6),o=n(163),c=n(20),l=n(16),d=n(41),m=n(154);r(r.P,"Array",{flatMap:function(t){var e,n,r=c(this);return d(t),e=l(r.length),n=m(r,0),o(n,r,r,e,0,1,t,arguments[1]),n}}),n(77)("flatMap")},163:function(t,e,n){"use strict";var r=n(107),o=n(9),c=n(16),l=n(19),d=n(2)("isConcatSpreadable");t.exports=function t(e,n,source,m,v,h,f,y){for(var element,_,x=v,N=0,S=!!f&&l(f,y,3);N<m;){if(N in source){if(element=S?S(source[N],N,n):source[N],_=!1,o(element)&&(_=void 0!==(_=element[d])?!!_:r(element)),_&&h>0)x=t(e,n,element,c(element.length),x,h-1)-1;else{if(x>=9007199254740991)throw TypeError();e[x]=element}x++}N++}return x}},164:function(t,e,n){"use strict";var r=n(152);n.n(r).a},165:function(t,e,n){(e=n(59)(!1)).push([t.i,".handpan-shape[data-v-e4860052]{position:relative;width:200px;height:200px;border-radius:200px;background:#ccc}.handpan-shape.is-bottom[data-v-e4860052]{margin-left:25px;width:150px;height:150px;border-radius:150px;background:#666}.ding[data-v-e4860052],.gu[data-v-e4860052]{position:absolute;left:50%;top:50%}.ding[data-v-e4860052],.gu[data-v-e4860052],.note span[data-v-e4860052]{border:1px solid #333;background:#ddd;display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:40px;margin-left:-20px;margin-top:-20px}.gu[data-v-e4860052]{background:#333}.note[data-v-e4860052]{position:absolute;top:90px;padding-left:175px}.is-bottom .note[data-v-e4860052]{top:65px;padding-left:125px}sub[data-v-e4860052]{margin-bottom:-10px;font-size:11px}.handpan-shape .highlight[data-v-e4860052]{background:rgba(0,255,0,.50196)!important}.handpan-shape .isroot[data-v-e4860052]{background:rgba(0,255,204,.50196)!important}.handpan-shape .special[data-v-e4860052]{border-color:#f0f!important}.bad .highlight[data-v-e4860052]{background:rgba(255,0,0,.50196)!important}.note[data-v-e4860052]:first-child{transform:rotate(var(--deg))}.note:first-child span[data-v-e4860052]{transform:rotate(calc(var(--deg)*-1))}.note[data-v-e4860052]:nth-child(2){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)))}.note:nth-child(2) span[data-v-e4860052]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes))*-1))}.note[data-v-e4860052]:nth-child(3){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)))}.note:nth-child(3) span[data-v-e4860052]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes))*-1))}.note[data-v-e4860052]:nth-child(4){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*2))}.note:nth-child(4) span[data-v-e4860052]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*2)*-1))}.note[data-v-e4860052]:nth-child(5){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*2))}.note:nth-child(5) span[data-v-e4860052]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*2)*-1))}.note[data-v-e4860052]:nth-child(6){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*3))}.note:nth-child(6) span[data-v-e4860052]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*3)*-1))}.note[data-v-e4860052]:nth-child(7){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*3))}.note:nth-child(7) span[data-v-e4860052]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*3)*-1))}.note[data-v-e4860052]:nth-child(8){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*4))}.note:nth-child(8) span[data-v-e4860052]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*4)*-1))}.note[data-v-e4860052]:nth-child(9){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*4))}.note:nth-child(9) span[data-v-e4860052]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*4)*-1))}.note[data-v-e4860052]:nth-child(10){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*5))}.note:nth-child(10) span[data-v-e4860052]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*5)*-1))}.note[data-v-e4860052]:nth-child(11){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*5))}.note:nth-child(11) span[data-v-e4860052]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*5)*-1))}.note[data-v-e4860052]:nth-child(12){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*6))}.note:nth-child(12) span[data-v-e4860052]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*6)*-1))}.note[data-v-e4860052]:nth-child(13){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*6))}.note:nth-child(13) span[data-v-e4860052]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*6)*-1))}.note[data-v-e4860052]:nth-child(14){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*7))}.note:nth-child(14) span[data-v-e4860052]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*7)*-1))}.note[data-v-e4860052]:nth-child(15){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*7))}.note:nth-child(15) span[data-v-e4860052]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*7)*-1))}",""]),t.exports=e},166:function(t,e,n){"use strict";var r=n(153);n.n(r).a},167:function(t,e,n){(e=n(59)(!1)).push([t.i,".chord-type[data-v-1fabc53e],.panscales[data-v-1fabc53e],.scales[data-v-1fabc53e]{display:flex;flex-wrap:wrap;margin-top:8px}.chord-type-name[data-v-1fabc53e]{min-width:28px;padding-right:8px;text-align:right}.chord[data-v-1fabc53e],.panscale[data-v-1fabc53e],.scale[data-v-1fabc53e]{border:1px solid #333;border-radius:3px;padding:0 5px;cursor:pointer;min-width:32px;text-align:center;margin-left:4px}.chord.highlight[data-v-1fabc53e],.panscale.highlight[data-v-1fabc53e],.scale.highlight[data-v-1fabc53e]{background:rgba(0,255,204,.50196)!important}",""]),t.exports=e},168:function(t,e,n){"use strict";n.r(e);var r=n(73);var o=n(101);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(156),n(76);var l=n(1),d=["C","C♯","D♭","D","D♯","E♭","E","F","F♯","G♭","G","G♯","A♭","A","A♯","B♭","B"],m=[{val:"1/ 5 7m 1 2 3m 4 5",name:"Amara 8"},{val:"1/ 5 7m 1 2 3m 4 5 7m",name:"Amara 9"},{val:"1/ 3 5 7 1 3 T 5 7",name:"Aegean 9"},{val:"1/ 4 5 6m 7m 1 2m 3m 4",name:"Aeolian 9"},{val:"1/ 3m 4 7m 1 3m 4 5 7m",name:"Chao Guo 9"},{val:"1/ 3m 5 6m 7m 1 2 3m",name:"Equinox 8"},{val:"1/ 3m 5 6m 7m 1 2 3m 5",name:"Equinox 9"},{val:"1/ 5 6m 7 1 2 3m 4 5",name:"Hijaz 9"},{val:"1/ 4 T 6 7m 1 2m 3m 4",name:"Hijaz (Mercury) 9"},{val:"1/ 4 T 6 7m 1 2m 3m 3",name:"Hijaz Kar (Mercury) 9"},{val:"1/ 5 6m 1 2 3m 4 5",name:"Insen 8"},{val:"1/ 5 6m 1 2 3m 4 5 6m",name:"Insen 9"},{val:"1/ 5 6m 7m 1 2 3m 5 7m",name:"Integral (Mercury) 9"},{val:"1/ 5 6m 7m 1 2 3m 5 6m",name:"Integral (Sam) 9"},{val:"1/ 4 5 6 7m 1 2 3m 4",name:"Jibuk 9"},{val:"1/ 5 6 1 2 3 4 5 1",name:"Anahata"},{val:"1/ 4 5 6m 1 2 3m 4",name:"Minor 8"},{val:"1/ 4 5 6m 1 2 3m 4 5",name:"Minor 9"},{val:"1/ 5 6m 7m 1 2 3m 4",name:"Kurd 8"},{val:"1/ 5 6m 7m 1 2 3m 4 5",name:"Kurd 9"},{val:"1/ 3m 5 6 7m 1 2 3m",name:"La Sirena 8"},{val:"1/ 3m 5 6 7m 1 2 3m 5",name:"La Sirena 9"},{val:"1/ 3m 5 7m 1 2 3m 5",name:"Magic Voyage 8"},{val:"1/ 3m 5 7m 1 2 3m 5 7m",name:"Magic Voyage 9"},{val:"1/ 4 5 6 7 1 2 3",name:"Major 8"},{val:"1/ 4 5 6 7 1 2 3 5",name:"Major 9"},{val:"1/ 3 4 5 7 1 3 4 5",name:"Melog Selisir 9"},{val:"1/ 3m 5 6m 1 2 3m 5",name:"Mystic (Mercury) 8"},{val:"1/ 5 6m 1 2 3m 4 5 7m",name:"Mystic (Sam) 9"},{val:"1/ 5 6 7m 1 2 3 5",name:"Mixolydian 8"},{val:"1/ 5 6 7m 1 2 3 5 6",name:"Mixolydian 9"},{val:"1/ 3 4 5 6 1 3 4 5",name:"Oxalis 9"},{val:"1/ 4 5 6m 1 3m 4 5 6m",name:"Pygmy (Mercury) 9"},{val:"1/ 2 3m 5 7m 1 2 3m 5",name:"Pygmy 9"},{val:"1/ 5 7m 1 2m 3 4 5 7m",name:"Raga Desh 9"},{val:"1/ 4 5 6m 7 1 2 3m 5",name:"Romanian Hijaz 9"},{val:"1/ 4 5 6m 1 2m 4 5 6m",name:"Akebono 9"},{val:"1/ 5 7 1 2 3 4 5 1",name:"Ysha Savita 9"},{val:"1/ 5 6m 1 3 4 5 6m 1",name:"Onoleo 9"},{val:"1/ 5 7 1 2 3 T 5 7",name:"Lydian"}],v=[{name:"Bebop major",ecarts:["1","2","3","4","5","6m","6","7"],special:"6m"},{name:"Bebop dorian",ecarts:["1","2","3m","3","4","5","6","7m"],special:"3"},{name:"Bebop dominant",ecarts:["1","2","3","4","5","6","7m","7"],special:"7"},{name:"Bebop mindor??",ecarts:["1","2","3m","4","5","6m","6","7m"]},{name:"Bebop phrygian dominant",ecarts:["1","2m","3","4","5","6m","7m","7"]},{name:"Bebop locrian",ecarts:["1","2m","3m","4","T","5","6m","7m"],special:"5"},{name:"Major/Ionian",ecarts:["1","2","3","4","5","6","7"]},{name:"Dorian",ecarts:["1","2","3m","4","5","6","7m"],special:"6"},{name:"Phrygian",ecarts:["1","2m","3m","4","5","6m","7m"],special:"2m"},{name:"Lydian",ecarts:["1","2","3","T","5","6","7"],special:"T"},{name:"Mixolydian",ecarts:["1","2","3","4","5","6","7m"],special:"7m"},{name:"Minor/Aeolian",ecarts:["1","2","3m","4","5","6m","7m"]},{name:"Locrian",ecarts:["1","2m","3m","4","T","6m","7m"]},{name:"Harmonic minor",ecarts:["1","2","3m","4","5","6m","7"],special:"7"},{name:"Phrygian dominant/Hijaz",ecarts:["1","2m","3","4","5","6m","7m"],special:"3"},{name:"Hexatonic major",ecarts:["1","2","3","4","5","6"]},{name:"Hexatonic major Blues",ecarts:["1","2","3m","3","5","6"],special:"3m"},{name:"Hexatonic minor",ecarts:["1","2","3m","4","5","7m"]},{name:"Hexatonic minor Blues T",ecarts:["1","3m","4","T","5","7m"],special:"T"},{name:"Hexatonic minor Blues 3",ecarts:["1","3m","3","4","5","7m"],special:"3"},{name:"Pentatonic major",ecarts:["1","2","3","5","6"]},{name:"Pentatonic minor",ecarts:["1","3m","4","5","7m"]},{name:"Hirajoshi",ecarts:["1","2","3m","5","6m"]},{name:"Iwato",ecarts:["1","2m","4","T","7m"]},{name:"Insen",ecarts:["1","2m","4","5","7m"]},{name:"Yo",ecarts:["1","2","4","5","6"]},{name:"Kumoï",ecarts:["1","2","3m","5","6"]},{name:"Pygmy",ecarts:["1","2","3m","5","7m"]}],h=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],f=["C","D♭","D","E♭","E","F","G♭","G","A♭","A","B♭","B"],y=["1","2m","2","3m","3","4","T","5","6m","6","7m","7"],_=[{type:"maj",chords:[{val:"1 3 5",name:"Major",abbr:""}]},{type:"min",chords:[{val:"1 3m 5",name:"Minor",abbr:"m"}]},{type:"7th",chords:[{val:"1 3 5 7m",name:"Dominant seventh",abbr:"⁷"},{val:"1 3 5 7",name:"Major seventh",abbr:"M⁷"},{val:"1 3m 5 7m",name:"Minor seventh",abbr:"m⁷"}]},{type:"sus",chords:[{val:"1 4 5",name:"Suspended 4",abbr:"<sup>sus4</sup>"}]},{type:"bad",chords:[{val:"1 2m",name:"second minor",abbr:"m²"},{val:"1 T",name:"tritone",abbr:"<sub>tt</sub>"},{val:"1 3m T",name:"Diminished",abbr:"<sub>dim</sub>"}]}];n(43),n(27),n(13),n(44),n(159),n(111);function x(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}n(83),n(29),n(61);var N=n(54);n(162),n(28),n(113);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t,e){var n=-1!==h.indexOf(t)?h.indexOf(t):f.indexOf(t);return-1!==n?f[(n+y.indexOf(e)+12)%12]:null}function A(t,e){var n=-1!==h.indexOf(t)?h.indexOf(t):f.indexOf(t);return-1!==n?h[(n+y.indexOf(e)+12)%12]:null}var O=function(t){var e=t.getUniqueNotes();return e.flatMap((function(t){return v.map((function(e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(N.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},e,{absSharp:e.ecarts.map((function(e){return A(t,e)}))})})).filter((function(t){return t.absSharp.every((function(t){return t&&-1!==e.indexOf(t)}))})).map((function(e){return{id:t+" "+e.name,tonic:t,noteNames:e.absSharp,name:e.name,special:e.special?A(t,e.special):null}}))}))},k=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.absNotationUser="",this.absNotationClean="",this.relNotation="",this.ding="",this.notesTop=[],this.notesBottom=[],this.notesAll=[],this.chords=[],this.panScales=[],this.scales=[]}var e,n,r;return e=t,(n=[{key:"loadFromRelNotation",value:function(t,e){var n=this;this.ding=t,this.relNotation=e;var r=e.split("/");if(!(r.length<2)){var o=r[1].trim().split(" ").map((function(t){return A(n.ding,t)}));this.absNotationClean=this.ding+"/ "+o.join(" "),this.absNotationUser=this.ding.replace(/♯/g,"#").replace(/♭/g,"b")+"/ "+o.join(" ").replace(/♯/g,"#").replace(/♭/g,"b"),this.genNotes(o)}}},{key:"loadFromAbsNotation",value:function(t){this.absNotationUser=t;var e=this.absNotationUser.replace(/#/g,"♯").replace(/b/g,"♭").replace(/ {1,}/g," "),n=e.split("/");if(!(n.length<2)){this.ding=n[0].trim(),this.absNotationClean=e,this.relNotation=function(t,e){var n=h.indexOf(t);-1===n&&(n=f.indexOf(t));for(var r=[],i=0;i<12;i++)r.push(y[(12-n+i)%12]);for(var o=e+" ",c=0;c<12;c++)o=(o=o.replace(new RegExp(h[c]+"([^♯♭])","g"),r[c]+"$1")).replace(new RegExp(f[c]+"([^♯♭])","g"),r[c]+"$1");return o.trim()}(this.ding,e);var r=n[1].trim().split(" ");this.genNotes(r)}}},{key:"genNotes",value:function(t){var e,n=3;this.notesAll=t.map((function(t,r){var o=t.replace(/\(/g,"").replace(/\)/g,""),c=d.indexOf(o);return e||(e=c),c<e&&n++,e=c,{key:r,octave:n,name:o,isBottom:"("===t[0]}})),this.notesTop=this.notesAll.filter((function(t){return!t.isBottom})),this.notesBottom=this.notesAll.filter((function(t){return t.isBottom}))}},{key:"getUniqueNotes",value:function(){return c(new Set(Array.from(this.absNotationClean.matchAll(/[A-G][♯♭]?/g)).map((function(t){return t[0]}))))}},{key:"genChords",value:function(){var t;this.chords=(t=this.getUniqueNotes(),_.map((function(e){var n=[];return t.forEach((function(r){e.chords.forEach((function(e){var o=e.val.split(" ");o.every((function(e){return t.indexOf(A(r,e))>=0||t.indexOf(C(r,e))>=0}))&&n.push({root:r,notes:o,label:r+e.abbr})}))})),{type:e.type,chords:n}})))}},{key:"genPanScales",value:function(){var t;this.panScales=(t=this,m.map((function(e){var n=new k;return n.loadFromRelNotation(t.ding,e.val),{ding:t.ding,name:e.name,notesAll:n.notesAll}})).filter((function(e){return e.notesAll.every((function(e){return t.notesAll.some((function(t){var n=f.indexOf(t.name),r=-1!==n?h[n]:t.name;return e.octave===t.octave&&e.name===r}))}))})))}},{key:"genScales",value:function(){this.scales=O(this)}}])&&x(e.prototype,n),r&&x(e,r),t}(),P=l.a.extend({props:{handpan:k,selectedChord:Object,selectedPanScale:Object,selectedScale:Object},computed:{nbNotesTop:function(){return{"--nbnotes":this.handpan.notesTop.length}},nbNotesBottom:function(){return{"--nbnotes":this.handpan.notesBottom.length}}},methods:{isSpecial:function(t){var e;return t===(null===(e=this.selectedScale)||void 0===e?void 0:e.special)},isRoot:function(t){var e,n,r;return t===(null===(e=this.selectedChord)||void 0===e?void 0:e.root)||t===(null===(n=this.selectedPanScale)||void 0===n?void 0:n.ding)||t===(null===(r=this.selectedScale)||void 0===r?void 0:r.tonic)},isHighlighted:function(t,e){var n,r,o,c=!1;return this.selectedScale&&this.selectedScale.noteNames&&(c=-1!==this.selectedScale.noteNames.indexOf(t)),-1!==(null===(n=this.selectedChord)||void 0===n?void 0:n.noteNames.indexOf(t))||c||(null===(o=null===(r=this.selectedPanScale)||void 0===r?void 0:r.notesAll)||void 0===o?void 0:o.some((function(n){return n.octave===e&&n.name===t})))}}}),w=(n(164),n(24)),j=Object(w.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"handpan-diagram",class:{bad:"bad"===t.selectedChord.type}},[n("div",{staticClass:"handpan-shape is-top"},[n("div",{staticClass:"ding",class:{highlight:t.isHighlighted(t.handpan.ding,3),isroot:t.isRoot(t.handpan.ding)}},[t._v("\n            "+t._s(t.handpan.ding)),n("sub",[t._v("3")])]),t._v(" "),n("div",{staticClass:"notes",style:t.nbNotesTop},t._l(t.handpan.notesTop,(function(e){return n("div",{key:e.key,staticClass:"note"},[n("span",{class:{highlight:t.isHighlighted(e.name,e.octave),special:t.isSpecial(e.name),isroot:t.isRoot(e.name)}},[t._v(t._s(e.name)),n("sub",[t._v(t._s(e.octave))])])])})),0)]),t._v(" "),t.handpan.notesBottom.length?n("div",{staticClass:"handpan-shape is-bottom"},[n("div",{staticClass:"gu"}),t._v(" "),n("div",{staticClass:"notes",style:t.nbNotesBottom},t._l(t.handpan.notesBottom,(function(e){return n("div",{key:e.key,staticClass:"note"},[n("span",{class:{highlight:t.isHighlighted(e.name,e.octave),special:t.isSpecial(e.name),isroot:t.isRoot(e.name,e.octave)}},[t._v(t._s(e.name)),n("sub",[t._v(t._s(e.octave))])])])})),0)]):t._e()])}),[],!1,null,"e4860052",null).exports,H=l.a.extend({components:{HandpanDiagram:j},data:function(){return{displayedHandpanIndex:0,handpans:[],inputAbsNotation:"",inputDing:"",inputPanscale:{},inputRelNotation:"",notes:[],abs:"",panScales:m,scales:v,notesAll:d,chords:{},selectedPanScale:{},selectedScale:{},selectedChord:{label:"",root:"",type:"",noteNames:[]},selectedChordNoteNames:[]}},created:function(){var t=this;setTimeout((function(){var e=new k;t.$nuxt.$route.hash?(e.loadFromAbsNotation(t.$nuxt.$route.hash.substr(1).replace(/-/g," ")),t.inputDing=e.ding,t.inputAbsNotation=e.absNotationUser,t.inputRelNotation=e.relNotation,t.handpans.push(e),t.panChanged()):(e.loadFromAbsNotation("D/ A C D E F G A C"),t.handpans.push(e),t.panChanged())}),1)},computed:{displayedHandpan:function(){return this.handpans[this.displayedHandpanIndex]}},methods:{panScaleChanged:function(){this.inputRelNotation=this.inputPanscale.val,this.relChanged()},relChanged:function(){var t=this.handpans[this.displayedHandpanIndex];t.loadFromRelNotation(this.inputDing,this.inputRelNotation),this.panChanged(),this.$nuxt.$router.replace("#"+t.absNotationUser.replace(/ /g,"-"))},absChanged:function(){var t=this.handpans[this.displayedHandpanIndex];t.loadFromAbsNotation(this.inputAbsNotation),this.panChanged(),this.$nuxt.$router.replace("#"+t.absNotationUser.replace(/ /g,"-"))},panChanged:function(){var t=this.handpans[this.displayedHandpanIndex],e=m.find((function(e){return t.relNotation.trim()===e.val.trim()}));this.inputPanscale=e||null,t.genChords(),t.genPanScales(),t.genScales(),this.displayHandpan()},displayHandpan:function(){var t=this.handpans[this.displayedHandpanIndex];this.inputDing=t.ding,this.inputRelNotation=t.relNotation,this.inputAbsNotation=t.absNotationUser},selectPanScale:function(t){this.selectedPanScale=t},unselectPanScale:function(){this.selectedPanScale={}},selectScale:function(t){this.selectedScale=t},unselectScale:function(){this.selectedScale={}},selectChord:function(t,e){this.selectedChord={label:e.label,root:e.root,type:t.type,noteNames:[].concat(c(e.notes.map((function(t){return A(e.root,t)}))),c(e.notes.map((function(t){return C(e.root,t)}))))}},unselectChord:function(){this.selectedChord={label:"",type:"",root:"",noteNames:[]}}}}),M=(n(166),Object(w.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Handpaner")]),t._v(" "),n("div",[n("h3",[t._v("Absolute input")]),t._v("\n        Notes\n        "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAbsNotation,expression:"inputAbsNotation"}],attrs:{size:"40"},domProps:{value:t.inputAbsNotation},on:{keyup:t.absChanged,input:function(e){e.target.composing||(t.inputAbsNotation=e.target.value)}}})]),t._v(" "),n("div",[n("h3",[t._v("Relative input")]),t._v("\n        Ding\n        "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.inputDing,expression:"inputDing"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.inputDing=e.target.multiple?n:n[0]},t.relChanged]}},t._l(t.notesAll,(function(e){return n("option",{key:e},[t._v(t._s(e))])})),0),t._v(" "),n("br"),t._v("Relative scale\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputRelNotation,expression:"inputRelNotation"}],attrs:{size:"40"},domProps:{value:t.inputRelNotation},on:{keyup:t.relChanged,input:function(e){e.target.composing||(t.inputRelNotation=e.target.value)}}}),t._v(" "),n("br"),t._v("Handpan scale\n        "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.inputPanscale,expression:"inputPanscale"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.inputPanscale=e.target.multiple?n:n[0]},t.panScaleChanged]}},t._l(t.panScales,(function(e){return n("option",{key:e.name,domProps:{value:e}},[t._v(t._s(e.name))])})),0)]),t._v(" "),t.displayedHandpan?n("div",[n("div",[n("h3",[t._v("Handpan scales")]),t._v(" "),n("div",{staticClass:"panscales"},[t._l(t.displayedHandpan.panScales,(function(e){return n("div",{key:e.name,staticClass:"panscale",class:{highlight:e.name===t.selectedPanScale.name},domProps:{innerHTML:t._s(e.name)},on:{click:function(n){return t.selectPanScale(e)},mouseover:function(n){return t.selectPanScale(e)},mouseout:function(e){return t.unselectPanScale()}}})})),t._v(" "),t.displayedHandpan.panScales.length?t._e():n("div",[t._v("\n                    No handpan scale found.\n                ")])],2)]),t._v(" "),n("div",[n("h3",[t._v("Scales")]),t._v(" "),n("div",{staticClass:"scales"},t._l(t.displayedHandpan.scales,(function(e){return n("div",{key:e.id,staticClass:"scale",class:{highlight:e.id===t.selectedScale.id},on:{click:function(n){return t.selectScale(e)},mouseover:function(n){return t.selectScale(e)},mouseout:function(e){return t.unselectScale()}}},[t._v("\n                    "+t._s(e.tonic)+" "+t._s(e.name)+"\n                ")])})),0)]),t._v(" "),n("div",[n("h3",[t._v("Chords")]),t._v(" "),t._l(t.displayedHandpan.chords,(function(e){return n("div",{key:e.type,staticClass:"chord-type"},[n("div",{staticClass:"chord-type-name"},[t._v(t._s(e.type))]),t._v(" "),t._l(e.chords,(function(r){return n("div",{key:r.label,staticClass:"chord",class:{highlight:r.label===t.selectedChord.label},domProps:{innerHTML:t._s(r.label)},on:{click:function(n){return t.selectChord(e,r)},mouseover:function(n){return t.selectChord(e,r)},mouseout:function(e){return t.unselectChord()}}})}))],2)}))],2),t._v(" "),n("div",[n("h3",[t._v("Diagram")]),t._v(" "),n("HandpanDiagram",{attrs:{handpan:t.displayedHandpan,selectedChord:t.selectedChord,selectedPanScale:t.selectedPanScale,selectedScale:t.selectedScale}})],1)]):t._e()])}),[],!1,null,"1fabc53e",null));e.default=M.exports}}]);