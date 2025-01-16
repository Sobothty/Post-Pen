export const navbar = () => {
  return `
    <section class="w-full bg-white py-4 px-12 shadow-md">
        <div class="grid grid-cols-2 lg:flex items-center justify-between">
            <div class="flex items-center space-x-2 lg:w-1/6">
                <a href="Post-Pen/index.html" class="flex items-center space-x-2">
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
                            <div id="search-dropdown" class="absolute right-0 mt-2 w-64 hidden bg-white p-4 border border-gray-200 rounded shadow-lg">
                                <input type="text" placeholder="Search..." class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9067]">
                                <button class="mt-2 bg-[#ff7f50] text-white px-4 py-2 rounded hover:bg-[#FF9067]">Search</button>
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
    `;
};
