(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98c2271a"],{"4cb9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lend-migrator-container"},[n("back-button"),n("b-container",{staticClass:"text-center"},[n("div",{staticClass:"pt-4 lend-title"},[t._v(t._s(t.$t("dappsAave.lend-title")))]),n("div",{staticClass:"d-flex mt-4 mb-1 total-container entire-bal"},[n("p",[t._v(" "+t._s(t.$t("dappsAave.total-lend"))+": "),n("span",{staticClass:"balance"},[t.loading?t._e():n("span",[t._v(t._s(t.lendBalance)+" ")]),t.loading?n("i",{staticClass:"fa fa-spin fa-spinner fa-lg"}):t._e()])]),n("button",{staticClass:"button-link",on:{click:t.setEntireBalance}},[t._v(" "+t._s(t.$t("sendTx.button-entire"))+" ")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text",placeholder:t.$t("dappsAave.total-amount")},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),n("button",{class:["large-round-button-green-filled","mt-3",t.disabled?"disabled":""],on:{click:t.checkAllowance}},[t._v(" "+t._s(t.$t("dappsAave.migrate"))+" ")])])],1)},i=[],s=(n("7db0"),n("b680"),n("96cf"),n("1da1")),o=n("5530"),u=n("572c"),r=[{inputs:[{internalType:"contract IERC20",name:"aave",type:"address"},{internalType:"contract IERC20",name:"lend",type:"address"},{internalType:"uint256",name:"lendAaveRatio",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!0,internalType:"uint256",name:"amount",type:"uint256"}],name:"LendMigrated",type:"event"},{inputs:[],name:"AAVE",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"LEND",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"LEND_AAVE_RATIO",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"REVISION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_totalLendMigrated",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"migrateFromLEND",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"migrationStarted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],p=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Approval",type:"event"}],c=p,l=n("901e"),d=n.n(l),m=n("2f62"),y=n("ce96"),b="0x317625234562B1526Ea2FaC4030Ea499C5291de4",f="0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",v="LEND",w={components:{"back-button":u["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}}},data:function(){return{amount:0,hasEnoughRatio:!1,lendMigratorContract:"",loading:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(m["c"])("main",["web3","account"])),{},{lendBalance:function(){var t=this.tokensWithBalance.find((function(t){return t.symbol===v}));return t?new d.a(t.balance).toFixed():0},disabled:function(){return!(this.amount>0&&this.amount<=this.lendBalance&&this.hasEnoughRatio)}}),mounted:function(){this.getRatio()},methods:{checkAllowance:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new t.web3.eth.Contract(c,f),e.next=3,n.methods.allowance(t.account.address,b).call();case 3:if(a=e.sent,t.loading=!0,"0"===a||!new d.a(a).lt(new d.a(t.amount))){e.next=12;break}return e.next=8,n.methods.approve(b,0).encodeABI();case 8:i=e.sent,t.web3.eth.sendTransaction({from:t.account.address,to:f,value:0,gas:1e5,data:i}).then((function(){t.migrate(n)})).catch((function(e){t.loading=!1,y["e"].responseHandler(e,y["e"].ERROR)})),e.next=13;break;case 12:t.migrate(n);case 13:case"end":return e.stop()}}),e)})))()},migrate:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,i,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=new d.a(e.amount).times(new d.a(10).pow(18)).toFixed(),i=e.web3.utils.numberToHex(a),n.next=4,t.methods.approve(b,i).encodeABI();case 4:return s=n.sent,n.next=7,e.lendMigratorContract.methods.migrateFromLEND(i).encodeABI();case 7:o=n.sent,e.loading=!0,e.web3.mew.sendBatchTransactions([{from:e.account.address,to:f,value:0,gas:1e5,data:s},{from:e.account.address,to:b,gas:2e5,value:0,data:o}]).then((function(){e.amount=0,e.loading=!1})).catch((function(t){e.loading=!1,y["e"].responseHandler(t,y["e"].ERROR)}));case 10:case"end":return n.stop()}}),n)})))()},getRatio:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.lendMigratorContract=new t.web3.eth.Contract(r,b),e.next=3,t.lendMigratorContract.methods.LEND_AAVE_RATIO().call();case 3:n=e.sent,t.hasEnoughRatio=n>1||y["e"].responseHandler(t.$t("dappAave.invalid-ratio"),y["e"].ERROR);case 5:case"end":return e.stop()}}),e)})))()},setEntireBalance:function(){this.amount=this.lendBalance}}},h=w,g=(n("55f2"),n("2877")),_=Object(g["a"])(h,a,i,!1,null,"c8dde288",null);e["default"]=_.exports},"55f2":function(t,e,n){"use strict";var a=n("e58d"),i=n.n(a);i.a},e58d:function(t,e,n){}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-98c2271a.c6bf75f1.js.map