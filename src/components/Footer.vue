<script setup>
import { RouterLink } from 'vue-router';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Company Info -->
        <div>
          <h3 class="text-2xl font-bold mb-4 text-green-500">Vue Jobs</h3>
          <p class="text-gray-400 mb-4">
            Find your dream job or hire the perfect candidate with our Vue.js job portal.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
              <i class="pi pi-facebook text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
              <i class="pi pi-twitter text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
              <i class="pi pi-linkedin text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
              <i class="pi pi-instagram text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xl font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/jobs" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Browse Jobs
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/jobs/add" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Post a Job
              </RouterLink>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <!-- For Employers -->
        <div>
          <h4 class="text-xl font-semibold mb-4">For Employers</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Post a Job
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Pricing Plans
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Employer Resources
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Employer Blog
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-xl font-semibold mb-4">Contact Us</h4>
          <ul class="space-y-2">
            <li class="flex items-start">
              <i class="pi pi-map-marker text-green-500 mt-1 mr-2"></i>
              <span class="text-gray-400">123 Vue Street, JavaScript City, 12345</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-envelope text-green-500 mt-1 mr-2"></i>
              <span class="text-gray-400">contact@vuejobs.com</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-phone text-green-500 mt-1 mr-2"></i>
              <span class="text-gray-400">+1 (555) 123-4567</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {{ currentYear }} Vue Jobs. All rights reserved.
          </p>
          <div class="flex space-x-4 text-sm">
            <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template> 