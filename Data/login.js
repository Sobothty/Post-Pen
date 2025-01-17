document.getElementById("loginForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent the form from submitting traditionally

  // Get the values from the input fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Create the login object with the captured values
  const login = { username, password };

  // Make the API call
  try {
    const response = await fetch("https://blog-api.devnerd.store/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Login successful:", data);

    // Example: Show a success message or redirect the user
    alert("Login successful! Welcome, " + data.username);

  } catch (error) {
    console.error("Login failed:", error.message);
    alert("Login failed. Please check your credentials and try again.");
  }
});
