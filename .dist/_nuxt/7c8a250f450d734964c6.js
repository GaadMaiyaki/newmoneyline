(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{401:function(t,e,r){var content=r(439);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("9957c9a6",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";var n=r(401);r.n(n).a},439:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".manage[data-v-efce94ee]{padding:1em;margin:3em 0;background:#fafafa}.nav-tabs .nav-link.active[data-v-efce94ee]{color:#495057;background-color:#fff;box-shadow:0 -3px 5px 0 rgba(226,225,22 5,.388)!important}.nav-tabs .nav-link.active a[data-v-efce94ee]{color:#000;font-weight:700}li.nav-item a.nav-link[data-v-efce94ee]{color:#495057!important;font-weight:500}",""])},449:function(t,e,r){"use strict";r.r(e);r(32);var n=r(224),o=r(225),c=r.n(o),d=function(){return Math.random().toString(36).substring(2)},l={name:"ContentLoader",functional:!0,props:{width:{type:Number,default:400},height:{type:Number,default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var r=e.props,data=e.data,n=e.children,o=r.uniqueKey?"".concat(r.uniqueKey,"-idClip"):d(),l=r.uniqueKey?"".concat(r.uniqueKey,"-idGradient"):d();return t("svg",c()([data,{attrs:{viewBox:"0 0 ".concat(r.width," ").concat(r.height),version:"1.1",preserveAspectRatio:r.preserveAspectRatio}}]),[t("rect",{style:{fill:"url(#".concat(l,")")},attrs:{"clip-path":"url(#".concat(o,")"),x:"0",y:"0",width:r.width,height:r.height}}),t("defs",[t("clipPath",{attrs:{id:o}},[n||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:r.width,height:r.height}})]),t("linearGradient",{attrs:{id:l}},[t("stop",{attrs:{offset:"0%","stop-color":r.primaryColor}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:"".concat(r.speed,"s"),repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":r.secondaryColor}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(r.speed,"s"),repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":r.primaryColor}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:"".concat(r.speed,"s"),repeatCount:"indefinite"}}):null])])])])}},f={layout:"admin",components:{ContentLoader:l},data:function(){return{allUsers:[],loading:!0}},mounted:function(){this.fetchUsers()},methods:{fetchUsers:function(){var t=this;this.$axios.get(n.a).then(function(e){var data=e.data.data;t.allUsers=data.data,setTimeout(function(){t.loading=!1},1e3)})},setUsers:function(){var t=this;setTimeout(function(){t.$store.dispatch("users/fetchUsers",t.allUsers)},2e3)}}},v=(r(438),r(6)),component=Object(v.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h6",{staticStyle:{background:"#015786",color:"#fff",padding:"15px"}},[t._v("All Users")]),t._v(" "),r("table",{staticClass:"table table-striped table"},[t._m(0),t._v(" "),t.loading?t._e():r("tbody",t._l(t.allUsers,function(e,i){return r("tr",{key:i},[r("td",[t._v(t._s(i+1))]),t._v(" "),r("td",[t._v(t._s(e.first_name)+" "+t._s(e.last_name))]),t._v(" "),r("td",[t._v(t._s(e.email))]),t._v(" "),r("td",[t._v(t._s(e.phone))]),t._v(" "),r("td",[t._v(t._s(e.roles[0].name))]),t._v(" "),r("td",[1==e.verified?r("span",{staticClass:"badge badge-success"},[t._v("Verified")]):r("span",{staticClass:"badge badge-warning"},[t._v("Pending Verification")])])])}),0),t._v(" "),t.loading?r("tbody",[r("tr",[r("td",{attrs:{colspan:"10"}},[r("content-loader",{attrs:{height:160,width:1e3,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"11.34",y:"7.07",rx:"0",ry:"0",width:"811.2",height:"40.04"}}),t._v(" "),r("rect",{attrs:{x:"11.34",y:"68.07",rx:"0",ry:"0",width:"823.2",height:"44"}})])],1)])]):t._e()])])},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("ID")]),t._v(" "),r("th",[t._v("Fullname")]),t._v(" "),r("th",[t._v("Email Address")]),t._v(" "),r("th",[t._v("Phone Number")]),t._v(" "),r("th",[t._v("User Type")]),t._v(" "),r("th",[t._v("Status")])])])}],!1,null,"efce94ee",null);e.default=component.exports}}]);