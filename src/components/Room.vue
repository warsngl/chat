<template lang='pug'>
.loader(v-if="isLoading")
  svg.w-8.h-8
    use(href="../assets/icon.svg#loader")
.chat(v-else)
  .chat-icon(v-if="isAdmin")
    svg.w-4.h-4.mr-2(@click="handleLock", fill="white")
      use(v-if="!roomInfo.private", href="../assets/icon.svg#lock")
      use(v-else, href="../assets/icon.svg#unlock")
    svg.w-4.h-4.mr-2(@click="deleteChat", fill="white")
      use(href="../assets/icon.svg#delete")
    svg.w-4.h-4(@click="editRoomName = !editRoomName", fill="white")
      use(href="../assets/icon.svg#edit")
    input.message-input.absolute(
      v-if="editRoomName",
      @keydown.enter="setRoomName($event.target.value)"
    )
  ul.message-list
    li.message(
      :class="m.user == user && 'ml-auto'",
      v-for="(m, idx) in messages",
      @mouseover="hover[idx] = true",
      @mouseleave="hover[idx] = false"
    ) 
      .flex.items-center
        router-link.message-user(:to="'/user/' + m.user") {{ m.user }}
        .edit(v-if="m.user == user && hover[idx]")
          svg.mr-2(@click="handleEditMessage(m)")
            use(href="../assets/icon.svg#edit")
          svg(@click="deleteMessage(m)")
            use(href="../assets/icon.svg#delete")
      .message-text {{ m.text }}
  input.message-input(
    v-model="text",
    placeholder="Type message...",
    @keydown.enter="handleEnter"
  )
</template>

<script>
import { db } from "../firebase/config";
import {
  onValue,
  update,
  push,
  ref,
  get,
  set,
  remove,
} from "firebase/database";
export default {
  data: () => ({
    roomInfo: {},
    text: "",
    messages: {},
    isLoading: false,
    isAdmin: false,
    isEdit: false,
    message: {},
    hover: [],
    editRoomName: false,
  }),
  computed: {
    getFullRoom() {
      let room;
      this.getOne("rooms/" + this.room).then((res) => (room = res));
      return room;
    },
  },
  methods: {
    getMessages() {
      this.isLoading = true;
      onValue(ref(db, "rooms/" + this.room), (snapshot) => {
        let snap = snapshot.val();
        if (snap) {
          this.roomInfo = snap._info;
          this.isAdmin =
            Object.values(snap._info.users).includes(this.user) == 1;
          this.messages = Object.keys(snap).map((k) => ({ ...snap[k], id: k }));
          this.messages.pop();
          for (let i = 0; i < this.messages.length; i++) {
            this.hover.push(false);
          }
        } else {
          this.messages = [{ text: "No messages yet!", user: "Admin" }];
        }
      });
      this.isLoading = false;
    },
    deleteChat() {
      this.removeOne("rooms/" + this.room).then((res) =>
        this.$router.push("/")
      );
    },
    handleLock() {
      this.updateByKey(`rooms/${this.room}`, "_info", {
        private: !this.roomInfo.private,
      });
    },
    handleEnter() {
      this.isEdit && this.text ? this.editMessage() : this.sendMessage();
    },
    sendMessage(text = this.text, user = this.user) {
      if (this.text) {
        let date = new Date();
        let messageKey = this.add("rooms/" + this.room, { text, user, date });
        this.updateByKey(
          "users/" + this.fullUser.id + "/messages",
          messageKey,
          { text, user, date }
        );
        this.getOne("users/" + this.fullUser.id + "/count").then((count) =>
          this.updateByKey("users", this.fullUser.id, { count: count + 1 })
        );
      }
    },
    editMessage() {
      const { user, id } = this.message;
      this.updateByKey(`rooms/${this.room}`, id, { text: this.text });
      this.text = "";
      this.isEdit = false;
    },
    deleteMessage({ id }) {
      this.removeOne(`rooms/${this.room}/${id}`);
    },
    handleEditMessage(m) {
      this.message = m;
      this.text = m.text;
      this.isEdit = true;
    },
    setRoomName(name) {
      this.updateByKey(`rooms/${this.room}`, "_info", { name });
      this.editRoomName = false;
    },
  },
  mounted() {
    this.getMessages();
  },
};
</script>

<style scoped>
.edit {
  @apply w-8 h-4 flex ml-2;
}
.chat-icon {
  @apply flex absolute;
}
.message {
  @apply mb-2 bg-m4 text-m1 rounded-xl px-2 py-1 w-[80%];
}
.message-text {
  @apply pl-2 break-all;
}
.chat {
  @apply relative flex flex-col grow;
}
.message-input {
  @apply w-full rounded pl-3 text-m1 break-all;
}
.message-list {
  @apply w-full overflow-y-auto grow;
}
.message-user {
  @apply py-2 underline text-xs font-bold text-blue-400;
}
</style>