(this["webpackJsonpreact-api-pkmn"]=this["webpackJsonpreact-api-pkmn"]||[]).push([[0],{36:function(e,t,r){},37:function(e,t,r){},39:function(e,t,r){},64:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r.n(a),c=r(29),n=r.n(c),o=(r(36),r(37),r(4)),i=r.n(o),l=r(10),b=r(9),d=(r(39),r(12)),u=r(0),j=function(e){var t=Object(a.useState)([]),r=Object(b.a)(t,2),s=r[0],c=r[1],n=function(){var t=Object(l.a)(i.a.mark((function t(){var r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.url);case 2:return r=t.sent,t.next=5,r.json();case 5:a=t.sent,a.sprites.other.dream_world.front_default,c(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){n()}),[]);for(var o=null,j=0,p=Object.entries({grass:{backgroundColor:"rgb(97,192,28)"},fire:{backgroundColor:"rgb(232,85,49)"},bug:{backgroundColor:"rgb(160,170,27)"},dark:{backgroundColor:"rgb(78,57,43)"},dragon:{backgroundColor:"rgb(115,94,223)"},electric:{backgroundColor:"rgb(247,186,43)"},fairy:{backgroundColor:"rgb(248,177,246)"},fighting:{backgroundColor:"rgb(126,60,41)"},flying:{backgroundColor:"rgb(141,166,240)"},ghost:{backgroundColor:"rgb(100,100,186)"},ground:{backgroundColor:"rgb(212,183,100)"},ice:{backgroundColor:"rgb(119,208,237)"},normal:{backgroundColor:"rgb(199,195,182)"},poison:{backgroundColor:"rgb(137,66,139)"},psychic:{backgroundColor:"rgb(238,71,127)"},rock:{backgroundColor:"rgb(192,167,74)"},steel:{backgroundColor:"rgb(177,176,192)"},water:{backgroundColor:"rgb(59,155,236)"}});j<p.length;j++){var h=Object(b.a)(p[j],2),f=h[0],g=h[1];s.types&&f==s.types[0].type.name&&(o=g)}return Object(u.jsx)("div",{className:"card",style:o,children:Object(u.jsxs)(d.b,{to:"/"+e.pkmn,children:[Object(u.jsx)("h2",{className:"pkmon_name",children:e.pkmn}),s.sprites&&Object(u.jsx)("svg",{width:"90",height:"90",children:Object(u.jsx)("image",{href:s.sprites.other.dream_world.front_default,src:"yourfallback.png",width:"90",height:"90"})})]})})},p=r(2),h=r(19),f=r.n(h),g=function(e){var t=Object(p.g)(),r=Object(a.useState)([]),s=Object(b.a)(r,2),c=s[0],n=s[1],o=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://pokeapi.co/api/v2/pokemon/"+t.data).then((function(e){var r=e.data.sprites.other.dream_world.front_default,a="",s=a.hp,c=a.atk,o=a.def,i=a.spd,l=a.spAtk,b=a.spDef;e.data.stats.map((function(e){switch(e.stat.name){case"hp":s=e.base_stat;break;case"attack":c=e.base_stat;break;case"defense":o=e.base_stat;break;case"speed":i=e.base_stat;break;case"special-attack":l=e.base_stat;break;case"special-defense":b=e.base_stat}}));var d=e.data.types.map((function(e){return e.type.name}));e.data.abilities.map((function(e){return e.ability.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})),e.data.stats.filter((function(e){return e.effort>0})).map((function(e){return"".concat(e.effor," ").concat(e.stat.name).toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")}));f.a.get("https://pokeapi.co/api/v2/pokemon-species/"+t.data+"/").then((function(e){var a="";e.data.flavor_text_entries.some((function(e){"en"!==e.language.name||(a=e.flavor_text)}));var u=e.data.gender_rate,j=12.5*u,p=12.5*(8-u),h=Math.round(100/255*e.data.capture_rate),f=e.data.egg_groups.map((function(e){return e.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})),g={description:a,genderRatioFemale:j,genderRatioMale:p,catchRate:h,eggGroups:f,imageUrl:r,name:t.data,types:d,hp:s,atk:c,def:o,spd:i,spAtk:l,spDef:b};n(g)}))}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){o()}),[]);for(var d=null,j=null,h={value:null,key:null},g={value:null,key:null},m=0,O=Object.entries({grass:{backgroundColor:"rgb(97,192,28)"},fire:{backgroundColor:"rgb(232,85,49)"},bug:{backgroundColor:"rgb(160,170,27)"},dark:{backgroundColor:"rgb(78,57,43)"},dragon:{backgroundColor:"rgb(115,94,223)"},electric:{backgroundColor:"rgb(247,186,43)"},fairy:{backgroundColor:"rgb(248,177,246)"},fighting:{backgroundColor:"rgb(126,60,41)"},flying:{backgroundColor:"rgb(141,166,240)"},ghost:{backgroundColor:"rgb(100,100,186)"},ground:{backgroundColor:"rgb(212,183,100)"},ice:{backgroundColor:"rgb(119,208,237)"},normal:{backgroundColor:"rgb(199,195,182)"},poison:{backgroundColor:"rgb(137,66,139)"},psychic:{backgroundColor:"rgb(238,71,127)"},rock:{backgroundColor:"rgb(192,167,74)"},steel:{backgroundColor:"rgb(177,176,192)"},water:{backgroundColor:"rgb(59,155,236)"}});m<O.length;m++){var x=Object(b.a)(O[m],2),k=x[0],v=x[1];c.types&&(k==c.types[0]&&(d=v,h.value=v,h.key=k),k==c.types[1]&&(j=v,g.value=v,g.key=k))}return Object(u.jsxs)("div",{className:"card_pokemon",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"info_pokemon",children:[Object(u.jsx)("div",{className:"data",children:Object(u.jsx)("img",{src:c.imageUrl,alt:"pokemon"})}),Object(u.jsxs)("div",{className:"data",children:[Object(u.jsxs)("div",{className:"name",children:[Object(u.jsx)("h2",{children:c.name}),c.types&&Object(u.jsx)("div",{className:"types",children:c.types.map((function(e){return Object(u.jsx)("span",{style:e==h.key?d:j,className:"type",children:e})}))})]}),Object(u.jsxs)("div",{className:"stats",children:[Object(u.jsxs)("div",{children:["HP : ",c.hp]}),Object(u.jsx)("div",{className:"progress",children:Object(u.jsx)("div",{className:"progress-bar",style:{width:"".concat(c.hp/2,"%")}})})]}),Object(u.jsxs)("div",{className:"stats",children:[Object(u.jsxs)("div",{children:["Attack : ",c.atk/2]}),Object(u.jsx)("div",{className:"progress",children:Object(u.jsx)("div",{className:"progress-bar",style:{width:"".concat(c.atk/2,"%")}})})]}),Object(u.jsxs)("div",{className:"stats",children:[Object(u.jsxs)("div",{children:["Defense : ",c.def]}),Object(u.jsx)("div",{className:"progress",children:Object(u.jsx)("div",{className:"progress-bar",style:{width:"".concat(c.def/2,"%")}})})]}),Object(u.jsxs)("div",{className:"stats",children:[Object(u.jsxs)("div",{children:["Speed : ",c.spd]}),Object(u.jsx)("div",{className:"progress",children:Object(u.jsx)("div",{className:"progress-bar",style:{width:"".concat(c.spd/2,"%")}})})]}),Object(u.jsxs)("div",{className:"stats",children:[Object(u.jsxs)("div",{children:["Special attack : ",c.spAtk]}),Object(u.jsx)("div",{className:"progress",children:Object(u.jsx)("div",{className:"progress-bar",style:{width:"".concat(c.spAtk/2,"%")}})})]}),Object(u.jsxs)("div",{className:"stats",children:[Object(u.jsxs)("div",{children:["Special defense : ",c.spDef]}),Object(u.jsx)("div",{className:"progress",children:Object(u.jsx)("div",{className:"progress-bar",style:{width:"".concat(c.spDef/2,"%")}})})]})]})]}),Object(u.jsx)("div",{className:"description",children:c.description})]}),Object(u.jsx)("button",{className:"return",children:Object(u.jsx)("a",{href:"/",children:"Go back"})})]})},m=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h1",{children:"POKEDEX "}),Object(u.jsxs)("ul",{className:"gen",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"/",children:"G\xe9neration 1 "})," "]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"/2",children:"G\xe9neration 2 "})," "]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"/3",children:"G\xe9neration 3 "})," "]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"/4",children:"G\xe9neration 4 "})," "]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"/5",children:"G\xe9neration 5 "})," "]})]})]})};var O=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),r=t[0],s=t[1],c=Object(a.useState)([]),n=Object(b.a)(c,2),o=n[0],h=n[1],f=Object(a.useState)([]),O=Object(b.a)(f,2),x=O[0],k=O[1],v=Object(a.useState)([]),N=Object(b.a)(v,2),y=N[0],C=N[1],w=Object(a.useState)([]),_=Object(b.a)(w,2),E=_[0],S=_[1],A=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,a=[],r.results.forEach((function(e){a.push(e)})),s(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=151");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,a=[],r.results.forEach((function(e){a.push(e)})),h(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=135&offset=251");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,a=[],r.results.forEach((function(e){a.push(e)})),k(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=107&offset=386");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,a=[],r.results.forEach((function(e){a.push(e)})),C(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=154&offset=493");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,a=[],r.results.forEach((function(e){a.push(e)})),S(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){A(),G(),D(),U(),L()}),[]),Object(u.jsx)(d.a,{children:Object(u.jsxs)(p.d,{children:[Object(u.jsx)(p.b,{exact:!0,path:"/",children:Object(u.jsxs)("div",{className:"contain",children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"card-list",children:r.map((function(e,t){return Object(u.jsx)(j,{pkmn:e.name,url:e.url},t)}))})]})}),Object(u.jsx)(p.b,{exact:!0,path:"/2",children:Object(u.jsxs)("div",{className:"contain",children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"card-list",children:o.map((function(e,t){return Object(u.jsx)(j,{pkmn:e.name,url:e.url},t)}))})]})}),Object(u.jsx)(p.b,{exact:!0,path:"/3",children:Object(u.jsxs)("div",{className:"contain",children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"card-list",children:x.map((function(e,t){return Object(u.jsx)(j,{pkmn:e.name,url:e.url},t)}))})]})}),Object(u.jsx)(p.b,{exact:!0,path:"/4",children:Object(u.jsxs)("div",{className:"contain",children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"card-list",children:y.map((function(e,t){return Object(u.jsx)(j,{pkmn:e.name,url:e.url},t)}))})]})}),Object(u.jsx)(p.b,{exact:!0,path:"/5",children:Object(u.jsxs)("div",{className:"contain",children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"card-list",children:E.map((function(e,t){return Object(u.jsx)(j,{pkmn:e.name,url:e.url},t)}))})]})}),r.map((function(e,t){return Object(u.jsxs)(p.b,{path:"/:data",children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"contain",children:Object(u.jsx)(g,{},t)})]},t)})),Object(u.jsx)(p.a,{to:"/"})]})})};n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.97a570bd.chunk.js.map