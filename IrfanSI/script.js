// Initialize Firebase (ADD YOUR OWN DATA)
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOFJrGIH8kmB5IccLY13IrVZRKHO8Hoo4",
    authDomain: "peti-projektni-zadatak.firebaseapp.com",
    databaseURL:"https://peti-projektni-zadatak-default-rtdb.firebaseio.com",
    projectId: "peti-projektni-zadatak",
    storageBucket: "peti-projektni-zadatak.appspot.com",
    messagingSenderId: "1057506320280",
    appId: "1:1057506320280:web:cced0077fedcae16ea15ed",
    measurementId: "G-FCYC81MSYE"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }