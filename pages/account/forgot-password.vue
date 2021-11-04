<template>
  <div class="container wrapper">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-xs-12 col-md-8 text-center">
        <img src="/new-email.svg" class="img-fluid" width="400">
        <div class="m-5">
          <h2 class="headline">Enter Your Email</h2>
          <div class="form m-3">
            <input
              type="email"
              class="form-control sm"
              style="text-align: center"
              placeholder="Email"
              v-model="params.email"
            >
            <br>
            <button
              class="btn btn-block sm btn-primary"
              @click.prevent="submit"
            >Send Reset Link</button>
          </div>
          <p v-show="display" class="headline text-muted text-primary">Please Check Your mailbox, We've sent you password resent link!</p>
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
        email: null
      },
      loadingMessage: "",
      display: false
    };
  },
  methods: {
    submit() {
      if (this.params.email) {
        this.$axios
          .$post("user/forgot-password", this.params)
          .then(response => {
            console.log(response);
            if (response.status) {
              this.loadingMessage = response.message;
              this.$noty.success(response.message);
              this.display = true
              // setTimeout(() => {
              //   location.href = "/account/login";
              // }, 2000);
            }
          })
          .catch(err => {
            this.loadingMessage = err.response.data.error;
            this.$noty.error(err.response.data.error);
          });
      } else {
        alert("Please Confirm the Code Entered");
      }
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
