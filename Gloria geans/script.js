document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform login validation here
    // You can replace the following lines with your actual login logic
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to another page
      window.location.href = "welcome.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  