document.getElementById("createBlogForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
  
    // Get the values from the input fields
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  
    // Create the blog post object
    const blogPost = { title, content };
  
    // Make the API call
    try {
      const response = await fetch("https://blog-api.devnerd.store/create-blog", {
        method: "POST",
        body: JSON.stringify(blogPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // Optionally include authentication token if required
          // "Authorization": "Bearer YOUR_TOKEN_HERE"
        },
      });
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Blog created successfully:", data);
  
      // Example: Show a success message or redirect the user
      alert("Blog created successfully!");
  
    } catch (error) {
      console.error("Blog creation failed:", error.message);
      alert("Blog creation failed. Please check your input and try again.");
    }
  });
  