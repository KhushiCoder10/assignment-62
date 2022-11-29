import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCfakPfvMU8zURTpsjWBX9QfvLQyO48TMw",
  authDomain: "assignment-60.firebaseapp.com",
  databaseURL: "https://assignment-60-default-rtdb.firebaseio.com",
  projectId: "assignment-60",
  storageBucket: "assignment-60.appspot.com",
  messagingSenderId: "98115752263",
  appId: "1:98115752263:web:96c5571bef4fae3318fc62"
};

  firebase.initializeApp(firebaseConfig)


export default firebase.database()
 

  