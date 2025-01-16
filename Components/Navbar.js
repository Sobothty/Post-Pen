export const navbar = () => {
  return `
    <section class="w-full bg-white py-4 px-12 shadow-md">
        <div class="grid grid-cols-2 lg:flex items-center justify-between">
            <div class="flex items-center space-x-2 lg:w-1/6">
                <a href="index.html" class="flex items-center space-x-2">
                    <img src="../../Asset/Post-Pen-Logo.png" alt="PostPen Logo" alt="PostPen" class="w-8 h-8">
                    <h3 class="text-2xl font-medium">PostPen</h3>
                </a>
            </div>
                <!-- burger Menu Button for Small Screens -->
                <button onclick="toggleMobileMenu()" class="justify-self-end block lg:hidden focus:outline-none">
                    &#9776;
                </button>
                <!-- Navigation Menu for Desktop -->
                <nav class="w-4/6">
                    <ul class="hidden lg:flex justify-between items-center">
                        <div class="flex gap-10">
                            <li><a href="about.html" class="hover:text-[#FF9067]">About</a></li>
                            <!-- Dropdown: Education -->
                            <li class="relative">
                                <button onclick="toggleDropdown('education-dropdown')" class=" hover:text-[#FF9067] flex items-center gap-2">
                                    Education <i class="fa-solid fa-caret-down"></i>
                                </button>
                                <ul id="education-dropdown" class="absolute left-0 mt-2 w-48 p-2 bg-white border border-gray-200 rounded shadow-lg hidden">
                                    <li><a href="general.html" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF]"><i class="fa-solid fa-book"></i>General</a></li>
                                    <li><a href="soft-skill.html" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF]"><i class="fa-solid fa-code-branch"></i>Soft-skills</a></li>
                                </ul>
                            </li>
                            <!-- Dropdown: Technology -->
                            <li class="relative">
                                <button onclick="toggleDropdown('technology-dropdown')" class="hover:text-[#FF9067] flex items-center gap-2">
                                    Technology <i class="fa-solid fa-caret-down"></i>
                                </button>
                                <ul id="technology-dropdown" class="absolute left-0 mt-2 w-48 p-2 bg-white border border-gray-200 rounded shadow-lg hidden">
                                    <li><a href="ai.html" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF]"><i class="fa-solid fa-hexagon-nodes"></i>AI</a></li>
                                    <li><a href="newtech.html" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF]"><i class="fa-solid fa-code-branch"></i>New Technology</a></li>
                                </ul>
                            </li>
                        </div>
                        <div class="flex items-center gap-4">
                            <!-- Search Icon with Dropdown -->
                            <li class="relative">
                            <button onclick="toggleDropdown('search-dropdown')" class="hover:text-[#FF9067]">
                                <i style="font-size: 23px" class="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <!-- Search Input Dropdown for Desktop -->

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

                            
                            </li>
                            <li><a href="#"><i style="font-size: 23px" class="hover:text-[#FF9067] fa-solid fa-sun"></i></a></li>
                            <li>
                                <a href="login.html" class="bg-[#ff7f50] text-white px-4 py-2 rounded hover:bg-[#FF9067] flex items-center gap-2">
                                    Sign Up <i class="fa-solid fa-right-to-bracket"></i>
                                </a>
                            </li>
                        </div>
                    </ul>
                    <!-- Mobile Menu -->
                    <ul id="mobile-menu" class="absolute top-16 left-0 w-full bg-white p-4 shadow-md hidden lg:hidden">
                        <li><a href="about.html" class="hover:text-[#FF9067] block py-2">About</a></li>
                        <li>
                            <button onclick="toggleDropdown('mobile-education-dropdown')" class=" hover:text-[#FF9067] flex items-center gap-2 w-full py-2">
                                Education <i class="fa-solid fa-caret-down"></i>
                            </button>
                            <ul id="mobile-education-dropdown" class="hidden w-full mt-2 p-2 bg-white border border-gray-200 rounded shadow-lg">
                                <li><a href="general.html" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF]"><i class="fa-solid fa-book"></i>General</a></li>
                                <li><a href="soft-skill.html" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF]"><i class="fa-solid fa-code-branch"></i>Soft-skills</a></li>
                            </ul>
                        </li>
                        <li>
                            <button onclick="toggleDropdown('mobile-technology-dropdown')" class="hover:text-[#FF9067] flex items-center gap-2 w-full py-2">
                                Technology <i class="fa-solid fa-caret-down"></i>
                            </button>
                            <ul id="mobile-technology-dropdown" class="hidden w-full mt-2 p-2 bg-white border border-gray-200 rounded shadow-lg">
                                <li><a href="ai.html" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF]"><i class="fa-solid fa-hexagon-nodes"></i>AI</a></li>
                                <li><a href="newtech.html" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF]"><i class="fa-solid fa-code-branch"></i>New Technology</a></li>
                            </ul>
                        </li>
                        <!-- Mobile Search Input -->
                        <li class="flex items-center py-2">
                            <input type="text" placeholder="Search..." class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9067]">
                            <button class="ml-2 bg-[#ff7f50] text-white px-4 py-2 rounded hover:bg-[#FF9067]">Search</button>
                        </li>



                        <li>
                            <a href="login.html" class="bg-[#ff7f50] text-white px-4 py-2 rounded hover:bg-[#FF9067] flex items-center gap-2">
                                Sign Up <i class="fa-solid fa-right-to-bracket"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>

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
