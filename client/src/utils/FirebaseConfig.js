import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyBSFK6RkgorpnxiRrXef5c7YZ3jCzxOHC4",
//     authDomain: "whatsapp-clone-fd4ba.firebaseapp.com",
//     projectId: "whatsapp-clone-fd4ba",
//     storageBucket: "whatsapp-clone-fd4ba.firebasestorage.app",
//     messagingSenderId: "1043063092123",
//     appId: "1:1043063092123:web:4f807d9fdd54fead71673e",
//     measurementId: "G-M17FGXW9B7"
// };

const firebaseConfig = {
  apiKey: "AIzaSyC9u6I2hM08Jx198GXEoacc94NZVI85wZk",
  authDomain: "spengu-demo.firebaseapp.com",
  projectId: "spengu-demo",
  storageBucket: "spengu-demo.firebasestorage.app",
  messagingSenderId: "907129276382",
  appId: "1:907129276382:web:84f065263038705f7ebf4f",
  measurementId: "G-D7PHNVYXTR",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
