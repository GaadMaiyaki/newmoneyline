<template>
  <div class="container wrapper">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-xs-12 col-md-8 text-center">
        <img src="/new-email.svg" class="img-fluid" width="400">
        <div class="m-5">
          <h2 class="headline">New Password</h2>
          <div class="form m-3">
            <input
              type="password"
              class="form-control sm"
              style="text-align: center"
              placeholder="Password"
              v-model="params.password"
            >
            <br>
            <input
                    type="password"
                    class="form-control sm"
                    style="text-align: center"
                    placeholder="Confirm Password"
                    v-model="params.password_confirmation"
            >
            <br>
            <button
              class="btn btn-block sm btn-primary"
              @click.prevent="submit"
            >Submit</button>
          </div>
<!--          <p class="headline text-muted">Please Check Your mailbox, We've sent your 6 Digits Code!</p>-->
          <!-- <p class="headline"></p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      params: {
        password: null,
        password_confirmation: null,
        token: this.$route.params.id
      },
      loadingMessage: ""
    };
  },
  created(){
    this.checkToken();
  },
  methods: {
    submit() {
      if (this.params.password && this.params.password_confirmation) {
        this.$axios
          .$post("user/reset-password", this.params)
          .then(response => {
            if (response.status) {
              this.loadingMessage = response.message;
              this.$noty.success(response.message);
              setTimeout(() => {
                location.href = "/account/login";
              }, 2000);
            }
          })
          .catch(err => {
            if (err.response.data.password[0]){
              this.loadingMessage = err.response.data.password[0];
              this.$noty.error(err.response.data.password[0]);
            }
          });
      } else {
        alert("Please Confirm the Code Entered");
      }
    },
    checkToken(){
      this.$axios
              .$get("user/check-reset-password-expiring-token/"+this.params.token)
              .then(response => {
                console.log('Expiring token ',response);
              })
              .catch(err => {
                this.loadingMessage = err.response.data.error;
                this.$noty.error(err.response.data.error);
                  setTimeout(() => {
                    location.href = "/account/forgot-password";
                  }, 2000);
              });
    }

  }
};
</script>


<style scoped>
body {
  padding: 0;
  margin: 0;
  background: rgb(47, 179, 79, 0.05);
  font-family: "Roboto", sans-serif;
}

.sm {
  width: 50%;
  margin: 0 auto;
}

.logo {
  margin: 2em auto;
  max-width: 200px;
}

.wrapper {
  /* max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; */
  padding: 5rem 0;
}
</style>
