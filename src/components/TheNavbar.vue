<template lang='pug'>
ul.fa.navbar
  li.route
    router-link(to='/') {{roomID || 'Chats'}}
  li.route
    router-link(:to="'/user/'+userID") Profile
</template>

<script>
export default {
}
</script>

<style>
.navbar{
  /* @apply h-[4vh] overflow-hidden */
}
.router-link-exact-active{
  @apply border-none bg-transparent text-m4 px-2 py-1 rounded shadow-md shadow-indigo-600
}
.route{
  @apply shadow-inner hover:shadow-lg hover:shadow-indigo-800
}
/* .route *{
  @apply mix-blend-hue bg-blend-luminosity hover:shadow-xl hover:shadow-indigo-400
} */
.room-name{
  @apply px-2 border-b border-m4
}
</style>