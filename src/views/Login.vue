<template lang='pug'>
.flex.justify-center.mt-12.h-8
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
      const newUserKey = this.getKey("users");

      this.$store.commit("setUser", {
        id:newUserKey,
        name: this.name,
        onlineAt: new Date(),
        rooms: [],
        count:0
      });

      this.updateByKey("users/", newUserKey, this.$store.state.user);
      this.lsUser = this.$store.state.user;
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.name {
  @apply absolute -top-6 left-2 text-xs;
}
#name {
  @apply h-8;
}
</style>