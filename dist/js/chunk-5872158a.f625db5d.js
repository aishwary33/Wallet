(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5872158a"],{"23e5":function(t,e,n){},"2cdb":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-text-contents"},[t.options.title?n("div",{staticClass:"title-block"},[n("div",{staticClass:"title"},[t.options.titleIcon?n("img",{attrs:{src:t.options.titleIcon}}):t._e(),n("span",[t._v(t._s(t.options.title))])])]):t._e(),t.options.boldSubTitle?n("div",{staticClass:"bold-sub-title"},[t._v("\n    "+t._s(t.options.boldSubTitle)+"\n  ")]):t._e(),t.options.textContent?n("div",{staticClass:"text-content"},t._l(t.options.textContent,(function(e){return n("p",{key:e.key},[t._v(t._s(e))])})),0):t._e()])},a=[],i={props:{options:{type:Object,default:function(){return{}}}},data:function(){return{}}},r=i,o=(n("521a"),n("2877")),c=Object(o["a"])(r,s,a,!1,null,"23c06331",null),l=c.exports;n.d(e,"a",(function(){return l}))},"2fde":function(t,e,n){},"3df0":function(t,e,n){"use strict";var s=n("e897"),a=n.n(s);a.a},4945:function(t,e,n){},"50d23":function(t,e,n){"use strict";var s=n("4945"),a=n.n(s);a.a},"521a":function(t,e,n){"use strict";var s=n("f24d"),a=n.n(s);a.a},"555f":function(t,e,n){"use strict";var s=n("23e5"),a=n.n(s);a.a},6491:function(t,e,n){"use strict";var s=n("c96d"),a=n.n(s);a.a},"88b7":function(t,e,n){},"9f16":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"send-offline-helper"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"page-title"},[n("page-title",{attrs:{options:{title:"Send Offline Helper",boldSubTitle:"",textContent:["Customize actions, debug reveals, and more with this set of advance tools. Please be mindful of the capabilities and limitations of these tools before using."]}}})],1),n("div",{staticClass:"page-content-container"},[n("div",{staticClass:"collapse-container"},[n("accordion-menu",{attrs:{greytitle:!1,isopen:t.stage1,title:t.$t("withoutWallet.selectNetwork"),"right-text":t.networkTitle,number:"1"},on:{titleClicked:function(e){t.stage1=!t.stage1}}},[n("ul",{staticClass:"networks"},t._l(Object.keys(t.reorderNetworkList),(function(e,s){return n("li",{key:t.$router.path+e+s},[n("div",{staticClass:"network-title"},[n("img",{attrs:{src:t.Networks[e][0].type.icon}}),n("p",[t._v(t._s(e))])]),n("div",{staticClass:"network-content"},t._l(t.Networks[e],(function(e){return n("p",{key:e.service,class:e.service===t.selectedNetwork.service&&e.type&&e.type.name===t.selectedNetwork.type.name?"current-network":"",on:{click:function(n){return t.switchNetwork(e)}}},[t._v("\n                  "+t._s(e.service)+"\n                ")])})),0)])})),0)])],1),n("accordion-menu",{attrs:{greytitle:!1,editbutton:!0,isopen:t.stage2,title:t.$t("withoutWallet.generateInfo"),number:"2"},on:{titleClicked:function(e){t.stage2=!t.stage2}}},[n("dropdown-address-selector",{attrs:{title:"From Address"},on:{toAddress:function(e){return t.generateInformation(e)}}}),t.informationGenerated?n("div",[n("ul",[n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Sender:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.address))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Nonce:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.nonce))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Chain ID:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.chainID)+" ("+t._s(t.genInfo.networkName)+")")])]),n("li",{staticClass:"detail-container with-divider"},[n("span",{staticClass:"detail-name"},[t._v("Current Gas Price:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.toGwei(t.genInfo.gasPrice))+" Gwei")])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Retrieved:")]),n("span",{staticClass:"detail-text"},[t._v("\n                "+t._s(t.dateTimeDisplay(t.genInfo.timestamp))+"\n              ")])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("at block:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.blockNumber))])])])]):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:t.informationGenerated,expression:"informationGenerated"}],staticClass:"button-container"},[n("a",{ref:"generatedDownloadLink",attrs:{href:t.generatedJson,download:t.exportFileName}},[n("standard-button",{attrs:{options:{title:"Export JSON File",buttonStyle:"green-border",noWalletTerms:!0,noMinWidth:!0}}})],1),n("standard-button",{attrs:{options:{title:"Continue",buttonStyle:"green",noWalletTerms:!0,rightArrow:!0}},nativeOn:{click:function(e){return t.stage2Btn(e)}}})],1)],1),n("accordion-menu",{attrs:{greytitle:!1,isopen:t.stage3,title:t.$t("withoutWallet.signedTx"),number:"3"},on:{titleClicked:function(e){t.stage3=!t.stage3}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rawSigned,expression:"rawSigned"}],staticClass:"no-margin raw-tx-input",domProps:{value:t.rawSigned},on:{input:function(e){e.target.composing||(t.rawSigned=e.target.value)}}}),t.invalidSignature?n("p",[t._v("Invalid Signature")]):t._e(),t.wrongNetwork&&""===t.correctNetwork?n("p",[t._v("\n          Signed Chain ID does not match chain id for selected network\n        ")]):t._e(),t.wrongNetwork&&""!==t.correctNetwork?n("p",[t._v("\n          Signed Chain ID ("+t._s(t.correctNetwork)+") does not match chain id for\n          selected network\n        ")]):t._e(),n("expending-option",{attrs:{title:"Raw Transaction"}},[n("textarea",{staticClass:"no-margin raw-tx-input",attrs:{disabled:""},domProps:{value:JSON.stringify(t.rawTx)}})]),n("div",{staticClass:"button-container"},[n("input",{ref:"jsonInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:t.uploadFile}}),n("standard-button",{attrs:{options:{title:"Upload JSON File",buttonStyle:"green-border",noWalletTerms:!0,noMinWidth:!0}},nativeOn:{click:function(e){return t.uploadClick()}}}),n("standard-button",{attrs:{options:{title:"Continue",buttonStyle:"green",noWalletTerms:!0}},nativeOn:{click:function(e){return t.stage3Btn(e)}}})],1)],1),n("accordion-menu",{attrs:{greytitle:!1,editbutton:!1,isopen:t.stage4,title:t.$t("withoutWallet.txDetails"),number:"4"},on:{titleClicked:function(e){t.stage4=!t.stage4}}},[n("ul",[n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Sender:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.from))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Receiver:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.to))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Nonce:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.nonce))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Value:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.toEth(t.value))+" "+t._s(t.selectedNetwork.type.name))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Data:")]),"0x"!==t.data?n("span",{staticClass:"detail-text"},[t._v("\n              "+t._s(t.truncateData(t.data))+"\n              "),n("span",{staticClass:"show-all-btn",on:{click:function(e){t.showAllData=!t.showAllData}}},[t._v("Show All")])]):n("span",{staticClass:"data-all"},[t._v(t._s(t.data))]),t.showAllData?n("span",{staticClass:"data-all"},[t._v(t._s(t.data))]):t._e()]),n("li",{staticClass:"detail-container with-divider"},[n("span",{staticClass:"detail-name"},[t._v("Chain ID:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.chainID)+" ("+t._s(t.selectedNetwork.type.name_long)+")")])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Gas Limit:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.gasLimit))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Gas Price:")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.toGwei(t.gasPrice))+" Gwei")])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v("Fee:")]),n("span",{staticClass:"detail-text"},[t._v("\n              "+t._s(t.toEth(t.fee))+" "+t._s(t.selectedNetwork.type.name)+" ($\n              "+t._s(t.calculateCost(t.fee))+")\n            ")])])]),n("div",{staticClass:"button-container"},[n("standard-button",{attrs:{options:{title:"Send",buttonStyle:"green",noWalletTerms:!0,rightArrow:!0}},nativeOn:{click:function(e){return t.stage4Btn(e)}}})],1)]),n("accordion-menu",{attrs:{greytitle:!1,editbutton:!1,isopen:t.stage5,title:t.$t("withoutWallet.txStatus"),number:"5"},on:{titleClicked:function(e){t.stage5=!t.stage5}}},[""===t.error?n("ul",[n("li",{staticClass:"tx-hash-container"},[n("p",[t._v("Transaction Hash:")]),n("a",{staticClass:"detail-text",attrs:{href:t.replaceUrl("",t.txHash),target:"_blank"}},[t._v(t._s(t.txHash))])]),n("li",{staticClass:"tx-receipt-container"},[n("p",[t._v("Transaction Receipt:")]),Object.keys(t.txReceipt).length>0?n("div",{staticClass:"tx-receipt-items"},t._l(Object.keys(t.txReceipt),(function(e,s){return n("div",{key:e+s},[n("span",[t._v(t._s(e))]),"transactionHash"===e?n("a",{staticClass:"right-side",attrs:{href:t.replaceUrl("",t.txReceipt[e]),target:"_blank"}},[t._v(t._s(t.txReceipt[e]))]):"contractAddress"===e?n("a",{staticClass:"right-side",attrs:{href:t.replaceUrl("address",t.txReceipt[e]),target:"_blank"}},[t._v(t._s(t.txReceipt[e]))]):n("span",{staticClass:"right-side"},[t._v(t._s(t.txReceipt[e]))])])})),0):n("div",{staticClass:"loading"},[t._v("Loading....")])])]):n("div",[t._v(t._s(t.error))])])],1)]),n("confirmation-modal",{ref:"offlineConfirm",attrs:{"raw-tx":t.rawTx,"signed-tx":t.rawSigned,"env-details":t.envDetails}})],1)},a=[],i=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("456d"),n("7618")),r=(n("78ce"),n("96cf"),n("3b8d")),o=(n("0298"),n("6b54"),n("87b3"),n("d25f"),n("a481"),n("7f7f"),n("bd86")),c=(n("ac6a"),n("8615"),n("dbd9")),l=n.n(c),d=n("2f62"),u=n("a731"),p=n("901e"),f=n.n(p),h=n("1131"),v=n.n(h),g=n("8761"),w=n("2cdb"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accordion-menu accordion-menu-2"},[n("div",{staticClass:"wrap",class:t.isopen&&"opened"},[n("div",{staticClass:"menu-title",class:t.greytitle?"grey-title":"",on:{click:t.titleClicked}},[n("div",{staticClass:"title-number"},[n("span",[t._v(t._s(t.number))])]),n("div",[t._v(t._s(t.title))]),t.editbutton?n("div",{staticClass:"edit-button"},[t._v(t._s(t.$t("common.edit")))]):t._e(),""!==t.rightText?n("div",{staticClass:"edit-button"},[t._v(t._s(t.rightText))]):t._e()]),n("div",{staticClass:"menu-content-container"},[n("div",{staticClass:"padding-block"},[t._t("default")],2)])])])},_=[],b={components:{},props:{greytitle:{type:Boolean,default:!1},number:{type:String,default:""},title:{type:String,default:""},isopen:{type:Boolean,default:!1},editbutton:{type:Boolean,default:!1},rightText:{type:String,default:""}},data:function(){return{}},methods:{titleClicked:function(){this.$emit("titleClicked")}}},C=b,k=(n("50d23"),n("2877")),x=Object(k["a"])(C,m,_,!1,null,"70793032",null),y=x.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"drop-down-address-selector"},[s("div",{staticClass:"dropdown--title"},[s("h4",[t._v(t._s(t.title))]),s("button",{staticClass:"title-button prevent-user-select",on:{click:function(e){return t.copyToClipboard(t.$refs.addressInput)}}},[t._v("\n      "+t._s(t.$t("common.copy"))+"\n    ")])]),s("div",{staticClass:"dropdown--content"},[s("div",{staticClass:"dropdown-input-box",class:t.dropdownOpen?"dropdown-open":""},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAddress,expression:"selectedAddress"}],ref:"addressInput",attrs:{type:"text",placeholder:"Please enter the address"},domProps:{value:t.selectedAddress},on:{focus:function(e){t.dropdownOpen=!1},input:function(e){e.target.composing||(t.selectedAddress=e.target.value)}}}),t.validAddress?t._e():s("div",{staticClass:"blockie-place-holder-image"}),t.validAddress?s("div",{staticClass:"selected-address-blockie"},[s("blockie",{attrs:{address:t.selectedAddress,width:"30px",height:"30px"}}),t.isToken(t.currency)?s("div",[s("img",{staticClass:"currency-icon",attrs:{src:n("ab08")}})]):s("div",[s("i",{class:["currency-icon","as-font","cc",t.currency,"cc-icon"]})])],1):t._e(),s("div",{staticClass:"dropdown-open-button",on:{click:function(e){t.dropdownOpen=!t.dropdownOpen}}},[t.dropdownOpen?t._e():s("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}}),t.dropdownOpen?s("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}}):t._e()])]),t.dropdownOpen?s("div",{staticClass:"dropdown-list-box"},[s("ul",t._l(t.addresses,(function(e){return s("li",{key:e.key,on:{click:function(n){return t.listedAddressClick(e.address)}}},[s("div",{staticClass:"list-blockie"},[s("blockie",{attrs:{address:e.address,width:"30px",height:"30px"}}),s("img",{staticClass:"currency-icon",attrs:{src:n("ab08")}})],1),s("div",{staticClass:"address-block"},[s("p",{staticClass:"listed-address"},[t._v("\n              "+t._s(e.address)+"\n              ")])]),e.address===t.currentAddress?s("p",{staticClass:"address-note"},[t._v("\n            "+t._s(t.$t("interface.myAddr"))+"\n          ")]):t._e(),t.toAddressCheckMark?s("i",{staticClass:"fa fa-check-circle good-button",attrs:{"aria-hidden":"true"}}):t._e()])})),0)]):t._e()])])},O=[],T=n("75fc"),N=(n("20d6"),n("7099"),n("e351"),n("34eb")),A=n.n(N),D=n("8233"),I=n.n(D),j=n("c8e5"),P=n("b643"),$=A()("v5:error"),R={components:{blockie:j["a"]},props:{title:{type:String,default:""},currentAddress:{type:String,default:""},currency:{type:String,default:"XDC"}},data:function(){return{selectedAddress:"",validAddress:!1,dropdownOpen:!1,addresses:[],toAddressCheckMark:!1}},watch:{currentAddress:function(t){-1===this.addresses.findIndex((function(e){return e.address===t}))&&(this.addresses=[{address:t,currency:P["a"]}].concat(Object(T["a"])(this.addresses)))},selectedAddress:function(t){this.validateAddress(t)},currency:function(){this.validateAddress(this.selectedAddress)}},methods:{copyToClipboard:function(t){t.select(),document.execCommand("copy")},isToken:function(t){return"undefined"!==typeof P["b"][t]},listedAddressClick:function(t){this.toAddressCheckMark=!0,this.dropdownOpen=!this.dropdownOpen,this.selectedAddress=t},validateAddress:function(t){if(""!==this.selectedAddress){var e=t.address?t.address:t;if(P["b"][this.currency])this.validAddress=I.a.validate(e,"ETH");else try{this.validAddress=I.a.validate(e,this.currency)}catch(n){$(n),this.validAddress=!1}this.validAddress?(this.$emit("toAddress",e),this.$emit("validAddress",!0)):(this.$emit("toAddress",""),this.$emit("validAddress",!1))}}}},G=R,E=(n("6491"),Object(k["a"])(G,S,O,!1,null,"8a3ffc76",null)),B=E.exports,F=n("a8f0"),W=n("38c1"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"expending-option",class:t.hidebottomborder?"hide-bottom-border":""},[n("div",{staticClass:"title-bar-container"},[n("div",{staticClass:"input-title"},[t._v(t._s(t.title))]),n("div",{staticClass:"switch sliding-switch-white"},[n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"},on:{click:function(e){t.expanded=!t.expanded}}}),n("span",{staticClass:"slider round"})])])]),n("div",{staticClass:"contnet-container",class:t.expanded?"expanded":""},[n("div",{staticClass:"content-block"},[t._t("default")],2)])])},H=[],U={props:{title:{type:String,default:""},hidebottomborder:{type:Boolean,default:!1}},data:function(){return{expanded:!1}}},J=U,z=(n("555f"),Object(k["a"])(J,L,H,!1,null,"61c0e45a",null)),M=z.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"send-offline-confirmation-modal"},[n("b-modal",{ref:"sendOfflineConfirmation",staticClass:"bootstrap-modal-wide nopadding",attrs:{title:"Confirmation","hide-footer":"",centered:""}},[n("div",{staticClass:"modal-contents"},[n("div",{staticClass:"tx-info-container"},[n("ul",[n("li",[t._v("From Address")]),n("li",[t._v(t._s(t.rawTx.from))])]),n("ul",[n("li",[t._v("To Address")]),n("li",[t._v(t._s(t.rawTx.to))])]),n("ul",[n("li",[t._v("Nonce")]),n("li",[t._v(t._s(t.rawTx.nonce))])]),n("ul",[n("li",[t._v("Value")]),n("li",[t._v(t._s(t.rawTx.value))])]),n("ul",[n("li",[t._v("Data")]),n("li",{staticClass:"data"},[t._v(t._s(t.rawTx.data))])]),n("ul",[n("li",[t._v("Chain ID")]),n("li",[t._v(t._s(t.rawTx.chainID))])]),n("ul",[n("li",[t._v("Gas Limit")]),n("li",[t._v(t._s(t.rawTx.gasLimit))])]),n("ul",[n("li",[t._v("Gas Price")]),n("li",[t._v(t._s(t.rawTx.gasPrice))])])]),n("expending-option",{attrs:{hidebottomborder:!0,title:"Signed Transaction"}},[n("div",{staticClass:"raw-signed"},[t._v("\n          "+t._s(t.signedTx)+"\n        ")])]),n("expending-option",{attrs:{title:"Raw Transaction"}},[t._v("\n        "+t._s(t.rawTx)+"\n      ")]),n("div",{staticClass:"button-block-container"},[n("standard-button",{attrs:{options:t.buttonConfirmAndSend}})],1)],1)])],1)},q=[],X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"address-container"},[s("div",{staticClass:"currency-container"},[s("img",{attrs:{src:n("7cd9")("./"+t.lowerCaseCurrency+".svg")}}),s("p",[s("span",{staticClass:"currency-amt"},[t._v("\n        "+t._s("from"===t.direction?"-":"+")+"\n        "+t._s(""!==t.tokenTransferVal?t.tokenTransferVal:t.converter(t.value))+"\n      ")]),s("span",{staticClass:"currency-type"},[t._v(t._s(""!==t.tokenSymbol?t.tokenSymbol:t.currency.toUpperCase())+"\n      ")])])]),s("div",{staticClass:"identicon-container"},[s("p",[t._v(t._s(t._f("capitalize")(t.direction))+" Address")])]),s("div",{staticClass:"address"},[t._v(t._s(t.checksumAddress))])])},K=[],Q=(n("c5f6"),n("b7d3")),Y=n("6314"),Z=n.n(Y),tt={props:{address:{type:String,default:""},direction:{type:String,default:""},value:{type:Number,default:0},currency:{type:String,default:"eth"},tokenTransferTo:{type:String,default:""},tokenTransferVal:{type:String,default:""},tokenSymbol:{type:String,default:""}},computed:{lowerCaseCurrency:function(){return this.currency.toLowerCase()},checksumAddress:function(){return Object(Q["a"])(this.tokenTransferTo)?Object(Q["b"])(this.tokenTransferTo):Object(Q["a"])(this.address)?Object(Q["b"])(this.address):""}},methods:{converter:function(t){return Z.a.utils.fromWei(t.toString(),"ether")}}},et=tt,nt=(n("edbf"),Object(k["a"])(et,X,K,!1,null,null,null)),st=nt.exports,at={name:"SendOfflineConfirmation",components:{"standard-input":W["a"],"standard-button":F["a"],"expending-option":M,"address-block":st},props:{envDetails:{type:Object,default:function(){return{}}},rawTx:{type:Object,default:function(){return{}}},signedTx:{type:String,default:""}},data:function(){return{modalDetailInformation:!1,inputRawTx:{isTextarea:!0,buttonClear:!0,buttonCopy:!0},buttonConfirmAndSend:{title:"Confirm & Send",buttonStyle:"green",helpCenter:!0}}},beforeDestroy:function(){},methods:{}},it=at,rt=(n("b50f"),Object(k["a"])(it,V,q,!1,null,"1d907d78",null)),ot=rt.exports;function ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ct(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ct(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var dt={components:{"page-title":w["a"],"accordion-menu":y,"dropdown-address-selector":B,"standard-button":F["a"],"standard-input":W["a"],"expending-option":M,"confirmation-modal":ot},data:function(){return{networkTypes:Object.values(g),selectedNetwork:this.$store.state.network,stage1:!1,stage2:!0,stage3:!1,stage4:!1,stage5:!1,showAllData:!1,informationGenerated:!1,downloadable:!1,from:"0x",rawSigned:"",minAccountBalance:0,fee:0,nonce:0,gasPrice:0,gasLimit:0,to:"0x",value:0,data:"0x",chainID:0,ethPrice:0,genInfo:{address:"0x",gasPrice:0,nonce:0,chainID:this.$store.state.network.type.chainID,networkName:this.$store.state.network.type.name_long},generatedJson:{},file:"",exportFileName:"Generated Information",invalidSignature:!1,wrongNetwork:!1,correctNetwork:"",txHash:"",txReceipt:{},error:""}},computed:lt(lt({},Object(d["b"])({network:"network",Networks:"Networks",customPaths:"customPaths",path:"path",web3:"web3",wallet:"wallet"})),{},{reorderNetworkList:function(){return u["a"].reorderNetworks()},networkTitle:function(){return"".concat(this.selectedNetwork.type.name," - ").concat(this.selectedNetwork.service," ")},rawTx:function(){return{from:this.from,nonce:this.nonce,gasPrice:this.toGwei(this.gasPrice),gasLimit:this.gasLimit,to:this.to,value:this.toEth(this.value),data:this.data,chainID:this.chainID}},envDetails:function(){return{network:this.selectedNetwork,ethPrice:this.ethPrice}}}),watch:{rawSigned:function(t){this.getTransactionDetails(t)}},mounted:function(){this.switchNetwork(this.$store.state.network),this.fetchBalanceData()},methods:{replaceUrl:function(t,e){return"address"===t?this.network.type.blockExplorerAddr.replace("[[address]]",e):this.network.type.blockExplorerTX.replace("[[txHash]]",e)},stage1Btn:function(){this.stage1=!1,this.stage2=!0},stage2Btn:function(){this.stage2=!1,this.stage3=!0},stage3Btn:function(){this.stage3=!1,this.stage4=!0},stage4Btn:function(){var t=this;this.stage4=!1,this.stage5=!0,""!==this.rawSigned&&(this.error=this.txHash="",this.txReceipt={},this.web3.eth.sendSignedTransaction(this.rawSigned).once("transactionHash",(function(e){t.txHash=e})).then((function(e){t.txReceipt=e})).catch((function(e){t.error=e})))},switchNetwork:function(t){var e=this;this.$store.dispatch("switchNetwork",t).then((function(){e.selectedNetwork=t,e.$store.dispatch("setWeb3Instance"),e.stage1Btn(),e.getTransactionDetails()}))},truncateData:function(t){return t?"".concat(t.slice(0,20),"...").concat(t.slice(-10)):""},getTransactionDetails:function(t){var e=this,n={nonce:0,gasPrice:1,gasLimit:2,to:3,value:4,data:5,v:6,r:7,s:8};if(t&&(this.rawSigned=t),""!==this.rawSigned){var s=u["a"].sanitizeHex(this.rawSigned),a=new l.a(s);if(this.invalidSignature=!a.verifySignature(),this.chainID=a.getChainId(),this.wrongNetwork=!new f.a(this.selectedNetwork.type.chainID).eq(new f.a(this.chainID)),this.chainID=a.getChainId(),this.wrongNetwork){var i=this.networkTypes.filter((function(t){return t.chainID===e.chainID}));i&&(this.correctNetwork=i[0].name_long)}this.from=u["a"].sanitizeHex(a.getSenderAddress().toString("hex"));var r=a.toJSON();this.to=r[n.to],this.gasLimit=new f.a(r[n.gasLimit]).toFixed(),this.nonce=new f.a(r[n.nonce]).toFixed(),this.value=new f.a(r[n.value]).toFixed(),this.data=r[n.data],this.minAccountBalance=a.getUpfrontCost().toString(),this.gasPrice=new f.a(u["a"].sanitizeHex(a.gasPrice.toString("hex"))).toFixed(),this.fee=new f.a(this.toGwei(this.gasPrice)).times(this.gasLimit).toFixed()}},fetchBalanceData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="https://cryptorates.mewapi.io/ticker",t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:if(s=t.sent,a=s.data,a["ETH"]){t.next=10;break}return t.abrupt("return",0);case 10:this.ethPrice=new f.a(a["ETH"].quotes.USD.price);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),toEth:function(t){return!t||isNaN(t)?0:v.a.fromWei(new f.a(t).toFixed(),"ether")},toWei:function(t){return t?v.a.toWei(new f.a(t).toFixed(),"gwei"):0},toGwei:function(t){return t?v.a.fromWei(new f.a(t).toFixed(),"gwei"):0},dateTimeDisplay:function(t){return new Date(t).toString()},calculateCost:function(t){var e=this.toWei(t);return new f.a(this.ethPrice).times(this.toEth(e)).precision(2,f.a.ROUND_UP).toNumber()},generateInformation:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e){t.next=2;break}return t.abrupt("return");case 2:return this.genInfo.address=e,t.next=5,this.web3.eth.getGasPrice();case 5:return this.genInfo.gasPrice=t.sent,t.next=8,this.web3.eth.getTransactionCount(e);case 8:return this.genInfo.nonce=t.sent,t.next=11,this.web3.eth.getBlockNumber();case 11:this.genInfo.blockNumber=t.sent,this.genInfo.chainID=this.selectedNetwork.type.chainID,this.genInfo.timestamp=Date.now(),this.exportGeneratedInfo(),this.informationGenerated=!0;case 16:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),exportGeneratedInfo:function(){var t=this,e=function(e,n){var s="object"===Object(i["a"])(n)?JSON.stringify(n):n;if(null===s)return"";var a=new Blob([s],{type:e});return t.downloadable=!0,window.URL.createObjectURL(a)};this.generatedJson=e("mime",this.genInfo),this.exportFileName="generated-offline-tx-".concat(Date.now(),".json")},uploadClick:function(){var t=this.$refs.jsonInput;t.value="",t.click()},uploadFile:function(t){var e=this,n=new FileReader;n.onloadend=function(t){e.file=JSON.parse(t.target.result),e.getTransactionDetails(e.file.rawTransaction)},n.readAsBinaryString(t.target.files[0])}}},ut=dt,pt=(n("3df0"),Object(k["a"])(ut,s,a,!1,null,"7a2ce704",null)),ft=pt.exports;n.d(e,"default",(function(){return ft}))},b50f:function(t,e,n){"use strict";var s=n("2fde"),a=n.n(s);a.a},c96d:function(t,e,n){},e897:function(t,e,n){},edbf:function(t,e,n){"use strict";var s=n("88b7"),a=n.n(s);a.a},f24d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-5872158a.f625db5d.js.map