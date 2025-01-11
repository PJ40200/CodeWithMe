document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password }),
      });
    
      const data = await response.json();
      
      if (response.ok) {
        alert("Log in successful!");
        window.location.href = "../index.html"; // Redirect to dashboard
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred. Please try again.");
    }
  });

  // new user (sign in)
  document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
  
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
  
    const data = await response.json();
    if (response.ok) {
      alert("Registration successful!");
      window.location.href = "../index.html"; // redirect to home page 
    } else {
      alert(`Error: ${data.message}`);
    }
  });
  