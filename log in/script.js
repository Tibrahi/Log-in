function login() {
    // Get the values of the username and password fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the username and password are correct
    if (username === "admin" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  }
  