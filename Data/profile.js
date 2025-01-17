document.getElementById("getProfileBtn").addEventListener("click", async function() {
  // Assuming the token is stored in localStorage (after login)
  const token = localStorage.getItem("authToken"); // Replace with how you're storing the token

  // Make sure the token exists
  if (!token) {
    alert("You must be logged in to view your profile.");
    return;
  }

  try {
    const response = await fetch("https://blog-api.devnerd.store/users/profile", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`, // Add token for authentication
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const profileData = await response.json();
    console.log("User profile data:", profileData);

    // Display the profile data on the page
    document.getElementById("profileUsername").textContent = profileData.username;
    document.getElementById("profileEmail").textContent = profileData.email;
    document.getElementById("profileBio").textContent = profileData.bio;
    document.getElementById("profileImage").src = profileData.profileUrl;

    alert("Profile loaded successfully!");

  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    alert("Failed to load profile. Please try again.");
  }
});
