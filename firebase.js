  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
  } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDHtfnZj9kr90KO4VWxK5RbRpjmhLoTwCw",
    authDomain: "crud-js-firebase-78eb2.firebaseapp.com",
    projectId: "crud-js-firebase-78eb2",
    storageBucket: "crud-js-firebase-78eb2.appspot.com",
    messagingSenderId: "49677391776",
    appId: "1:49677391776:web:9ac495388d77c3e9e376c5"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);

  export const db = getFirestore();

  /**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */

  export const saveTask = (title,description)=> 
    addDoc(collection(db, "tasks"), {title, description});
 
    export const onGetTasks = (callback) =>  
  onSnapshot (collection(db, "tasks"),callback);

  export const getTasks = ()=> getDocs(collection(db, "tasks"));


  export const deleteTask = id =>  deleteDoc (doc(db,"tasks", id));

  export const getTask = (id) => getDoc (doc(db,"tasks" , id));

  export const updateTask=( id, newFields) => 
  updateDoc (doc(db,"tasks", id),newFields );