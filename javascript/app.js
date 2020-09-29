  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8thxtWVnPxHTc0hO18Wa9fnZE8qT-HlQ",
    authDomain: "log-in-50838.firebaseapp.com",
    databaseURL: "https://log-in-50838.firebaseio.com",
    projectId: "log-in-50838",
    storageBucket: "log-in-50838.appspot.com",
    messagingSenderId: "131661123391"
  };
  firebase.initializeApp(config);


  function login(user, pass) {
  
    user = document.getElementById('userField').value;
    pass = document.getElementById('passField').value;
  
    firebase.auth().signInWithEmailAndPassword(user, pass).then(function(user) {
       // user signed in
       window.location.href = "back_end2/band_toon.php";
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
  
        if (errorCode === 'auth/wrong-password') {
            alert('Verkeerde password');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
  }
  

  
  function logout() {
    firebase.auth().signOut();
  }