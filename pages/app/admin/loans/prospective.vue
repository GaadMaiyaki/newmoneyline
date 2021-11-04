<template>
  <div>
    <h6 class style="background: #015786; color: #fff; padding: 15px; ">Prospective Loan Applicant</h6>
    <table class="table table-striped table">
      <thead>
      <tr>
        <th>Full Name</th>
        <th>Created</th>
        <th>Last Update</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(prospect, i) in prospective" :key="i">
        <td>{{ prospect.full_name }}</td>
        <td>{{ prospect.created_at }}</td>
        <td>{{ prospect.updated_at }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        layout: "admin",
        components: {},
        data() {
            return {
                prospective: []
            };
        },
        created() {
            this.getUserLoans();
        },
        methods: {
            getUserLoans() {
                this.$axios.get("/loans/progress").then(res => {
                    console.log('Prospect', res.data)
                    res.data.forEach(prospect => {
                        this.prospective.push(prospect);
                    });
                    // [...this.data1, requested_amount: numberComma(this.data1.requested_amount)]
                });
            }

        }
    };
</script>


<style scoped>
  .manage {
    padding: 1em;
    margin: 3em 0em;
    background: #fafafa;
  }

  .nav-tabs .nav-link.active {
    color: #495057;
    background-color: #fff;
    /* border-color: #dee2e6 #dee2e6 #fff; */
    box-shadow: 0px -3px 5px 0px rgba(226, 225, 22 5, 0.388) !important;
  }
  .nav-tabs .nav-link.active a {
    color: #000;
    font-weight: bold;
  }
  li.nav-item a.nav-link {
    color: #495057 !important;
    font-weight: 500;
  }
</style>
