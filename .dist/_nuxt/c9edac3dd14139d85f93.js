(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{399:function(t,n,e){var content=e(435);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(17).default)("e7e519c8",content,!0,{sourceMap:!1})},434:function(t,n,e){"use strict";var o=e(399);e.n(o).a},435:function(t,n,e){(t.exports=e(16)(!1)).push([t.i,".manage[data-v-4229f3cc]{padding:1em;margin:3em 0;background:#fafafa}.nav-tabs .nav-link.active[data-v-4229f3cc]{color:#495057;background-color:#fff;box-shadow:0 -3px 5px 0 rgba(226,225,22 5,.388)!important}.nav-tabs .nav-link.active a[data-v-4229f3cc]{color:#000;font-weight:700}li.nav-item a.nav-link[data-v-4229f3cc]{color:#495057!important;font-weight:500}",""])},459:function(t,n,e){"use strict";e.r(n);e(32);var o={layout:"admin",components:{},data:function(){return{loans:[]}},mounted:function(){this.getUserLoans()},methods:{getUserLoans:function(){var t=this;this.$axios.get("/loans").then(function(n){n.data.data.data.forEach(function(n){t.loans.push(n)})})},viewLoan:function(t){this.$router.push("/app/admin/loans/".concat(t))}}},c=(e(434),e(6)),component=Object(c.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h6",{staticStyle:{background:"#015786",color:"#fff",padding:"15px"}},[t._v("Loan Applications")]),t._v(" "),e("table",{staticClass:"table table-striped table"},[t._m(0),t._v(" "),e("tbody",t._l(t.loans,function(n,i){return e("tr",{key:i},[e("td",[t._v(t._s(n._idd))]),t._v(" "),e("td",[t._v("₦"+t._s(t._f("numFormat")(n.request_amount)))]),t._v(" "),e("td",[t._v(t._s(n.created_at))]),t._v(" "),e("td",["pending"==n.loan_status.name?e("span",{staticClass:"badge badge-warning"},[t._v("Pending")]):t._e(),t._v(" "),"review"==n.loan_status.name?e("span",{staticClass:"badge badge-info"},[t._v("Review")]):t._e(),t._v(" "),"approved"==n.loan_status.name?e("span",{staticClass:"badge badge-success"},[t._v("Loan Approved")]):t._e(),t._v(" "),"declined"==n.loan_status.name?e("span",{staticClass:"badge badge-danger"},[t._v("Declined")]):t._e(),t._v(" "),"disbursed"==n.loan_status.name?e("span",{staticClass:"badge badge-success"},[t._v("Disbursed")]):t._e(),t._v(" "),"repaid"==n.loan_status.name?e("span",{staticClass:"badge badge-success"},[t._v("Repaid")]):t._e()]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-success btn-sm",on:{click:function(e){return t.viewLoan(n._idd)}}},[t._v("View")])])])}),0)])])},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",[t._v("Appliction ID")]),t._v(" "),e("th",[t._v("Amount Requested (₦)")]),t._v(" "),e("th",[t._v("Date Requested")]),t._v(" "),e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Actions")])])])}],!1,null,"4229f3cc",null);n.default=component.exports}}]);