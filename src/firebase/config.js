import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyD8pkb9OsLYohxINl6WKVf5G9VjgFDKRHo",
  authDomain: "a-little-chat.firebaseapp.com",
  databaseURL: "https://a-little-chat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "a-little-chat",
  storageBucket: "a-little-chat.appspot.com",
  messagingSenderId: "191360084622",
  appId: "1:191360084622:web:cc0b9e3dd41a09879377df"
};

const app = initializeApp(firebaseConfig);
const db=getDatabase()
export {db}