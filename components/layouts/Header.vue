<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <div class="container-fluid">
      <b-navbar-brand>
        <b-link to="/">
          <img src="/logo.png" width="180" alt="moneyline_logo">
        </b-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav v-if="!isAuthenticated">
            <!-- When a user is not logged in -->

            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about-us">About Us</b-nav-item>
            <b-nav-item to="/faq">FAQ</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
            <b-link to="/loan/get-started">
              <b-button variant="primary">Apply Now</b-button>
            </b-link>
            <a href="http://admin.moneyline.ng/">
              <b-button variant="secondary">Login</b-button>
            </a>

            <a :href="remitaLink" target="_blank">
                <img class="btn-icon remita-transitions" src="/remita.png" width="100">
           </a>

          </b-navbar-nav>
          <!-- Logged in auth -->
          <b-navbar-nav
            v-if="isAuthenticated && $store.state.auth.user.user.roles[0].name == 'customer'"
          >
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about-us">About Us</b-nav-item>
            <b-nav-item to="/faq">FAQ</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>

            <b-nav-item to="/app/me">
              <i class="fa fa-dashboard"></i> Dashboard
            </b-nav-item>
            <!-- <b-link to=""> -->
            <b-button variant="secondary" @click="logout">Logout</b-button>
            <!-- </b-link> -->
          </b-navbar-nav>
          <b-navbar-nav
            v-if="isAuthenticated && $store.state.auth.user.user.roles[0].name == 'admin'"
          >
            <b-nav-item to="/app/admin/dashboard">
              <i class="fa fa-dashboard"></i> Dashboard
            </b-nav-item>
            <!-- <b-link to="/account/login"> -->
            <b-button variant="secondary" @click="logout">Logout</b-button>
            <!-- </b-link> -->
          </b-navbar-nav>

        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
    import Vue from 'vue'
    import IdleVue from 'idle-vue'
    import { mapGetters } from "vuex";
    const eventsHub = new Vue();
// method to logout user when inactive for 10min
    Vue.use(IdleVue, {
        eventEmitter: eventsHub,
        idleTime: 1000 * 60 * 10 // 1000 for 1 secs, 300000 for 5 minute
    })
export default {
  name: "Header",
    dataauth : "",
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/authenticated"
    }),
    remitaLink: function () {
      return 'https://www.login.remita.net/remita/onepage/MONEYLINE/biller.spa'
    },
    dataauth: function(){
        // return console.log(this.isAuthenticated);
    }
  },
    onIdle() {
      //if the user is login, when idle logout the user
      if (this.isAuthenticated){
        this.logout()
      }
    },
    onActive() {
    },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      // this.$store.dispatch("users/logout");
      this.$router.push("/");
    }
  }
};
</script>


<style scoped>
.navbar {
  /* padding: 1rem 1rem; */
}
.bg-light {
  background-color: #ffffff !important;
  box-shadow: 0px 1px 9px rgba(193, 193, 193, 0.1);
}
.navbar-toggler {
  border-radius: 0;
  padding: 0;
  border: 1px solid #40a774;
}
@media screen and (max-width: 560px) {
  .navbar-brand {
    margin-left: 1rem;
  }
  .navbar.navbar-light .container-fluid {
    padding: 0 !important;
  }
  .navbar-light .navbar-toggler {
    color: rgb(64, 167, 116);
    border-color: rgb(64, 167, 116);
  }
  .navbar {
    padding: 0 !important;
  }
  .navbar-toggler {
    margin: 0 1rem 0 0;
  }
  .navbar-collapse {
    background: #40a774;
    padding: 0 2rem;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #fff;
  }
}
</style>
