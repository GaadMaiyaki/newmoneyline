(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{455:function(n,t,e){"use strict";e.r(t);e(105);var o={layout:"admin",data:function(){return{loanStatuses:{},loan:{id:"",user:{},basic_information:{},business_employment:{},disbursement_information:{},guarantor_information:{},loan_status:{}}}},mounted:function(){this.fetchLoanStatuses(),this.fetchSingleLoan(),console.log(this.loanStatuses)},methods:{fetchLoanStatuses:function(){var n=this;this.$axios.get("loans/statuses").then(function(t){return n.loanStatuses=t.data.data}).catch(function(n){return history.back()})},fetchSingleLoan:function(){var n=this,t=this.$route.params.id;this.loan.id=t,this.$axios.get("loans/get/".concat(t)).then(function(t){return n.loan=t.data.data}).catch(function(n){return console.log("Error")}),console.log(this.loan,"fss")},approveLoan:function(){var n=this.loanStatuses.find(function(n){return"Approved"==n.display_name});this.$axios.patch("loans/".concat(this.loan._idd,"/update"),{status:n._idd}).then(function(n){return history.back()}).catch(function(n){return alert("Error Approving Loan")})},declineLoan:function(){var n=this.loanStatuses.find(function(n){return"Declined"==n.display_name});this.$axios.patch("loans/".concat(this.loan._idd,"/update"),{status:n._idd}).then(function(n){return history.back()}).catch(function(n){return alert("Something Went Wrong while declining Loan, Please Try Again..")})}}},_=e(6),component=Object(_.a)(o,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"row"},[n.loan?e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h3",{staticClass:"text-center mt-5 mb-2"},[n._v("Loan Application Details")]),n._v(" "),e("div",{staticClass:"text-center"},["pending"==n.loan.loan_status.name?e("span",{staticClass:"badge badge-warning"},[n._v("Pending")]):n._e(),n._v(" "),"review"==n.loan.loan_status.name?e("span",{staticClass:"badge badge-info"},[n._v("Review")]):n._e(),n._v(" "),"approved"==n.loan.loan_status.name?e("span",{staticClass:"badge badge-success"},[n._v("Loan Approved")]):n._e(),n._v(" "),"declined"==n.loan.loan_status.name?e("span",{staticClass:"badge badge-danger"},[n._v("Declined")]):n._e(),n._v(" "),"disbursed"==n.loan.loan_status.name?e("span",{staticClass:"badge badge-success"},[n._v("Disbursed")]):n._e(),n._v(" "),"repaid"==n.loan.loan_status.name?e("span",{staticClass:"badge badge-success"},[n._v("Repaid")]):n._e()]),n._v(" "),e("table",{staticClass:"table"},[n._m(0),n._v(" "),e("tr",[e("td",[e("u",[n._v("Applicant Name:")]),n._v("\n              "+n._s(n.loan.user.first_name)+" "+n._s(n.loan.user.last_name)+"\n            ")]),n._v(" "),e("td",[e("u",[n._v("Applicant Email:")]),n._v("\n              "+n._s(n.loan.user.email)+"\n            ")]),n._v(" "),e("td",[e("u",[n._v("Applicant Phone:")]),n._v("\n              "+n._s(n.loan.user.phone)+"\n            ")])]),n._v(" "),n._m(1),n._v(" "),e("tr",[e("td",[e("u",[n._v("Applicant Employment Status:")]),n._v("\n              "+n._s(n.loan.basic_information.employee_business_owner?n.loan.basic_information.employee_business_owner.replace("_"," "):"")+"\n            ")]),n._v(" "),e("td",[e("u",[n._v("Applicant Education:")]),n._v("\n              "+n._s(n.loan.basic_information.highest_education_level)+"\n            ")]),n._v(" "),e("td",[e("u",[n._v("Applicant Marital Status:")]),n._v("\n              "+n._s(n.loan.basic_information.marital_status)+"\n            ")])]),n._v(" "),e("tr",[e("td",[e("u",[n._v("Applicant Employment Status:")]),n._v("\n              "+n._s(n.loan.basic_information.residential_address)+"\n            ")]),n._v(" "),e("td",[e("u",[n._v("Applicant DOB:")]),n._v("\n              "+n._s(n.loan.basic_information.date_of_birth)+"\n            ")]),n._v(" "),e("td",[e("u",[n._v("Applicant Gender:")]),n._v("\n              "+n._s(n.loan.basic_information.gender)+"\n            ")])])]),n._v(" "),n.loan.business_employment?e("table",{staticClass:"table"},[e("thead",[n._m(2),n._v(" "),e("tr",[e("td",[e("u",[n._v("Business Name:")]),n._v("\n                "+n._s(n.loan.business_employment.business_name)+"\n              ")]),n._v(" "),e("td",[e("u",[n._v("Business Phone:")]),n._v("\n                "+n._s(n.loan.business_employment.business_phone)+"\n              ")]),n._v(" "),e("td",[e("u",[n._v("Business Website:")]),n._v("\n                "+n._s(n.loan.business_employment.business_website)+"\n              ")])]),n._v(" "),e("tr",[e("td",[e("u",[n._v("Business Address:")]),n._v("\n                "+n._s(n.loan.business_employment.business_address)+"\n              ")]),n._v(" "),e("td",[e("u",[n._v("Average Monthly Income:")]),n._v("\n                N"+n._s(n.loan.business_employment.average_monthly_income)+"\n              ")]),n._v(" "),e("td",[e("u",[n._v("RC Number:")]),n._v("\n                "+n._s(n.loan.business_employment.rc_number)+"\n              ")]),n._v(" "),e("td",[e("u",[n._v("No. of Staffs:")]),n._v("\n                "+n._s(n.loan.business_employment.total_number_of_staff)+"\n              ")])]),n._v(" "),e("tr",[e("td",{attrs:{colspan:"10"}},[e("u",[n._v("Currently Serving Another loan from another financial company")]),n._v(" "),0==n.loan.currently_servicing_a_loan_from_another_financial_company?e("span",{staticClass:"badge badge-success"},[n._v("No")]):n._e(),n._v(" "),1==n.loan.currently_servicing_a_loan_from_another_financial_company?e("span",{staticClass:"badge badge-warning"},[n._v("Yes")]):n._e()])])])]):n._e(),n._v(" "),n.loan.company_employment?e("table",{staticClass:"table"},[e("thead",[n._m(3),n._v(" "),e("tr",[e("td",[e("u",[n._v("Company Name:")]),n._v("\n                "+n._s(n.loan.company_employment.company_name)+"\n              ")]),n._v(" "),e("td",[e("u",[n._v("Company Address:")]),n._v("\n                "+n._s(n.loan.company_employment.company_address)+"\n              ")]),n._v(" "),e("td",[e("u",[n._v("Monthly Pay Day:")]),n._v("\n                N"+n._s(n.loan.company_employment.monthly_pay_day)+"\n              ")]),n._v(" "),e("td",[e("u",[n._v("Net Salary:")]),n._v("\n                N"+n._s(n.loan.company_employment.net_salary)+"\n              ")]),n._v(" "),e("td",[e("u",[n._v("Position:")]),n._v("\n                "+n._s(n.loan.company_employment.position_held)+"\n              ")]),n._v(" "),e("td",[e("u",[n._v("Date of Employment:")]),n._v("\n                "+n._s(n.loan.company_employment.date_of_employment)+"\n              ")])])])]):n._e(),n._v(" "),n._m(4),n._v(" "),e("div",{staticClass:"row"},n._l(n.loan.guarantor_information,function(t,i){return e("div",{key:i,staticClass:"col-md-6"},[e("table",{staticClass:"table"},[e("tr",[e("td",[n._v("Name: "+n._s(t.name))])]),n._v(" "),e("tr",[e("td",[n._v("Email: "+n._s(t.email))])]),n._v(" "),e("tr",[e("td",[n._v("Phone: "+n._s(t.phone))])]),n._v(" "),e("tr",[e("td",[n._v("Address: "+n._s(t.home_address))])]),n._v(" "),e("tr",[e("td",[n._v("Office Address: "+n._s(t.office_address))])])])])}),0),n._v(" "),e("table",[n._m(5),n._v(" "),e("tr",{attrs:{colspan:"10"}},[e("td",[e("u",[n._v("Bank Name:")]),n._v("\n              "+n._s(n.loan.disbursement_information.bank_name)+"\n            ")])]),n._v(" "),e("tr",[e("td",[e("u",[n._v("Account Name:")]),n._v("\n              "+n._s(n.loan.disbursement_information.account_name)+"\n            ")])]),n._v(" "),e("tr",[e("td",[e("u",[n._v("Account Number:")]),n._v("\n              "+n._s(n.loan.disbursement_information.account_number)+"\n            ")])])]),n._v(" "),e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-md-12"},["Approved"!==n.loan.loan_status.display_name?e("button",{staticClass:"btn btn-secondary",on:{click:n.approveLoan}},[n._v("Approve Loan")]):n._e(),n._v(" "),e("button",{staticClass:"btn btn-warning",on:{click:n.declineLoan}},[n._v("Decline Loan")]),n._v(" "),e("button",{staticClass:"btn btn-info",on:{click:function(t){return n.$router.push("/app/admin/loans")}}},[n._v("Cancel")])])])])])]):n._e()])},[function(){var n=this.$createElement,t=this._self._c||n;return t("tr",[t("th",[this._v("User Details")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("tr",[t("th",{staticClass:"thead"},[this._v("Loan Basic Information")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("tr",[t("th",{staticClass:"thead"},[this._v("Business Information")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("tr",[t("th",{staticClass:"thead"},[this._v("Employment Information")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("table",{staticClass:"table"},[t("tr",[t("th",[this._v("Guarantor's Information")])])])},function(){var n=this.$createElement,t=this._self._c||n;return t("tr",[t("th",[this._v("Disbursement Information")])])}],!1,null,"692eecf6",null);t.default=component.exports}}]);