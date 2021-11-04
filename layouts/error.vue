<template>
  <div class="container" style="height: 50vh">
    <div class="row mt-5" style="margin-top: 15rem">
      <div class="col-md-6 offset-3 text-center mt-5">
        <h1 v-if="error.statusCode === 404">Page not found</h1>

        <h1 v-else>An error occurred</h1>
        <nuxt-link to="/">Home page</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "default" // you can set a custom layout for the error page
};
</script>