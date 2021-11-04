<template>
  <div class="row">
    <div v-if="loan" class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center mt-5 mb-2">Loan Application Details</h3>
          <div class="text-center">
            <span class="badge badge-warning" v-if="loan.loan_status.name == 'pending'">Pending</span>
            <span class="badge badge-info" v-if="loan.loan_status.name == 'review'">Review</span>
            <span
              class="badge badge-success"
              v-if="loan.loan_status.name == 'approved'"
            >Loan Approved</span>
            <span class="badge badge-danger" v-if="loan.loan_status.name == 'declined'">Declined</span>
            <span class="badge badge-success" v-if="loan.loan_status.name == 'disbursed'">Disbursed</span>
            <span class="badge badge-success" v-if="loan.loan_status.name == 'repaid'">Repaid</span>
          </div>
          <table class="table">
            <tr>
              <th>User Details</th>
            </tr>
            <tr>
              <td>
                <u>Applicant Name:</u>
                {{ loan.user.first_name }} {{ loan.user.last_name }}
              </td>
              <td>
                <u>Applicant Email:</u>
                {{ loan.user.email }}
              </td>
              <td>
                <u>Applicant Phone:</u>
                {{ loan.user.phone }}
              </td>
            </tr>
            <tr>
              <th class="thead">Loan Basic Information</th>
            </tr>
            <tr>
              <td>
                <u>Applicant Employment Status:</u>
                {{ loan.basic_information.employee_business_owner ? loan.basic_information.employee_business_owner.replace('_',' ') : '' }}
              </td>
              <td>
                <u>Applicant Education:</u>
                {{ loan.basic_information.highest_education_level }}
              </td>
              <td>
                <u>Applicant Marital Status:</u>
                {{ loan.basic_information.marital_status }}
              </td>
            </tr>
            <tr>
              <td>
                <u>Applicant Employment Status:</u>
                {{ loan.basic_information.residential_address }}
              </td>
              <td>
                <u>Applicant DOB:</u>
                {{ loan.basic_information.date_of_birth }}
              </td>
              <td>
                <u>Applicant Gender:</u>
                {{ loan.basic_information.gender }}
              </td>
            </tr>
          </table>
          <table class="table" v-if="loan.business_employment">
            <thead>
              <tr>
                <th class="thead">Business Information</th>
              </tr>
              <tr>
                <td>
                  <u>Business Name:</u>
                  {{ loan.business_employment.business_name }}
                </td>
                <td>
                  <u>Business Phone:</u>
                  {{ loan.business_employment.business_phone }}
                </td>
                <td>
                  <u>Business Website:</u>
                  {{ loan.business_employment.business_website }}
                </td>
              </tr>
              <tr>
                <td>
                  <u>Business Address:</u>
                  {{ loan.business_employment.business_address }}
                </td>
                <td>
                  <u>Average Monthly Income:</u>
                  N{{ loan.business_employment.average_monthly_income }}
                </td>
                <td>
                  <u>RC Number:</u>
                  {{ loan.business_employment.rc_number }}
                </td>
                <td>
                  <u>No. of Staffs:</u>
                  {{ loan.business_employment.total_number_of_staff }}
                </td>
              </tr>
              <tr>
                <td colspan="10">
                  <u>Currently Serving Another loan from another financial company</u>
                  <span
                    v-if="loan.currently_servicing_a_loan_from_another_financial_company == 0"
                    class="badge badge-success"
                  >No</span>
                  <span
                    v-if="loan.currently_servicing_a_loan_from_another_financial_company == 1"
                    class="badge badge-warning"
                  >Yes</span>
                </td>
              </tr>
            </thead>
          </table>
          <table class="table" v-if="loan.company_employment">
            <thead>
              <tr>
                <th class="thead">Employment Information</th>
              </tr>
              <tr>
                <td>
                  <u>Company Name:</u>
                  {{ loan.company_employment.company_name }}
                </td>
                <td>
                  <u>Company Address:</u>
                  {{ loan.company_employment.company_address }}
                </td>
                <td>
                  <u>Monthly Pay Day:</u>
                  N{{ loan.company_employment.monthly_pay_day }}
                </td>
                <td>
                  <u>Net Salary:</u>
                  N{{ loan.company_employment.net_salary }}
                </td>
                <td>
                  <u>Position:</u>
                  {{ loan.company_employment.position_held }}
                </td>
                <td>
                  <u>Date of Employment:</u>
                  {{ loan.company_employment.date_of_employment }}
                </td>
              </tr>
            </thead>
          </table>

          <table class="table">
            <tr>
              <th>Guarantor's Information</th>
            </tr>
          </table>
          <div class="row">
            <div class="col-md-6" v-for="(guarantor, i) in loan.guarantor_information" :key="i">
              <table class="table">
                <tr>
                  <td>Name: {{ guarantor.name }}</td>
                </tr>
                <tr>
                  <td>Email: {{ guarantor.email }}</td>
                </tr>
                <tr>
                  <td>Phone: {{ guarantor.phone}}</td>
                </tr>
                <tr>
                  <td>Address: {{ guarantor.home_address }}</td>
                </tr>
                <tr>
                  <td>Office Address: {{ guarantor.office_address }}</td>
                </tr>
              </table>
            </div>
          </div>

          <table>
            <tr>
              <th>Disbursement Information</th>
            </tr>
            <tr colspan="10">
              <td>
                <u>Bank Name:</u>
                {{ loan.disbursement_information.bank_name }}
              </td>
            </tr>
            <tr>
              <td>
                <u>Account Name:</u>
                {{ loan.disbursement_information.account_name }}
              </td>
            </tr>
            <tr>
              <td>
                <u>Account Number:</u>
                {{ loan.disbursement_information.account_number }}
              </td>
            </tr>
          </table>

          <div class="row mt-5">
            <div class="col-md-12">
              <button
                v-if="loan.loan_status.display_name !== 'Approved'"
                class="btn btn-secondary"
                @click="approveLoan"
              >Approve Loan</button>
              <button class="btn btn-warning" @click="declineLoan">Decline Loan</button>
              <button class="btn btn-info" @click="$router.push('/app/admin/loans')">Cancel</button>
              <!-- <button class="btn btn-danger" @click="$router.push('/app/admin/loans')">Cancel</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      loanStatuses: {},
      loan: {
        id: "",
        user: {},
        basic_information: {},
        business_employment: {},
        disbursement_information: {},
        guarantor_information: {},
        loan_status: {}
      }
    };
  },
  mounted() {
    this.fetchLoanStatuses();
    this.fetchSingleLoan();
    console.log(this.loanStatuses);
  },

  methods: {
    fetchLoanStatuses() {
      this.$axios
        .get("loans/statuses")
        .then(res => (this.loanStatuses = res.data.data))
        .catch(err => history.back());
    },
    fetchSingleLoan() {
      const loanId = this.$route.params.id;
      this.loan.id = loanId;
      this.$axios
        .get(`loans/get/details/${loanId}`)
        .then(res => (this.loan = res.data))
        .catch(err => console.log("Error"));
      console.log(this.loan, "fss");
    },
    approveLoan() {
      let approveStatus = this.loanStatuses.find(
        status => status.display_name == "Approved"
      );
      // let payload = {  };
      this.$axios
        .patch(`loans/${this.loan._idd}/update`, {
          status: approveStatus._idd
        })
        .then(res => history.back())
        .catch(err => alert("Error Approving Loan"));
      // alert("Functionality will be pushed on next update");
    },
    declineLoan() {
      let declineStatus = this.loanStatuses.find(
        status => status.display_name == "Declined"
      );
      // let payload = {  };
      this.$axios
        .patch(`loans/${this.loan._idd}/update`, {
          status: declineStatus._idd
        })
        .then(res => history.back())
        .catch(err =>
          alert("Something Went Wrong while declining Loan, Please Try Again..")
        );
    }
  }
};
</script>

<style scoped>
</style>


