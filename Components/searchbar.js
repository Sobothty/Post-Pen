export const searchbar = () => {
  return `
      <div class="relative">
      <!-- Search Button -->
      <button
        id="searchButton"
        class="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600 transition"
        onclick="toggleSearchBar()"
      >
        <!-- Search Icon -->
        <i class="fa-solid fa-magnifying-glass"></i>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 3a7.5 7.5 0 010 15z"
          />
        </svg>
      </button>

      <!-- Dropdown Search Bar -->
      <div
        id="searchDropdown"
        class="absolute top-full mt-2 w-96 bg-white rounded-lg shadow-lg hidden z-10"
      >
        <!-- Search Input -->
        <div class="p-4 border-b">
          <input
            id="searchInput"
            type="text"
            placeholder="Search"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            oninput="filterSuggestions()"
          />
        </div>
        <!-- Suggested Items -->
        <ul id="suggestionsList" class="py-2">
          <!-- Dynamically added suggestions will appear here -->
        </ul>
        <!-- Clear History -->
        <div class="p-4 border-t">
          <button
            class="text-red-500 flex items-center gap-2 hover:underline"
            onclick="clearSearchHistory()"
          >
            <!-- Trash Icon -->
            <i class="fa-solid fa-trash-can" style="color: #f43434;"></i>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.137 21H7.863a2 2 0 01-1.996-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m4 0H5"
              />
            </svg>
            Clear History
          </button>
        </div>
      </div>
    </div>

    <script>
      const suggestionsData = [
        "Technology",
        "Education",
        "Sport",
        "HTML",
        "JavaScript",
        "React.js",
        "Node.js",
        "CSS",
        "Web Development",
        "Programming",
      ];

      const searchDropdown = document.getElementById("searchDropdown");
      const searchInput = document.getElementById("searchInput");
      const suggestionsList = document.getElementById("suggestionsList");

      
      function toggleSearchBar() {
        if (searchDropdown.classList.contains("hidden")) {
          searchDropdown.classList.remove("hidden");
          searchInput.focus();
          filterSuggestions(); 
        } else {
          searchDropdown.classList.add("hidden");
        }
      }

  
      function filterSuggestions() {
        const inputValue = searchInput.value.toLowerCase();
        suggestionsList.innerHTML = ""; 

      
        const filteredSuggestions = suggestionsData.filter((item) =>
          item.toLowerCase().includes(inputValue)
        );if (filteredSuggestions.length > 0) {
          filteredSuggestions.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            li.className = "px-4 py-2 hover:bg-gray-100 cursor-pointer";
            li.onclick = () => selectSuggestion(item);
            suggestionsList.appendChild(li);
          });
        } else {
          const noResult = document.createElement("li");
          noResult.textContent = "No results found";
          noResult.className = "px-4 py-2 text-gray-500";
          suggestionsList.appendChild(noResult);
        }
      }

    
      function selectSuggestion(item) {
        searchInput.value = item;
        searchDropdown.classList.add("hidden"); 
      }

    
      function clearSearchHistory() {
        alert("Search history cleared!");
        searchInput.value = "";
        filterSuggestions();
      }

    
      document.addEventListener("click", (event) => {
        if (
          !event.target.closest("#searchButton") &&
          !event.target.closest("#searchDropdown")
        ) {
          searchDropdown.classList.add("hidden");
        }
      });
    </script>
      `;
};
