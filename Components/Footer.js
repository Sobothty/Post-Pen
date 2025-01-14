export const footer = () => {
    return `
      <section class="w-full block px-10 border border-gray-300 shadow-2xl lg:px-[100px]">
        <div class="flex items-center justify-center gap-4 py-4">
          <img src="../../Asset/Post-Pen-Logo.png" alt="PostPen Logo" alt="PostPen Logo" class="w-8 h-8">
          <h3 class="text-2xl font-medium">PostPen</h3>
        </div>
        <div class="flex justify-center gap-8 py-4">
            <div class="flex items-center gap-2 transition-transform hover:translate-y-[-3px] hover:shadow-lg">
                <i class="fa-brands fa-twitter text-xl text-black" style="color: #1da1f2;"></i>
                <p class="text-base text-gray-800 hidden md:block">Twitter</p>
            </div>
            <div class="flex items-center gap-2 transition-transform hover:translate-y-[-3px] hover:shadow-lg">
                <i class="fa-brands fa-facebook text-xl" style="color: #1877f2;"></i>
                <p class="text-base text-gray-800 hidden md:block">Facebook</p>
            </div>
            <div class="flex items-center gap-2 transition-transform hover:translate-y-[-3px] hover:shadow-lg">
                <i class="fa-brands fa-instagram text-xl text-black" style="color: #e1306c;"></i>
                <p class="text-base text-gray-800 hidden md:block">Instagram</p>
            </div>
        </div>
        <hr class="border border-gray-300">
    
        <!-- Copyright Section -->
        <div class="flex items-center justify-center gap-2 py-4 text-gray-800">
            &#169;
            <p class="text-justify">Copyright 2025, All Rights Reserved by PostPen</p>
        </div>
      </section>
    `;
};