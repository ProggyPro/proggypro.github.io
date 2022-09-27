window.onload = function() {
    // Initialize the firebase project
    var config = {
        apiKey: "AIzaSyBjjbdAXbDII5nAlT80jAqfNvJN6uqfCSk",
        authDomain: "firebasics-a513a.firebaseapp.com",
        databaseURL: "https://firebasics-a513a-default-rtdb.firebaseio.com",
        projectId: "firebasics-a513a",
        storageBucket: "firebasics-a513a.appspot.com",
        messagingSenderId: "540478333952",
        appId: "1:540478333952:web:125cc9106962b88be364e5",
        measurementId: "G-GMVR1K1GYX"
    };
    firebase.initializeApp(config);

    // Initialize the firestore database
    var db = firebase.firestore();

    // Get the first item from the collection "test"
    db.collection("test").doc("EuquIyNp3f35unkoZuu9").onSnapshot(function(doc) {
        document.getElementById("hello").innerHTML = doc.data().text;
    });
}