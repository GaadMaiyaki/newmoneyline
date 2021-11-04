<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <div class="card cardi">
        <div class="card-image" style="overflow: hidden; object-fit: cover">
          <img src="/bg-profile.jpeg" alt="img" />
          <div class="avatar_image" style="border-radius: 50%">
            <img src="https://i.pravatar.cc/200x200" alt="avatar" />
          </div>
        </div>

        <div class="card-body">
          <h3 class="text-center">{{ user.first_name }}</h3>
          <h6 class="text-center">{{ user.roles[0].display_name }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "admin",
  computed: {
    user() {
      return this.$store.state.auth.user.user;
    }
  }
};
</script>

<style scoped>
.cardi {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.08) !important;
  border: none !important;
}

.avatar_image {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-top: -23px;
  position: absolute;
  top: 60px;
  left: 10em;
}

.avatar_image img {
  border-radius: 50%;
}
</style>

