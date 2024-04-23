<script>
import TheNavbar from "./components/TheNavbar.vue";
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
export default {
  data: () => ({}),
  components: { TheNavbar },
  mounted() {
    if (this.lsUser) {
      try {
        this.getOne("users/" + this.lsUser.id).then((user) => {
          this.$store.commit("setUser", user);
        });
      } catch (e) {
        console.log(e);
        localStorage.removeItem("chat--user");
        this.$router.push("/login");
      }
    } else {
      this.$router.push("/login");
    }
  },
  beforeUnmount() {
    this.lsUser = this.$store.state.user;
    this.updateByKey("users/", this.userID, this.$store.state.user);
    window.removeEventListener("resize");
  },
};
</script>

<template lang='pug'>
TheNavbar.w-full.mb-4(v-if="userID")
router-view.h-full
</template>

<style>
/* import main from "../assets/main.css" */
</style>
