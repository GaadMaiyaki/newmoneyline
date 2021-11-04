<template>
  <div class="col-md-11 mt-5 mb-5 mx-auto">
    <div class="d-flex" id="wrapper">
      <!-- Sidebar -->
      <SideBar/>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div style="padding-left:10px;">
          <div class="text-right float-right">
            <b-link to="/app/application">
              <b-button variant="primary">Apply for a new loan</b-button>
            </b-link>
          </div>
          <div v-if="loans.length > 0">
            <div class="row">
              <!-- <div class="col-xl-6 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >Loan Balance</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">&#8358; 300,000.00</div>
                      </div>
                      <div class="col-auto">
                        <i class="fa fa-credit-card-alt fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>-->

              <div class="col-xl-6 col-md-6 mb-4">
                <div class="card border-left-secondary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >Total Loan Applications</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{ userLoans.total }}</div>
                      </div>
                      <div class="col-auto">
                        <i class="fa fa-list-alt fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="col-xl-12 col-md-12 mb-4">
                <div class="card border-left-danger shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1 text-danger"
                        >
                          <h3 style="color: #999">Repayment Schedule</h3>
                        </div>
                        <div>
                          <table class="table table-striped table-hover">
                            <thead>
                              <tr>
                                <th>
                                  Date Due
                                  <i class="fa fa-calendar"></i>
                                </th>
                                <th>Amount (NGN)</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>31st March 2019</td>
                                <td>150,000.00</td>
                                <td>
                                  <span class="badge badge-success">Paid</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  30th April 2019
                                  <span class="badge badge-danger">Overdue</span>
                                </td>
                                <td>150,000.00</td>
                                <td>
                                  <span class="badge badge-warning">Pending</span>
                                </td>
                              </tr>
                              <tr>
                                <td>30th June 2019</td>
                                <td>150,000.00</td>
                                <td>
                                  <span class="badge badge-warning">Pending</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>-->
            </div>
          </div>
          <div
            v-else
            class="justify-content-center align-items-center flex-wrap align-content-center"
          >
            <div class="row mt-5">
              <div class="col-md-4 offset-4 text-center">
                <img src="/empty.svg" width="200">
                <br>
                <br>
                <h4 class="text-muted">You've not applied for a Loan</h4>
                <br>
                <b-link
                  to="/app/application"
                  class="text-center align-center btn btn-primary"
                >Apply Now</b-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
    <!-- /#wrapper -->
  </div>
</template>

<style scoped>
.border-left-primary {
  border-left: 0.25rem solid #015786 !important;
}

.border-left-secondary {
  border-left: 0.25rem solid #218838 !important;
}

.border-left-danger {
  border-left: 0.25rem solid indianred !important;
}
</style>

<script>
import { numberComma } from "@/utils/formatter";
import SideBar from "@/components/layouts/user/SideBar";
export default {
  layout: "user",
  components: {
    SideBar
  },
  data() {
    return {
      data1: [],
      data2: [],
      userProfile: {},
      loans: [],
      userLoans: {
        total: 0
      }
    };
  },
  mounted() {
    this.getUserProfile();
    this.getUserLoans();
  },
  methods: {
    getUserProfile() {
      this.userProfile = this.$store.state.auth.user.user;
    },
    getUserLoans() {
      this.$axios.get("/loans/me").then(res => {
        const { data: loans } = res.data.data;
        this.userLoans.total = res.data.data.total;
        loans.forEach(loan => {
          this.loans.push(loan);
        });
      });
    }
  }
};
</script>
