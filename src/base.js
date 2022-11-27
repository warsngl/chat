import { db } from './firebase/config';
import {
  update,
  push,
  ref,
  get,
  remove,
} from 'firebase/database';
export default {
  data: () => ({}),
  computed: {
    user() {
      return this.$store.state.user?.name;
    },
    fullUser() {
      return this.$store.state.user;
    },
    room() {
      return this.$route.params?.roomID;
    },
    lsUser:{
      get(){
        return JSON.parse(localStorage.getItem('chat--user')) || null
      },
      set(user){
        localStorage.setItem("chat--user", JSON.stringify(user));
      }
    },
  },
  watch: {},
  methods: {
    getOne(route, opt) {
      return get(ref(db, route)).then((snapshot) => snapshot.val());
    },
    add(route, val) {
      let key = push(ref(db, route), val).key;
      return key;
    },
    getKey(route) {
      return push(ref(db, route)).key;
    },
    updateByKey(route, key, val) {
      update(ref(db, route + '/' + key), val);
    },
    removeOne(route) {
      return remove(ref(db, route));
    },
  },
};
