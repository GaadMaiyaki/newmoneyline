(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{388:function(t,e,n){var content=n(413);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("468a75b6",content,!0,{sourceMap:!1})},412:function(t,e,n){"use strict";var o=n(388);n.n(o).a},413:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"body[data-v-0709db30]{padding:0;margin:0;background:rgba(47,179,79,.05);font-family:Roboto,sans-serif}.sm[data-v-0709db30]{width:50%;margin:0 auto}.logo[data-v-0709db30]{margin:2em auto;max-width:200px}.wrapper[data-v-0709db30]{padding:5rem 0}",""])},459:function(t,e,n){"use strict";n.r(e);n(5);var o=n(224),c={data:function(){return{accountKey:"",loadingMessage:""}},methods:{validateAccountKey:function(){var t=this;this.accountKey&&Number(this.accountKey)&&6==this.accountKey.length?this.$axios.get("".concat(o.b,"/").concat(this.accountKey)).then(function(e){console.log(e.data),e.data.status&&(t.loadingMessage=e.data.message,t.$noty.success(e.data.message),setTimeout(function(){location.href="/account/login"},2e3))}).catch(function(e){t.loadingMessage=e.response.data.error,t.$noty.error(e.response.data.error)}):alert("Please Confirm the Code Entered")}}},r=(n(412),n(6)),component=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container wrapper"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-sm-12 col-xs-12 col-md-8 text-center"},[n("img",{staticClass:"img-fluid",attrs:{src:"/new-email.svg",width:"400"}}),t._v(" "),n("div",{staticClass:"m-5"},[n("h2",{staticClass:"headline"},[t._v("Verify Your Account")]),t._v(" "),n("div",{staticClass:"form m-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountKey,expression:"accountKey"}],staticClass:"form-control sm",staticStyle:{"text-align":"center"},attrs:{type:"text",placeholder:"Enter 6 Digits Code"},domProps:{value:t.accountKey},on:{input:function(e){e.target.composing||(t.accountKey=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"btn btn-block sm btn-primary",on:{click:function(e){return e.preventDefault(),t.validateAccountKey(e)}}},[t._v("Verify Code")])]),t._v(" "),n("p",{staticClass:"headline text-muted"},[t._v("Please Check Your mailbox, We've sent your 6 Digits Code!")])])])])])},[],!1,null,"0709db30",null);e.default=component.exports}}]);