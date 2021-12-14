
const firebaseConfig = {
      apiKey: "AIzaSyDHSrcxy9eS5pZjLyVfBnSquWHdyND3L-0",
      authDomain: "kwitter-89062.firebaseapp.com",
      projectId: "kwitter-89062",
      storageBucket: "kwitter-89062.appspot.com",
      messagingSenderId: "353884953070",
      appId: "1:353884953070:web:5c026fab5c9dc0a76196ff"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
