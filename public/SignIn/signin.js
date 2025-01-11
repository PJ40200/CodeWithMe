// Ensure the login box is displayed by default
document.addEventListener("DOMContentLoaded", () => {
  const loginBox = document.getElementById("login-box");
  const signupBox = document.getElementById("signup-box");

  // Display the login form by default
  loginBox.style.display = "block";
  signupBox.style.display = "none";

  // Toggle to signup form
  document.getElementById("show-signup").addEventListener("click", () => {
    loginBox.style.display = "none";
    signupBox.style.display = "block";
  });

  // Toggle back to login form
  document.getElementById("show-login").addEventListener("click", () => {
    signupBox.style.display = "none";
    loginBox.style.display = "block";
  });
});

// Login existing user
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
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Log in successful!");
      localStorage.setItem("authToken", data.token); // Save JWT token
      localStorage.setItem("username", data.username);  // save username
      window.location.href = "../index.html"; // Redirect to the dashboard or home page
    } else {
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    console.error("Login failed:", error);
    alert("An error occurred. Please try again.");
  }
});

// Register new user
document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
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
      localStorage.setItem("authToken", data.token); // Save JWT token
      localStorage.setItem("username", username);  // save username
      window.location.href = "../index.html"; // Redirect to the home page
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Registration failed:", error);
    alert("An error occurred. Please try again.");
  }
});
