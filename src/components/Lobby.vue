<template lang='pug'>
.loader(v-if="isLoading")
  svg.w-8.h-8
    use(href="../assets/icon.svg#loader")
div(v-else)
  .fc.mb-2
    button.button-ok.shine(@click="createRoom", class="md:w-[60%]") Create
  .fc.mb-2
    input.input.shine(
      placeholder="Join private room",
      v-model="id",
      @keydown.enter="joinRoom"
    )
    button(@click="joinRoom")
      svg.w-4.h-4(fill="white")
        use(href="../assets/icon.svg#enter")
  h1.text-center.text-xl.mt-8(v-if="rooms.length == 0") No rooms yet!
  ul.room-list(v-else)
    li.room.shine.cursor-pointer(
      v-for="room in rooms",
      @click.self="$router.push('/room/' + room.id)"
    )
      span.mr-1(@click.self="$router.push('/room/' + room.id)") {{ room.id }} by
      router-link.underline(:to="'/user/' + room.admin") {{ room.admin }}
</template>

<script>
import { ref, onValue } from "firebase/database";
import { db } from "../firebase/config";
export default {
  data: () => ({
    rooms: [],
    id: "",
    isLoading: false,
  }),
  computed: {},
  methods: {
    getRooms() {
      this.isLoading = true;
      onValue(ref(db, "rooms"), (snapshot) => {
        let snap = snapshot.val();
        if (snap) {
          this.rooms = Object.keys(snap)
            .filter(
              (k) =>
                snap[k]._info.private == false ||
                Object.values(snap[k]._info.users).includes(this.user)
            )
            .map((k) => {
              return {
                id: k,
                admin: snap[k]._info.users.admin,
              };
            });
        }
      });
      this.isLoading = false;
    },
    createRoom() {
      let key = this.add("rooms/", {
        _info: { name: "", users: { admin: this.user }, private: false },
      });
      this.add("rooms/" + key, { text: "Hi there🔥", user: this.user });
      this.add("users/" + this.fullUser.id + "/rooms/", key);
      this.$router.push(`/room/${key}`);
    },
    joinRoom() {
      this.add(`rooms/${this.id}/_info/users`, this.user);
      this.$router.push(`/room/${this.id}`);
    },
  },
  mounted() {
    this.getRooms();
  },
};
</script>

<style scoped>
.room-list {
  @apply overflow-y-auto h-full;
}
.room {
  @apply mb-2 bg-m2 text-m3 px-2 py-1 shadow-m3 md:w-[60%] mx-auto text-center;
}
</style>