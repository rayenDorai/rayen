document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var password = document.getElementById("password").value;
  
    if (password === "r1x22r36") {
      window.location.href = "https://www.youtube.com/"; // Redirect to success page or do something on successful login
    } else {
      document.getElementById("message").innerText = "Incorrect password. Please try again.";
    }
  });
  
