<template>
  <div>
    <Header/>
    <div class="container-fluid mt-5 mb-5">
      <div class="row">
        <!-- <div class="mt-5"> -->
        <div class="col-md-2">
          <SideBar/>
        </div>
        <div class="col-md-10">
          <nuxt/>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/layouts/HeaderLogged";
import SideBar from "@/components/admin/SideBar";
import Footer from "@/components/layouts/Footer";
export default {
  middleware: "admin",
  components: {
    Header,
    Footer,
    SideBar
  }
};
</script>

    
