import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyBfcv-5bJPpyvjbMZ8n7duh2jgelUPi-yk",
    authDomain: "ai-task-assignment-system.firebaseapp.com",
    projectId: "ai-task-assignment-system",
    storageBucket: "ai-task-assignment-system.appspot.com",
    messagingSenderId: "619784184790",
    appId: "1:619784184790:web:cd73def2acc3b8dc5bba77",
    measurementId: "G-Q1VGGCMNN0"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

export { database };


