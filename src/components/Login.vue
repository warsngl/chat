<template lang='pug'>
.flex.justify-center.mt-12
  .relative
    label.name(for="name") Name
    input#name.input.shine(
      v-model="name",
      placeholder="Enter name",
      @keydown.enter="enter"
    )
  button.button-ok.shine.w-12(@click="enter") Join
</template>

<script>
export default {
  data: () => ({
    name: "",
  }),
  methods: {
    enter() {
      this.$store.commit("setUserProp", { prop: "name", val: this.name });
      this.$store.commit("setUserProp", { prop: "onlineAt", val: new Date() });
      const key = this.getKey("users");
      this.$store.commit("setUserProp", { prop: "id", val: key });
      this.$store.commit("setUserProp", { prop: "rooms", val: [] });
      this.updateByKey("users/", key, this.fullUser);
      this.lsUser = this.fullUser;
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.name {
  @apply absolute -top-6 left-2 text-xs;
}
</style>