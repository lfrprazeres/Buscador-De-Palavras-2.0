(this["webpackJsonpbuscador-de-palavras-in-react"]=this["webpackJsonpbuscador-de-palavras-in-react"]||[]).push([[0],{104:function(e,a,t){e.exports=t(210)},109:function(e,a,t){},210:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),i=t.n(c),o=(t(109),t(46)),l=t(8),u=t(26),s=t(232),m=t(237),p=t(234),d=t(16),f=t(17);function h(){var e=Object(d.a)(['\n  background-color: #2878b7;\n  margin: 63px 0;\n  padding: 20px 0;\n  h2 {\n    color: white;\n    font-family: "Lato", sans-serif;\n    font-size: 50px;\n    font-weight: 900;\n    margin: 0;\n    text-align: center;\n  }\n']);return h=function(){return e},e}var g=f.a.div(h());function v(e){return r.a.createElement(g,null,r.a.createElement("h2",null,"Buscador de Palavras"))}function b(){var e=Object(d.a)(["\n  min-height: 455px;\n  font-size: 16px;\n  min-width: 100%;\n  max-width: 100%;\n  padding: 20px;\n"]);return b=function(){return e},e}var E=f.a.textarea(b());function x(e){var a=e.text,t=e.setText;return r.a.createElement(E,{value:a,onChange:function(e){return t(e.target.value)},placeholder:"Digite o Texto a ser analisado aqui"})}var j=t(239),O=t(238);function w(e){var a=e.value,t=e.onChangeWord,n=e.similarWords,c=e.onChangeSimilarWords,i=e.placeholder;return r.a.createElement(s.a,{container:!0,spacing:3},r.a.createElement(s.a,{item:!0,xs:12,sm:8,container:!0,alignItems:"center"},r.a.createElement(E,{placeholder:i,value:a,onChange:function(e){return t(e.target.value)}})),r.a.createElement(s.a,{item:!0,xs:6,sm:4,container:!0,alignItems:"center"},r.a.createElement(j.a,{style:{height:50},control:r.a.createElement(O.a,{checked:n,onChange:c,color:"primary"}),label:"Considerar palavras semelhantes"})))}function C(){var e=Object(d.a)(["\n  font-size: 21px;\n  margin: 7px 0 10px 0;\n"]);return C=function(){return e},e}function y(){var e=Object(d.a)(["\n  margin: 0 auto;\n  width: 71%;\n"]);return y=function(){return e},e}var D=f.a.div(y()),q=f.a.p(C()),k=t(97),z=t.n(k);var S=function(){var e=Object(l.f)(),a=Object(n.useState)(""),t=Object(u.a)(a,2),c=t[0],i=t[1],o=Object(n.useState)(!1),d=Object(u.a)(o,2),f=d[0],h=d[1],g=Object(n.useState)(""),b=Object(u.a)(g,2),E=b[0],j=b[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(D,null,r.a.createElement(x,{text:E,setText:function(e){return j(e)}}),r.a.createElement(s.a,{container:!0,alignItems:"center",spacing:2},r.a.createElement(s.a,{item:!0},r.a.createElement(q,null,"Digite a palavra ou frase que deseja buscar")),r.a.createElement(s.a,{item:!0},r.a.createElement(m.a,{title:"Fa\xe7a a pesquisa das suas palavras separadas por enter, frases tamb\xe9m s\xe3o poss\xedveis, por\xe9m ser\xe3o consideradas apenas frases id\xeanticas (ignorando caps e acentos)"},r.a.createElement(z.a,null)))),r.a.createElement(w,{value:c,placeholder:"Digite as palavras ou frases que deseja pesquisar separadas por ENTER, qualquer palavra n\xe3o separada por enter ser\xe1 considerada uma frase",onChangeWord:function(e){return i(e)},onChangeSimilarWords:function(){return h(!f)},similarWords:f}),r.a.createElement(s.a,{container:!0,spacing:3},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"outlined",color:"primary",onClick:function(){""!==E.trim()&&""!==c.trim()?e.push({pathname:"/Buscador-De-Palavras-2.0/result",state:{text:E,words:c,similarWords:f}}):alert("Digite o texto e o que deseja pesquisar nele!")}},"Buscar Palavras")))))},W=t(98),F=t(68);function B(){var e=Object(d.a)(["\n  background-color: #4caf50;\n  border-radius: 10px;\n  color: white;\n  margin: 10px;\n  padding: 10px;\n"]);return B=function(){return e},e}function L(){var e=Object(d.a)([""]);return L=function(){return e},e}function N(){var e=Object(d.a)([""]);return N=function(){return e},e}function T(){var e=Object(d.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  min-height: 100vh;\n  margin-top: 50px;\n"]);return T=function(){return e},e}var P=Object(f.a)(s.a)(T()),I=(Object(f.a)(s.a)(N()),Object(f.a)(s.a)(L()),f.a.div(B()));function R(e,a){try{return a?new RegExp("".concat(e.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/,./g,"")),"i"):new RegExp("^[.,;!?]{0,}".concat(e.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/,./g,""),"[.,;!?]{0,}$"),"i")}catch(t){}}var H=t(66),A=t(240),J=t(236),M=t(235),G=t(67),$=t.n(G);var K=function(e){var a=Object(l.f)(),t=e.location.state;Object(n.useEffect)((function(){if(t){var e=t.text,n=void 0===e?"":e,r=t.words,l=void 0===r?"":r;""!==n.trim()&&""!==l.trim()?function(){var e=c.split(" ");i.split("\n").forEach((function(a){var t="",n=a.split(" ").filter((function(e){return""!==e.trim()})).length;1===n&&""!==a.trim()?(t=function(e,a){var t=0,n=R(e,o);return a.forEach((function(e){e.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/,./g,"").match(n)&&(t+=1)})),{matches:t,type:"word",label:e}}(a,e),d((function(e){return[].concat(Object(F.a)(e),[t])}))):n>1&&""!==a.trim()&&(t=function(e,a){var t=0,n=e.split(" ").filter((function(e){return""!==e.trim()})),r=n.length;return n.forEach((function(e,c){var i=R(e,!1);a.forEach((function(e,c){if(e.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/,./g,"").match(i))for(var l=0,u=!0;u&&l<=r;){var s=R(n[l+=1],o),m=a[c+l]&&a[c+l].toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/,./g,"").match(s);m&&l===r&&(t+=1),m||(u=!1)}}))})),{matches:t,type:"phrase",label:e}}(a,e),d((function(e){return[].concat(Object(F.a)(e),[t])}))),j((function(e){return t.matches>e?t.matches:e}))}))}():(alert("Digite o texto e o que deseja pesquisar nele!"),setTimeout((function(){a.push("/")}),1e3))}else a.push("/")}),[a]);var c=t.text,i=t.words,o=t.similarWords,s=Object(n.useState)([]),m=Object(u.a)(s,2),p=m[0],d=m[1],f=Object(n.useState)(0),h=Object(u.a)(f,2),g=h[0],v=h[1],b=Object(n.useState)(0),E=Object(u.a)(b,2),x=E[0],j=E[1];function O(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}function w(e){var a=e.children,t=e.value,n=e.index,c=Object(W.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},c),t===n&&r.a.createElement(r.a.Fragment,null,a))}return r.a.createElement(P,{container:!0},r.a.createElement(A.a,null,r.a.createElement(J.a,{value:g,onChange:function(e,a){return v(a)}},r.a.createElement(M.a,Object.assign({label:"Escrita"},O(0))),r.a.createElement(M.a,Object.assign({label:"Gr\xe1ficos"},O(1))))),r.a.createElement(w,{value:g,index:0},p.map((function(e,a){return r.a.createElement(I,{key:a},"phrase"===e.type?"frase ":"palavra ",e.label," teve ",e.matches,e.matches.length>1?" recorr\xeancias":" recorr\xeancia","`")}))),r.a.createElement(w,{value:g,index:1,style:{marginTop:50}},r.a.createElement(H.HorizontalBar,{data:{datasets:[{data:p.map((function(e){return e.matches})),backgroundColor:p.map((function(){return $()()}))}],labels:p.map((function(e){return e.label}))},width:.6*window.innerWidth,height:window.innerHeight/2,options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{ticks:{stepSize:Math.ceil(x/2),max:x}}]}}}),r.a.createElement(H.Doughnut,{data:{datasets:[{data:p.map((function(e){return e.matches})),backgroundColor:p.map((function(){return $()()}))}],labels:p.map((function(e){return e.label}))},width:window.innerWidth/2,height:window.innerHeight/2,options:{responsive:!0,legend:{display:!1}}})))};function Q(){return r.a.createElement(o.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/Buscador-De-Palavras-2.0/",component:S}),r.a.createElement(l.a,{component:K,path:"/Buscador-De-Palavras-2.0/result"})))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.24d9a1b6.chunk.js.map