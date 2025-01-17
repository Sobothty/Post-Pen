async function fetchApi() {
    const response = await fetch(
      "https://blog-api.devnerd.store/blogs?page_size=11&page=1&sort_by=created_at"
    );
    const data = await response.json();

    const blogContent = data.blogs
      .map(
        (blog) => `
        <div>
          <h2>${blog.title}</h2>
          <p>${blog.content}</p>
          <small>Author: ${blog.author}</small><br/>
          <small>Published on: ${blog.created_at}</small>
        </div>
      `
      )

    document.getElementById("data-container").innerHTML = blogContent;
  }

  fetchApi();
