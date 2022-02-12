
//ADD YOUR FIREBASE LINKS HERE
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id =" +Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}