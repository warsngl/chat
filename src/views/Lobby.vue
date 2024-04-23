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
      v-model="privateID",
      @keydown.enter="joinRoom(privateID)"
    )
    button(@click="joinRoom")
      svg.w-4.h-4(fill="white")
        use(href="../assets/icon.svg#enter")
  h1.text-center.text-xl.mt-8(v-if="rooms.length == 0") No rooms yet!
  ul.room-list(v-else)
    li.room.shine.cursor-pointer(
      v-for="room in rooms",
      @click.self="joinRoom(room.id)"
    )
      span.mr-1(@click.self="joinRoom(room.id)") {{ room.id }} by
      router-link.underline(:to="'/user/' + room.admin.id") {{ room.admin.name.name }}
</template>

<script>
import { ref, onValue } from "firebase/database";
import { db } from "../firebase/config";
export default {
  data: () => ({
    rooms: [],
    privateID: "",
    isLoading: false,
  }),
  computed: {},
  methods: {
    getRooms() {
      this.isLoading = true;
      onValue(ref(db, "rooms"), (snapshot) => {
        let rooms = snapshot.val();
        if (rooms) {
          this.rooms = Object.keys(rooms)
            .filter(
              (k) =>
                rooms[k]._info.private == false ||
                Object.keys(rooms[k]._info.users).includes(this.userID)
            )
            .map((k) => {
              return {
                id: k,
                admin: {
                  name: Object.values(rooms[k]._info.users)[0],
                  id: Object.keys(rooms[k]._info.users)[0],
                },
              };
            });
        }
      });
      this.isLoading = false;
    },
    createRoom() {
      let key = this.add("rooms/", {
        _info: {
          name: "",
          users: { [this.userID]: {name:this.userName} },
          private: false,
        },
      });
      this.add("rooms/" + key, {
        text: "Hi there🔥",
        userID: this.userID,
        userName: this.userName,
      });
      this.add("users/" + this.userID + "/rooms/", key);
      this.$router.push(`/room/${key}`);
    },
    joinRoom(id) {
      this.setOne(
        "rooms/" + id + "/_info/users/",
        this.userID,
        {name:this.userName}
      ).then(this.$router.push("/room/" + id));
    },
  },
  mounted() {
    this.getRooms();
  },
};
</script>

<style scoped>
.room-list {
  @apply overflow-y-auto;
}
.room {
  @apply mb-2 bg-m2 text-m3 px-2 py-1 shadow-m3 md:w-[60%] mx-auto text-center;
}
</style>