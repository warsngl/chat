import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      user: {
        name: '',
        id: '',
        count: 0,
        onlineAt: '',
        rooms: [],
        messages: [],
        room:""
      },
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUserProp(state, { prop, val }) {
      state.user[prop] = val;
    },
    pushUserProps(state, { prop, val }) {
      state.user[prop].push(val);
    },
    countMessage(state){
      state.user.count=state.user.count+1
    }
  },
});
export default store;
