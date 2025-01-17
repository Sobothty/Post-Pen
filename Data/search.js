async function fetchAllData() {
    let allBlogs = [];
    let page = 1;
    let check = true;

    try {
      while (check) {
        const response = await fetch(
          `https://blog-api.devnerd.store/blogs?page_size=11&page=${page}&sort_by=created_at`
        );
        const { blogs } = await response.json();

        if (blogs.length === 0) {
          check = false;
        } else {
          allBlogs = allBlogs.concat(blogs);
          page++; 
        }
      }

      let searchInput = document
        .getElementById("myInput")
        .value.trim()
        .toLowerCase();

      let filteredBlogs = allBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchInput)
      );

      let dataContainer = document.getElementById("data-container");
      if (filteredBlogs.length > 0) {
        dataContainer.innerHTML = filteredBlogs
          .map((blog) => `<div>${blog.title}</div>`)
          .join("-------------------");
      } else {
        dataContainer.innerHTML = `<div>No matching results found.</div>`;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      let dataContainer = document.getElementById("data-container");
      dataContainer.innerHTML = `<div>Error fetching data: ${error.message}</div>`;
    }
  }
  fetchAllData();
