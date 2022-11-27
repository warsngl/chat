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
        this.$store.commit("setUser", this.lsUser);
      } catch (e) {
        console.log(e);
        localStorage.removeItem("chat--user");
        this.$router.push("/login");
      } finally {
      }
    } else {
      this.$router.push("/login");
    }
  },
  beforeUnmount() {
    this.lsUser = this.user;
    window.removeEventListener("resize");
  },
};
</script>

<template lang='pug'>
TheNavbar.w-full.mb-4(v-if="user")
router-view
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
  height: calc(var(--vh, 1vh) * 100);
  @apply flex flex-col bg-m1 text-m4;
}
.fc {
  @apply flex items-center justify-center;
}
.fcc {
  @apply flex flex-col items-center;
}
.fa {
  @apply flex justify-around;
}
.shine {
  @apply rounded shadow-md hover:scale-110 transition duration-300;
}
.button-ok {
  @apply bg-m2 text-m4 w-full rounded border font-bold shadow-green-600;
}
.loader {
  @apply w-8 h-8 animate-spin;
}
.input {
  @apply pl-2 text-m1 shadow-red-600 mr-2 rounded;
}
use {
  all: inherit;
}
ul::-webkit-scrollbar {
  width: 10px;
}
ul::-webkit-scrollbar-track {
  background-color: transparent;
}
ul::-webkit-scrollbar-thumb {
  @apply bg-m4 rounded-xl;
}
</style>
