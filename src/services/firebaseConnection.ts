
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAfo1wZKbNQ01xqOeFo28vcuv-pbXD7ZQ4",
  authDomain: "todo-project-dfe09.firebaseapp.com",
  projectId: "todo-project-dfe09",
  storageBucket: "todo-project-dfe09.appspot.com",
  messagingSenderId: "956548769891",
  appId: "1:956548769891:web:3ade89d642b819e28d7056"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(fireabaseApp)

export { db };