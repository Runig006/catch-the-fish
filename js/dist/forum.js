module.exports=function(t){var n={};function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=n,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="",a(a.s=30)}([function(t,n){t.exports=flarum.core.compat["forum/app"]},,function(t,n){t.exports=flarum.core.compat["common/Model"]},function(t,n,a){"use strict";function e(t,n){return(e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,e(t,n)}a.d(n,"a",(function(){return r}))},function(t,n){t.exports=flarum.core.compat["common/components/Button"]},function(t,n){t.exports=flarum.core.compat["common/extend"]},function(t,n){t.exports=flarum.core.compat["common/components/Modal"]},function(t,n){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,n){t.exports=flarum.core.compat["common/utils/extractText"]},function(t,n){t.exports=flarum.core.compat["common/components/Page"]},function(t,n){t.exports=flarum.core.compat["common/components/Switch"]},function(t,n){t.exports=flarum.core.compat["common/models/Forum"]},function(t,n){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,n){t.exports=flarum.core.compat["common/utils/withAttr"]},function(t,n){t.exports=flarum.core.compat["common/models/User"]},function(t,n){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,n){t.exports=flarum.core.compat["common/models/Post"]},function(t,n){t.exports=flarum.core.compat["forum/components/HeaderPrimary"]},function(t,n){t.exports=flarum.core.compat["forum/components/CommentPost"]},function(t,n){t.exports=flarum.core.compat["forum/components/UserCard"]},function(t,n){t.exports=flarum.core.compat["forum/components/DiscussionHero"]},function(t,n){t.exports=flarum.core.compat["common/utils/classList"]},function(t,n){t.exports=flarum.core.compat["common/components/Link"]},function(t,n){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,n){t.exports=flarum.core.compat["common/helpers/username"]},function(t,n,a){t.exports=function(){"use strict";return function(t,n,a){var e="h:mm A",r={lastDay:"[Yesterday at] "+e,sameDay:"[Today at] "+e,nextDay:"[Tomorrow at] "+e,nextWeek:"dddd [at] "+e,lastWeek:"[Last] dddd [at] "+e,sameElse:"MM/DD/YYYY"};n.prototype.calendar=function(t,n){var e=n||this.$locale().calendar||r,o=a(t||void 0).startOf("d"),i=this.diff(o,"d",!0),s="sameElse",c=i<-6?s:i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":s,u=e[c]||r[c];return"function"==typeof u?u.call(this,a()):this.format(u)}}}()},,,,,function(t,n,a){"use strict";a.r(n);var e=a(0),r=a.n(e),o=a(2),i=a.n(o),s=a(15),c=a.n(s),u=a(16),h=a.n(u),l=a(14),f=a.n(l),d=a(11),p=a.n(d),v=a(3),g=function(t){function n(){for(var n,a=arguments.length,e=new Array(a),r=0;r<a;r++)e[r]=arguments[r];return(n=t.call.apply(t,[this].concat(e))||this).round_id=i.a.attribute("round_id"),n.placement=i.a.attribute("placement"),n.name=i.a.attribute("name"),n.image_url=i.a.attribute("image_url"),n.canSee=i.a.attribute("canSee"),n.canCatch=i.a.attribute("canCatch"),n.canName=i.a.attribute("canName"),n.canPlace=i.a.attribute("canPlace"),n.placeUntil=i.a.attribute("placeUntil"),n.namedBy=i.a.hasOne("lastUserNaming"),n.placedBy=i.a.hasOne("lastUserPlacement"),n.round=i.a.hasOne("round"),n}return Object(v.a)(n,t),n.prototype.apiEndpoint=function(){return"/catch-the-fish/"+(this.exists?"fishes/"+this.data.id:"rounds/"+this.data.attributes.round_id+"/fishes")},n}(i.a),y=function(t){function n(){for(var n,a=arguments.length,e=new Array(a),r=0;r<a;r++)e[r]=arguments[r];return(n=t.call.apply(t,[this].concat(e))||this).catch_count=i.a.attribute("catch_count"),n.user=i.a.hasOne("user"),n}return Object(v.a)(n,t),n}(i.a),b=function(t){function n(){for(var n,a=arguments.length,e=new Array(a),r=0;r<a;r++)e[r]=arguments[r];return(n=t.call.apply(t,[this].concat(e))||this).name=i.a.attribute("name"),n.starts_at=i.a.attribute("starts_at"),n.ends_at=i.a.attribute("ends_at"),n.include_starting_pack=i.a.attribute("include_starting_pack"),n.ranking=i.a.hasOne("ranking"),n}return Object(v.a)(n,t),n.prototype.apiEndpoint=function(){return"/catch-the-fish/rounds"+(this.exists?"/"+this.data.id:"")},n}(i.a),k=a(5),w=a(17),F=a.n(w),T=a(8),x=a.n(T),O=function(){function t(){}return t.prototype.view=function(t){var n=t.attrs.fish.image_url();return n?m("img.catchthefish-image",{alt:x()(r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.fish-image.alt",{name:t.attrs.fish.name()})),src:n,style:{animationDuration:t.attrs.animationDuration||"10s"}}):m(".catchthefish-no-image",r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.fish-image.missing"))},t}(),_=function(){function t(){}return t.prototype.view=function(){if(!r.a.session.user)return m("div");var t=r.a.session.user.catchTheFishBasket();if(!t)return m("div");var n=t.filter((function(t){return t.canPlace()}));return 0===n.length?m("div"):m(".catchthefish-basket",[m(".catchthefish-basket-title",r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.basket.title")),m("p",r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.basket.drag-help")),n.map((function(t){return m(".catchthefish-basket-entry",[m(".catchthefish-basket-fish",{draggable:!0,ondragstart:function(n){n.dataTransfer&&n.dataTransfer.setData("text/plain","fish:"+t.id())}},m(O,{fish:t})),m(".catchthefish-basket-time",r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.basket.time",{time:dayjs(t.placeUntil()).fromNow()}))])}))])},t}(),P=a(18),B=a.n(P),A=a(19),D=a.n(A),N=a(20),j=a.n(N),R=function(){function t(){}return t.prototype.view=function(){return m(".catchthefish-drop-area",r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.drop-area.message"))},t}(),M=a(21),S=a.n(M),C=a(6),I=a.n(C),U=a(4),E=a.n(U),q=a(22),G=a.n(q),Y=a(23),L=a.n(Y),W=a(24),z=a.n(W),H=function(){function t(){}return t.prototype.view=function(t){var n=t.attrs.user;return m(G.a,{href:r.a.route.user(n)},[L()(n)," ",z()(n)])},t}(),J="clarkwinkelmann-catch-the-fish.forum.caught-fish-modal.",K=function(t){function n(){for(var n,a=arguments.length,e=new Array(a),r=0;r<a;r++)e[r]=arguments[r];return(n=t.call.apply(t,[this].concat(e))||this).newName=void 0,n.dirty=!1,n.loading=!1,n}Object(v.a)(n,t);var a=n.prototype;return a.oninit=function(n){t.prototype.oninit.call(this,n),this.newName=this.attrs.fish.name()},a.className=function(){return"Modal--small catchthefish-catch-modal"},a.title=function(){return r.a.translator.trans(J+"title")},a.saveNameAndPlacement=function(t){var n=this;void 0===t&&(t=!1);var a={};this.dirty&&(a.name=this.newName),t&&(a.placement="random"),a?(this.loading=!0,r.a.request({method:"POST",url:r.a.forum.attribute("apiUrl")+"/catch-the-fish/fishes/"+this.attrs.fish.id()+"/place",body:a}).then((function(a){r.a.store.pushPayload(a),n.hide(),n.attrs.fish.canPlace()&&!t&&r.a.store.find("users",r.a.session.user.id()).then((function(){m.redraw()}))})).catch((function(t){throw n.loading=!1,m.redraw(),t}))):(this.hide(),this.attrs.fish.canPlace()&&!t&&r.a.store.find("users",r.a.session.user.id()).then((function(){m.redraw()})))},a.content=function(){var t=this,n=this.attrs.fish,a=n.namedBy(),e=n.placedBy();return m(".Modal-body",[m("h3",'"'+n.name()+'"'),m(O,{fish:n}),a?m("p",[r.a.translator.trans(J+"named-by")," ",m(H,{user:a})]):null,e?m("p",[r.a.translator.trans(J+"placed-by")," ",m(H,{user:e})]):null,m("p",r.a.translator.trans(J+"congratulation",{catch_count:n.round().ranking().catch_count()})),n.canName()?m(".Form-group",[m("p",r.a.translator.trans(J+"name-help")),m("label",r.a.translator.trans(J+"name")),m("input.FormControl",{value:this.newName,oninput:function(n){t.newName=n.target.value,t.dirty=!0}})]):null,n.canPlace()?m("p",r.a.translator.trans(J+"placement-help")):null,m(".Form-group",E.a.component({className:"Button Button--primary Button--block",type:"button",loading:this.loading,onclick:function(){t.saveNameAndPlacement()}},r.a.translator.trans(J+(this.dirty?n.canPlace()?"submit-name-place-later":"submit-name":n.canPlace()?"submit-place-later":"submit-continue")))),n.canPlace()?m(".Form-group",E.a.component({className:"Button Button--primary Button--block",type:"button",loading:this.loading,onclick:function(){t.saveNameAndPlacement(!0)}},r.a.translator.trans(J+(this.dirty?"submit-name-place-random":"submit-place-random")))):null])},a.onsubmit=function(t){t.preventDefault(),this.saveNameAndPlacement()},n}(I.a),Q=function(){function t(){this.reverseAnimation=void 0,this.animationDuration=void 0}var n=t.prototype;return n.oninit=function(){this.reverseAnimation=Math.random()>.5,this.animationDuration=5+Math.floor(70*Math.random())/10+"s"},n.view=function(t){var n=t.attrs.fish;return m(".catchthefish-moving-fish",{className:S()({"catchthefish-animate-flip":r.a.forum.catchTheFishAnimateFlip(),"catchthefish-animate-reverse":this.reverseAnimation}),style:{animationDuration:this.animationDuration},onclick:function(){n.canCatch()||r.a.session.user?r.a.request({method:"POST",url:r.a.forum.attribute("apiUrl")+"/catch-the-fish/fishes/"+n.id()+"/catch",body:n.placement()}).then((function(n){r.a.modal.show(K,{fish:r.a.store.pushPayload(n)}),t.attrs.oncatch&&t.attrs.oncatch()})):alert(r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.moving-fish.login"))}},[m(".catchthefish-name",n.name()),m(O,{fish:n,animationDuration:this.animationDuration})])},t}();function V(t){if(!t.dataTransfer)return null;var n=t.dataTransfer.getData("text/plain"),a=/^fish:([0-9]+)$/.exec(n);return a?a[1]:null}function X(t,n){var a=[];t&&a.push(m(R));var e=n.catchTheFishFishes();return e&&e.forEach((function(t){t.canSee()&&a.push(m(Q,{fish:t,oncatch:function(){n.pushData({relationships:{catchTheFishFishes:{data:n.data.relationships.catchTheFishFishes.data.filter((function(n){return n.id!==t.id()}))}}})}}))})),a}function Z(t,n){var a=this;t.ondrop=function(t){a.fishDragOver=!1;var e=V(t);if(e){t.preventDefault();var o=r.a.store.getById("catchthefish-fishes",e);if(o){var i={};i[n+"_id"]=a.attrs[n].id(),r.a.request({method:"POST",url:r.a.forum.attribute("apiUrl")+"/catch-the-fish/fishes/"+o.id()+"/place",body:{placement:i}}).then((function(t){r.a.store.pushPayload(t),r.a.store.find("users",r.a.session.user.id()).then((function(){m.redraw()}))}))}else alert(r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.drop-area.missing-from-store"))}},t.ondragover=function(t){V(t)&&(t.preventDefault(),t.dataTransfer.dropEffect="move",a.fishDragOver=!0)},t.ondragenter=function(t){t.preventDefault()},t.ondragleave=function(){a.fishDragOver=!1}}function tt(t,n,a){"content"===n?Object(k.override)(t,n,(function(t){return t().concat(X(this.fishDragOver,this.attrs[a]))})):Object(k.extend)(t,n,(function(t){t.add("catchthefish-fish-and-drop",X(this.fishDragOver,this.attrs[a]))})),Object(k.extend)(t,"oninit",(function(){var t=this;this.fishDragOver=!1,this.subtree&&this.subtree.check((function(){return t.fishDragOver}))})),"content"===n?Object(k.extend)(t,"elementAttrs",(function(t){Z.bind(this)(t,a)})):Object(k.extend)(t,"view",(function(t){t.attrs=t.attrs||{},Z.bind(this)(t.attrs,a)}))}var nt=a(9),at=a.n(nt),et="clarkwinkelmann-catch-the-fish.forum.table-ranking.",rt=function(){function t(){this.rankings=null}var n=t.prototype;return n.oninit=function(t){var n=this;r.a.request({method:"GET",url:r.a.forum.attribute("apiUrl")+"/catch-the-fish/rounds/"+t.attrs.round.id()+"/rankings"}).then((function(t){n.rankings=r.a.store.pushPayload(t),m.redraw()}))},n.view=function(t){return null===this.rankings?m("p",r.a.translator.trans(et+"loading")):m("div",[m("h2",r.a.translator.trans(et+"title",{name:t.attrs.round.name()})),m("table.catchthefish-table",[m("thead",m("tr",[m("th",r.a.translator.trans(et+"rank")),m("th",r.a.translator.trans(et+"count")),m("th",r.a.translator.trans(et+"user"))])),m("tbody",this.rankings.map((function(t,n){return m("tr",[m("td","#"+(n+1)),m("td",t.catch_count()),m("td",m(H,{user:t.user()}))])})))])])},t}(),ot=function(t){function n(){return t.apply(this,arguments)||this}return Object(v.a)(n,t),n.prototype.view=function(){if(!r.a.forum.catchTheFishCanSeeRankingsPage())return m(".container",m("p",r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.page-ranking.permission")));var t=r.a.forum.catchTheFishActiveRounds();return m(".container",[m("h2",r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.page-ranking.title")),t?t.map((function(t){return m(rt,{round:t})})):m("p",r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.page-ranking.nothing"))])},n}(at.a),it=a(7),st=a.n(it),ct=a(10),ut=a.n(ct),ht=a(13),mt=a.n(ht),lt="clarkwinkelmann-catch-the-fish.forum.edit-round.",ft=function(){function t(){this.round=void 0,this.dirty=!1,this.processing=!1}var n=t.prototype;return n.oninit=function(t){var n=t.attrs.round;void 0===n&&(n=r.a.store.createRecord("catchthefish-rounds",{attributes:{name:"",starts_at:"",ends_at:dayjs().add(1,"day").toISOString(),include_starting_pack:!0}})),this.round=n},n.view=function(t){var n=this;return m("form",{onsubmit:function(a){a.preventDefault(),n.saveRecord(t)}},[m(".Form-group",[m("label",r.a.translator.trans(lt+"name")),m("input.FormControl",{value:this.round.name(),oninput:mt()("value",this.updateAttribute.bind(this,"name"))}),m(".helpText",r.a.translator.trans(lt+"name-help"))]),m(".Form-group",[m("label",r.a.translator.trans(lt+"starts-at")),m("input.FormControl",{value:this.round.starts_at(),oninput:mt()("value",this.updateAttribute.bind(this,"starts_at"))})]),m(".Form-group",[m("label",r.a.translator.trans(lt+"ends-at")),m("input.FormControl",{value:this.round.ends_at(),oninput:mt()("value",this.updateAttribute.bind(this,"ends_at"))})]),this.round.exists?"":m(".Form-group",[m("label",[ut.a.component({state:this.round.include_starting_pack(),onchange:this.updateAttribute.bind(this,"include_starting_pack")},r.a.translator.trans(lt+"starting-pack"))]),m(".helpText",r.a.translator.trans(lt+"starting-pack-help"))]),m(".ButtonGroup",[E.a.component({type:"submit",className:"Button Button--primary",loading:this.processing,disabled:!this.readyToSave()},r.a.translator.trans(lt+(this.round.exists?"save":"create"))),this.round.exists?E.a.component({type:"button",className:"Button Button--danger",loading:this.processing,onclick:function(){n.deleteRecord(t)}},r.a.translator.trans(lt+"delete")):""])])},n.updateAttribute=function(t,n){var a;this.round.pushAttributes(((a={})[t]=n,a)),this.dirty=!0},n.readyToSave=function(){return!!this.round.name()&&this.dirty},n.saveRecord=function(t){var n=this;this.processing=!0,this.round.save(this.round.data.attributes).then((function(){t.attrs.onsave&&t.attrs.onsave(),n.processing=!1,n.dirty=!1,m.redraw()})).catch((function(t){throw n.processing=!1,m.redraw(),t}))},n.deleteRecord=function(t){var n=this;confirm(x()(r.a.translator.trans(lt+"delete-confirmation",{name:this.round.name()})))&&(this.processing=!0,this.round.delete().then((function(){t.attrs.ondelete&&t.attrs.ondelete(),n.processing=!1,m.redraw()})).catch((function(t){throw n.processing=!1,m.redraw(),t})))},t}(),dt=function(t){function n(){return t.apply(this,arguments)||this}Object(v.a)(n,t);var a=n.prototype;return a.className=function(){return"Modal--small"},a.title=function(){return r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.new-round-modal.title")},a.content=function(){var t=this;return m(".Modal-body",m(ft,{onsave:function(){t.hide(),t.attrs.oncreateordelete&&t.attrs.oncreateordelete()}}))},n}(I.a),pt=function(t){function n(){return t.apply(this,arguments)||this}Object(v.a)(n,t);var a=n.prototype;return a.className=function(){return"Modal--small"},a.title=function(){return r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.edit-round-modal.title",{name:this.attrs.round.name()})},a.content=function(){var t=this;return m(".Modal-body",m(ft,{round:this.attrs.round,ondelete:function(){t.hide(),t.attrs.oncreateordelete&&t.attrs.oncreateordelete()}}))},n}(I.a),vt="clarkwinkelmann-catch-the-fish.forum.table-round.",gt=function(t){function n(){for(var n,a=arguments.length,e=new Array(a),r=0;r<a;r++)e[r]=arguments[r];return(n=t.call.apply(t,[this].concat(e))||this).rounds=null,n}Object(v.a)(n,t);var a=n.prototype;return a.oninit=function(n){t.prototype.oninit.call(this,n),this.refreshRounds()},a.refreshRounds=function(){var t=this;this.rounds=null,r.a.request({method:"GET",url:r.a.forum.attribute("apiUrl")+"/catch-the-fish/rounds"}).then((function(n){t.rounds=r.a.store.pushPayload(n),m.redraw()}))},a.view=function(){var t=this;return null===this.rounds?m(".container",m("p",r.a.translator.trans(vt+"loading"))):m(".container",[m("h2",r.a.translator.trans(vt+"title")),E.a.component({className:"Button Button--primary",onclick:function(){r.a.modal.show(dt,{oncreateordelete:function(){t.refreshRounds()}})}},r.a.translator.trans(vt+"new")),m("table.catchthefish-table",[m("thead",m("tr",[m("th",r.a.translator.trans(vt+"name")),m("th",r.a.translator.trans(vt+"start")),m("th",r.a.translator.trans(vt+"end")),m("th",r.a.translator.trans(vt+"actions"))])),m("tbody",this.rounds.map((function(n){return m("tr",[m("td",n.name()),m("td",n.starts_at()),m("td",n.ends_at()),m("td",[E.a.component({className:"Button",onclick:function(){r.a.modal.show(pt,{round:n,oncreateordelete:function(){t.refreshRounds()}})}},r.a.translator.trans(vt+"edit"))," ",st.a.component({className:"Button",href:r.a.route("catchTheFishRound",{id:n.id()})},r.a.translator.trans(vt+"fishes"))])])})))])])},n}(at.a),yt="clarkwinkelmann-catch-the-fish.forum.edit-fish.",bt=function(){function t(){this.fish=void 0,this.dirty=!1,this.processing=!1}var n=t.prototype;return n.oninit=function(t){var n=t.attrs.fish;void 0===n&&(n=r.a.store.createRecord("catchthefish-fishes",{attributes:{round_id:t.attrs.round.id(),name:""}})),this.fish=n},n.view=function(t){var n=this;return m("form",{onsubmit:function(a){a.preventDefault(),n.saveRecord(t)}},[m(".Form-group",[m("label",r.a.translator.trans(yt+"name")),m("input.FormControl",{value:this.fish.name(),oninput:function(t){n.fish.pushAttributes({name:t.target.value}),n.dirty=!0}}),m(".helpText",r.a.translator.trans(yt+"name-help"))]),m(".ButtonGroup",[E.a.component({type:"submit",className:"Button Button--primary",loading:this.processing,disabled:!this.readyToSave()},r.a.translator.trans(yt+(this.fish.exists?"save":"create"))),this.fish.exists?E.a.component({type:"button",className:"Button Button--danger",loading:this.processing,onclick:function(){n.deleteRecord(t)}},r.a.translator.trans(yt+"delete")):""])])},n.readyToSave=function(){return!!this.fish.name()&&this.dirty},n.saveRecord=function(t){var n=this;this.processing=!0,this.fish.save(this.fish.data.attributes).then((function(){t.attrs.onsave&&t.attrs.onsave(),n.processing=!1,n.dirty=!1,m.redraw()})).catch((function(t){throw n.processing=!1,m.redraw(),t}))},n.deleteRecord=function(t){var n=this;confirm(x()(r.a.translator.trans(yt+"delete-confirmation",{name:this.fish.name()})))&&(this.processing=!0,this.fish.delete().then((function(){t.attrs.ondelete&&t.attrs.ondelete(),n.processing=!1,m.redraw()})).catch((function(t){throw n.processing=!1,m.redraw(),t})))},t}(),kt=function(t){function n(){return t.apply(this,arguments)||this}Object(v.a)(n,t);var a=n.prototype;return a.className=function(){return"Modal--small"},a.title=function(){return r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.new-fish-modal.title")},a.content=function(){var t=this;return m(".Modal-body",m(bt,{round:this.attrs.round,onsave:function(){t.hide(),t.attrs.oncreateordelete&&t.attrs.oncreateordelete()}}))},n}(I.a),wt=function(t){function n(){return t.apply(this,arguments)||this}Object(v.a)(n,t);var a=n.prototype;return a.className=function(){return"Modal--small"},a.title=function(){return r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.edit-fish-modal.title",{name:this.attrs.fish.name()})},a.content=function(){var t=this;return m(".Modal-body",m(bt,{fish:this.attrs.fish,ondelete:function(){t.hide(),t.attrs.oncreateordelete&&t.attrs.oncreateordelete()}}))},n}(I.a),Ft="clarkwinkelmann-catch-the-fish.forum.table-fish.",Tt=function(t){function n(){for(var n,a=arguments.length,e=new Array(a),r=0;r<a;r++)e[r]=arguments[r];return(n=t.call.apply(t,[this].concat(e))||this).roundId=void 0,n.round=null,n.fishes=null,n.uploading=!1,n}Object(v.a)(n,t);var a=n.prototype;return a.oninit=function(n){var a=this;t.prototype.oninit.call(this,n),this.roundId=m.route.param("id"),this.round=r.a.store.getById("catchthefish-round",this.roundId),this.round||r.a.store.find("catch-the-fish/rounds",this.roundId).then((function(t){a.round=t,m.redraw()})),this.refreshFishes()},a.refreshFishes=function(){var t=this;this.fishes=null,r.a.request({method:"GET",url:r.a.forum.attribute("apiUrl")+"/catch-the-fish/rounds/"+this.roundId+"/fishes"}).then((function(n){t.fishes=r.a.store.pushPayload(n),m.redraw()}))},a.openPicker=function(t,n){if(void 0===n&&(n=!1),!this.uploading){var a=$('<input type="file">');a.attr("multiple",n),a.appendTo("body").hide().click().on("change",(function(n){t(n.target.files)}))}},a.uploadImages=function(t,n){var a=this,e=new FormData;if(n)e.append("image",t[0]);else for(var o=0;o<t.length;o++)e.append("image"+o,t[o]);this.uploading=!0,m.redraw(),r.a.request({method:"POST",url:r.a.forum.attribute("apiUrl")+"/catch-the-fish/"+(n?"fishes/"+n.id()+"/image":"rounds/"+this.roundId+"/fishes-from-images"),serialize:function(t){return t},body:e}).then((function(){a.uploading=!1,m.redraw(),a.refreshFishes()})).catch((function(t){throw a.uploading=!1,m.redraw(),t}))},a.view=function(){var t=this;return this.round&&null!==this.fishes?m(".container",[m("h2",r.a.translator.trans(Ft+"title",{name:this.round.name()})),E.a.component({className:"Button Button--primary",onclick:function(){r.a.modal.show(kt,{round:t.round,oncreateordelete:function(){t.refreshFishes()}})}},r.a.translator.trans(Ft+"new"))," ",E.a.component({className:"Button",type:"button",onclick:function(){t.openPicker((function(n){t.uploadImages(n)}),!0)},loading:this.uploading},r.a.translator.trans(Ft+"new-from-image")),m("table.catchthefish-table",[m("thead",m("tr",[m("th",r.a.translator.trans(Ft+"image")),m("th",r.a.translator.trans(Ft+"name")),m("th",r.a.translator.trans(Ft+"user-name")),m("th",r.a.translator.trans(Ft+"user-place")),m("th",r.a.translator.trans(Ft+"actions"))])),m("tbody",0===this.fishes.length?m("tr",[m("td","No fishes")]):this.fishes.map((function(n){var a=n.namedBy(),e=n.namedBy();return m("tr",[m("td",m(O,{fish:n})),m("td",n.name()),m("td",a?m(H,{user:a}):m("em",r.a.translator.trans(Ft+"no-user-name"))),m("td",e?m(H,{user:e}):m("em",r.a.translator.trans(Ft+"no-user-place"))),m("td",[E.a.component({className:"Button",onclick:function(){r.a.modal.show(wt,{fish:n,oncreateordelete:function(){t.refreshFishes()}})}},r.a.translator.trans(Ft+"edit"))," ",E.a.component({className:"Button",type:"button",onclick:function(){t.openPicker((function(a){t.uploadImages(a,n)}))},loading:t.uploading},r.a.translator.trans(Ft+"upload"))])])})))])]):m(".container",m("p",r.a.translator.trans(Ft+"loading")))},n}(at.a),xt=a(12),Ot=a.n(xt),_t=function(){function t(){}return t.prototype.view=function(t){return m(".Alert.Alert-info",m(".container",[m("span.Alert-body",[r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.round-alert.message",{name:t.attrs.round.name(),time:dayjs(t.attrs.round.ends_at()).calendar()})]),r.a.forum.catchTheFishCanSeeRankingsPage()?m("ul.Alert-controls",m("li",st.a.component({href:r.a.route("catchTheFishRankings")},r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.round-alert.rankings")))):null]))},t}(),Pt=a(25),Bt=a.n(Pt);dayjs.extend(Bt.a),r.a.initializers.add("clarkwinkelmann-catch-the-fish",(function(){r.a.store.models["catchthefish-fishes"]=g,r.a.store.models["catchthefish-rankings"]=y,r.a.store.models["catchthefish-rounds"]=b,c.a.prototype.catchTheFishFishes=i.a.hasMany("catchTheFishFishes"),h.a.prototype.catchTheFishFishes=i.a.hasMany("catchTheFishFishes"),f.a.prototype.catchTheFishFishes=i.a.hasMany("catchTheFishFishes"),f.a.prototype.catchTheFishBasket=i.a.hasMany("catchTheFishBasket"),p.a.prototype.catchTheFishActiveRounds=i.a.hasMany("catchTheFishActiveRounds"),p.a.prototype.catchTheFishCanModerate=i.a.attribute("catchTheFishCanModerate"),p.a.prototype.catchTheFishCanSeeRankingsPage=i.a.attribute("catchTheFishCanSeeRankingsPage"),p.a.prototype.catchTheFishCanSeeProfileRankings=i.a.attribute("catchTheFishCanSeeProfileRankings"),p.a.prototype.catchTheFishAnimateFlip=i.a.attribute("catchTheFishAnimateFlip"),Object(k.extend)(F.a.prototype,"items",(function(t){t.add("catchthefish-basket",m(_))})),tt(B.a.prototype,"content","post"),tt(D.a.prototype,"infoItems","user"),tt(j.a.prototype,"items","discussion"),r.a.routes.catchTheFishRankings={path:"/catch-the-fish",component:ot},r.a.routes.catchTheFishRounds={path:"/catch-the-fish/rounds",component:gt},r.a.routes.catchTheFishRound={path:"/catch-the-fish/rounds/:id",component:Tt},Object(k.extend)(Ot.a.prototype,"navItems",(function(t){r.a.forum.catchTheFishCanSeeRankingsPage()&&t.add("catchthefish-rankings",st.a.component({icon:"fas fa-fish",href:r.a.route("catchTheFishRankings")},r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.nav.rankings"))),r.a.forum.catchTheFishCanModerate()&&t.add("catchthefish-settings",st.a.component({icon:"fas fa-fish",href:r.a.route("catchTheFishRounds")},r.a.translator.trans("clarkwinkelmann-catch-the-fish.forum.nav.settings")))})),Object(k.override)(Ot.a.prototype,"hero",(function(t){var n=t(),a=r.a.forum.catchTheFishActiveRounds();if(!a)return n;var e=a.map((function(t){return t?m(_t,{round:t}):null}));return Array.isArray(n)?a.concat(n):m("div",[e,n])}))}))}]);
//# sourceMappingURL=forum.js.map