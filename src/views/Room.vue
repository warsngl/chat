<template lang='pug'>
.loader(v-if="isLoading")
  svg.w-8.h-8
    use(href="../assets/icon.svg#loader")
.chat(v-else)
  .chat-icon(v-if="isAdmin")
    svg.w-4.h-4.mr-2(@click="lockRoom", fill="white")
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
      :class="m.userID == userID && 'ml-auto'",
      v-for="(m, idx) in messages"
    )
      .fxc
        router-link.message-user(:to="'/user/' + m.userID") {{ m.userName }}
        //- p.text-sm.text-gray-400 {{ new Date(m.id).getDate() }}
        .edit-button(v-if="m.userID == userID")
          svg.mr-2(@click="fixMessage(m)")
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
    counter: 0,
  }),
  computed: {
    getFullRoom() {
      let room;
      this.getOne("rooms/" + this.roomID).then((res) => (room = res));
      return room;
    },
  },
  methods: {
    getMessages() {
      this.isLoading = true;
      const scroll = (id) => {
        const element = document.getElementsByClassName(id);
        element[0].scrollTop = element[0].scrollHeight;
      };
      onValue(ref(db, "rooms/" + this.roomID), (snapshot) => {
        let room = snapshot.val();
        if (room) {
          this.roomInfo = room._info;
          this.isAdmin = Object.keys(room._info.users)[0] == this.userID;
          this.messages = Object.keys(room).map((k) => ({ ...room[k], id: k }));
          this.messages.pop();
        } else {
          this.messages = [{ text: "No messages yet!", user: "Admin" }];
        }
        setTimeout(() => scroll("message-list"), 10);
      });
      this.isLoading = false;
    },
    deleteChat() {
      this.removeOne("rooms/" + this.roomID).then((res) =>
        this.$router.push("/")
      );
    },
    lockRoom() {
      this.updateByKey(`rooms/${this.roomID}`, "_info", {
        private: !this.roomInfo.private,
      });
    },
    handleEnter() {
      this.isEdit && this.text ? this.editMessage() : this.sendMessage();
    },
    sendMessage(
      text = this.text,
      userID = this.userID,
      userName = this.userName
    ) {
      if (this.text) {
        let date = new Date();
        let messageKey = this.add("rooms/" + this.roomID, {
          text,
          userID,
          date,
          userName,
        });
        this.updateByKey("users/" + this.userID + "/messages", messageKey, {
          text,
          userID,
          date,
          userName,
        });
        this.$store.commit("countMessage");
        this.updateByKey("users/", this.userID, {
          count: this.$store.state.user.count,
        });
        this.text = "";
      }
    },
    editMessage() {
      const { userID, id } = this.message;
      this.updateByKey(`rooms/${this.roomID}`, id, { text: this.text });
      this.updateByKey(`users/${userID}/messages`, id, { text: this.text });
      this.text = "";
      this.isEdit = false;
    },
    deleteMessage({ id }) {
      this.removeOne(`rooms/${this.roomID}/${id}`);
    },
    fixMessage(m) {
      this.message = m;
      this.text = m.text;
      this.isEdit = true;
    },
    setRoomName(name) {
      this.updateByKey(`rooms/${this.roomID}`, "_info", { name });
      this.editRoomName = false;
    },
  },
  mounted() {
    this.getMessages();
  },
};
</script>

<style scoped>
.edit-button {
  @apply w-8 h-4 flex ml-2 opacity-0;
}
.chat-icon {
  @apply flex absolute;
}
.message {
  @apply mb-2 bg-m4 text-m1 rounded-xl px-2 py-1 w-[80%];
}
.message:hover .edit-button {
  opacity: 1;
}
.message-text {
  @apply pl-2 break-all;
}
.chat {
  @apply relative;
}
.message-input {
  @apply w-full rounded pl-3 text-m1 break-all;
}
.message-list {
  @apply w-full h-[calc(100vh-95px)] flex flex-col overflow-hidden overflow-y-auto;
}
.message-user {
  @apply py-2 underline text-xs font-bold text-blue-400;
}
</style>