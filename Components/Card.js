export function Card(data) {
  return `
    <div class="flex justify-center items-center bg-gray-100">
      <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 w-[300px]">
        <!-- Profile Section -->
        <div class="flex items-center p-4 space-x-4">
          <img src="${data.authorImage}" alt="Profile" class="w-10 h-10 rounded-full object-cover" />
          <h2 class="text-lg font-semibold">${data.author}</h2>
        </div>

        <!-- Clickable Illustration to Show Blog Details on Same Page -->
        <div class="relative cursor-pointer" onclick="showBlogDetailPage('${data.title}', '${data.body}', '${data.illustrationImage}', '${data.author}', '${data.authorImage}', '${data.hashtags}', '${data.likes}', '${data.comments}')">
          <img src="${data.illustrationImage}" alt="Illustration" class="w-full h-[200px] object-cover"/>
        </div>

        <!-- Title and Content -->
        <div class="p-4">
          <h2 class="text-lg font-bold mb-2">${data.title}</h2>
          <p class="text-sm text-gray-600 mb-4">${data.body}</p>
          <p class="text-sm text-blue-500 font-medium mb-4">${data.hashtags}</p>

          <!-- Interaction Buttons -->
          <div class="flex justify-between items-center">
            <div class="flex space-x-4">
              <button class="flex items-center space-x-2">
                <i class="fas fa-heart text-red-500"></i>
                <span>${data.likes}</span>
              </button>
              <button class="flex items-center space-x-2">
                <i class="fas fa-comment text-blue-500"></i>
                <span>${data.comments}</span>
              </button>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <i class="fas fa-bookmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
function showBlogDetailPage(
  title,
  body,
  illustrationImage,
  author,
  authorImage,
  hashtags,
  likes,
  comments
) {
  // Update the blog details section with the clicked post data
  const blogDetailSection = document.getElementById("blog-detail-section");

  blogDetailSection.innerHTML = `
    <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <!-- Post Header -->
        <div class="flex items-center space-x-4 mb-4">
            <img src="${authorImage}" alt="User Avatar" class="w-12 h-12 rounded-full">
            <div>
                <h1 class="text-xl font-bold hover:bg-gray-100">${title}</h1>
                <p class="text-gray-500">@${author}</p>
            </div>
        </div>

        <!-- Image and Content -->
        <img src="${illustrationImage}" alt="Blog Image" class="w-full rounded-lg mb-4">
        
        <p class="text-gray-700 text-sm">${body}</p>

        <!-- Reactions -->
        <div class="flex items-center justify-between mt-4">
            <div class="flex space-x-4">
                <button type="submit" >❤️</button><span> ${likes}</span>
                <span>💬 ${comments} Comments</span>
            </div>
        </div>

        <!-- Comments Section -->
        <div class="mt-6">
            <h3 class="text-lg font-semibold">${comments} Comments</h3>

            <!-- Comment Input -->
            <div class="mt-6">
                <input type="text" placeholder="Write a comment..." class="w-full p-3 border border-gray-300 rounded-lg">
            </div>
        </div>
    </div>
  `;
}
