<template lang='pug'>
ul.fa
  li
    router-link(to='/') Rooms
  li
    p.room-name {{(room || $route.params?.id) || 'Lobby'}}
  li
    router-link(:to="'/user/'+user") Profile
</template>

<script>
export default {
}
</script>

<style>
.router-link-exact-active{
  @apply bg-m4 text-m1 px-2 py-1 rounded shadow-md shadow-indigo-600
}
.room-name{
  @apply px-2 border-b border-m4
}
</style>