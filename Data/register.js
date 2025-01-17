document.getElementById("registerForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the input fields
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const profileUrl = document.getElementById("profileUrl").value;
  const bio = document.getElementById("bio").value;

  // Create the data object to send to the API
  const register = {
    username,
    email,
    password,
    profileUrl,
    bio
  };

  // Make the API call
  try {
    const response = await fetch("https://blog-api.devnerd.store/register", {
      method: "POST",
      body: JSON.stringify(register),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Registration successful:", data);

    alert("Registration successful! Welcome, " + data.username);

  } catch (error) {
    console.error("Registration failed:", error.message);
    alert("Registration failed. Please check your details and try again.");
  }
});
