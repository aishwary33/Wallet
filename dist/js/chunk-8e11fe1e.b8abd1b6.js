(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e11fe1e"],{"615b":function(t,e,n){},"7e5e":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"claim-pending-container"},[n("div",{staticClass:"copy-container"},[n("h3",[t._v(" "+t._s(t.$t("unstoppable.transfer-pending"))+" ")]),t._l(t.domains,(function(e){return n("h5",{key:e.name,staticClass:"middle-copy"},[n("b",[t._v(t._s(e.name))]),t._v(" "+t._s("MINED"!==e.status?t.$t("unstoppable.is-transferring-to-wallet"):"")+" "),n("br"),t._v(t._s(t.$t("unstoppable.status"))+": "),n("b",[t._v(" "+t._s(t.$t(t.translateStatus(e.status))))]),n("h5",{directives:[{name:"show",rawName:"v-show",value:e.txHash,expression:"domain.txHash"}]},[t._v(" "+t._s(t.$t("unstoppable.view-transfer-transaction")+" ")+" "),n("a",{attrs:{href:t.etherscanLink(e.txHash),target:"_blank",rel:"noopener noreferrer"}},[t._v("Etherscan")])])])})),n("h5",[t._v(" "+t._s(t.$t("unstoppable.manage-on-one")+" ")+" "),n("a",{attrs:{href:"https://unstoppabledomains.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("unstoppabledomains.com")]),t._v(" "+t._s(" "+t.$t("unstoppable.manage-on-two"))+" ")]),n("br"),t._m(0)],2)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-container"},[n("i",{staticClass:"fa fa-spinner fa-spin"})])}],r=(n("99af"),n("d81d"),n("b0c0"),n("a9e3"),n("d3b7"),n("ac1f"),n("1276"),n("b85c")),o=n("ce96"),i={props:{account:{type:Object,default:function(){}},orderNumber:{type:Number,default:0},email:{type:String,default:""},setDomainsClaimed:{type:Function,default:function(){return null}}},data:function(){return{domains:[]}},computed:{address:function(){return this.account.address}},beforeMount:function(){this.email&&this.orderNumber||this.$router.push("/interface/dapps/unstoppable")},mounted:function(){var t=this;this.interval=setInterval((function(){fetch("https://unstoppabledomains.com/api/v1/resellers/myetherwallet/users/".concat(t.email,"/orders/").concat(t.orderNumber)).then((function(t){if(t.ok)return t.json()})).then((function(e){var n=e.order,a=[];if(n&&n.items){var s,o=Object(r["a"])(n.items);try{for(o.s();!(s=o.n()).done;){var i,u,c=s.value;a.push({name:c.name,status:null===c||void 0===c||null===(i=c.blockchain)||void 0===i?void 0:i.status,txHash:null===c||void 0===c||null===(u=c.blockchain)||void 0===u?void 0:u.txHash})}}catch(d){o.e(d)}finally{o.f()}}for(var l in t.domains=a,a){var p=a[l];if("MINED"!==p.status)return}t.setDomainsClaimed(t.domains.map((function(t){return{label:t.name.split(".")[0],extension:t.name.split(".")[1]}}))),t.$router.push("/interface/dapps/unstoppable/completed")})).catch((function(t){o["e"].responseHandler(t,o["e"].ERROR)}))}),5e3)},beforeDestroy:function(){this.interval&&clearInterval(this.interval)},methods:{etherscanLink:function(t){return"https://etherscan.io/tx/"+t},translateStatus:function(t){return"MINED"===t?"unstoppable.confirmed":"PENDING"===t?"unstoppable.pending":"unstoppable.failed"}}},u=i,c=(n("9ea27"),n("2877")),l=Object(c["a"])(u,a,s,!1,null,"330e5940",null),p=l.exports},"9ea27":function(t,e,n){"use strict";var a=n("615b"),s=n.n(a);s.a}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-8e11fe1e.b8abd1b6.js.map