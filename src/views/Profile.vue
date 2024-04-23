<template lang='pug'>
.fcc
  button.mb-3.bg-m4.text-m1.px-2.py-1.rounded.shadow.shadow-yellow-400(
    @click="logout"
  ) Logout
  .flex.text-left
    .w-24.mr-20.font-bold
      p Name
      p Register at
      p Messages
    .w-50
      p {{ target.name }}
      p {{ onlineAt.day + " " + onlineAt.month + " " + onlineAt.year }}
      p {{ target.count }}
</template>

<script>
export default {
  data: () => ({
    target: {},
  }),
  computed: {
    targetUserID() {
      return this.$route.params.id;
    },
    onlineAt() {
      let x = new Date(this.target.onlineAt);
      let day = x.getDate();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let month = months[x.getMonth()];
      let year = x.getFullYear();
      return { day, month, year };
    },
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
  mounted() {
    this.getOne("users/" + this.targetUserID).then((user) => {
      this.target = user;
    });
  },
};
</script>

<style>
</style>