
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCmNBaC4ObmlYB9sePFZG-bZ974BrumuD0",
    authDomain: "kwitter-9962a.firebaseapp.com",
    databaseURL: "https://kwitter-9962a-default-rtdb.firebaseio.com",
    projectId: "kwitter-9962a",
    storageBucket: "kwitter-9962a.appspot.com",
    messagingSenderId: "441319650719",
    appId: "1:441319650719:web:23807eac98560970ef79aa"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}