<template>
  <div class="container wrapper">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-xs-12 col-md-8 text-center">
        <img src="/new-email.svg" class="img-fluid" width="400">
        <div class="m-5">
          <h2 class="headline">Verify Your Account</h2>
          <div class="form m-3">
            <input
              type="text"
              class="form-control sm"
              style="text-align: center"
              placeholder="Enter 6 Digits Code"
              v-model="accountKey"
            >
            <br>
            <button
              class="btn btn-block sm btn-primary"
              @click.prevent="validateAccountKey"
            >Verify Code</button>
          </div>
          <p class="headline text-muted">Please Check Your mailbox, We've sent your 6 Digits Code!</p>
          <!-- <p class="headline"></p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VERIFY_USER } from "~/utils/api-routes";

const VALID_ACCOUNT_KEY_LENGTH = 6;
export default {
  data() {
    return {
      accountKey: "",
      loadingMessage: ""
    };
  },
  methods: {
    validateAccountKey() {
      if (
        this.accountKey &&
        Number(this.accountKey) &&
        this.accountKey.length == VALID_ACCOUNT_KEY_LENGTH
      ) {
        this.$axios
          .get(`${VERIFY_USER}/${this.accountKey}`)
          .then(response => {
            console.log(response.data);
            if (response.data.status) {
              this.loadingMessage = response.data.message;
              this.$noty.success(response.data.message);
              setTimeout(() => {
                location.href = "/account/login";
              }, 2000);
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
