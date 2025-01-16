// /components/card.js
export function Card(data) {
  return `
    <div class="margin-l-f bg-white  mt-6 rounded-t-sm hover:shadow-md h-auto" data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom">
      <div class="grid grid-rows-[auto,auto,1fr,auto] lg:grid-cols-2 lg:grid-rows-[auto,1fr,auto] gap-5 transition duration-300 lg:mx-5 p-4">
        <!-- Profile Section -->
        <div class="flex items-center space-x-4 row-start-1 col-span-full lg:col-start-1 lg:col-end-2">
          <img src="${data.authorImage}" alt="Profile" class="w-9 h-9 rounded-full" />
          <span class="text-black text-2xl font-bold sm:text-base md:text-lg">
            <h2">${data.author}</h2>
          </span>
        </div>

        <!-- Illustration -->
        <div class="relative overflow-hidden rounded-md row-start-2 col-span-full lg:col-start-3 lg:row-start-2 cursor-pointer">
          <img src="${data.illustrationImage}" alt="Illustration"
            class="h-auto w-screen lg:w-[400px] lg:h-[250px] rounded-sm transform transition duration-300 hover:scale-105 object-cover" />
        </div>

        <!-- Title and Content -->
        <div class="flex flex-col row-start-3 col-span-full lg:col-start-1 lg:row-start-2">
          <h2 class="text-xl sm:text-2xl lg:text-3xl line-clamp-2 font-bold text-gray-900 dark:text-black mb-2">
            ${data.title}
          </h2>
          <p class="text-sm sm:text-base text-black mb-4">
            <small class="hover:font-bold">${data.hashtags}</small>
          </p>
          <p class="text-sm sm:text-base line-clamp-2 text-black mb-6">
            ${data.body}
          </p>
          <div class="grid grid-cols-2 text-sm sm:text-base text-black mb-4">
            <!-- Left Icons -->
            <div class="flex items-center space-x-6">
              <button class="flex items-center space-x-2">
                <i class="fas fa-heart"></i>
                <span>${data.likes}</span>
              </button>
              <button class="flex items-center space-x-2">
                <i class="fas fa-comment"></i>
                <span>${data.comments}</span>
              </button>
            </div>
            <!-- Right Icons -->
            <div class="flex justify-end items-center space-x-6">
              <button>
                <i class="fas fa-bookmark"></i>
              </button>
              <button class="px-2 py-1 sm:px-3 sm:py-2">•••</button>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-blue-300">
            <small>Date: ${data.date}</small>
          </p>
        </div>
      </div>
      <!-- Horizontal line at the bottom -->
      <div class="row-start-4 col-span-full">
        <hr class="mt-6 border-gray-300 dark:border-gray-800" />
      </div>
    </div>
  `;
}
