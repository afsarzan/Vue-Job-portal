<script setup>
import { RouterLink } from 'vue-router';
import JobListing from './JobListing.vue';
import JobFilters from './JobFilters.vue';
import { reactive, defineProps, onMounted, ref } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { getJobs } from '@/utils/localStorage';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  jobs: [],
  isLoading: true,
});

const filteredJobs = ref([]);

const handleFilteredJobs = (jobs) => {
  filteredJobs.value = jobs;
};

onMounted(() => {
  try {
    state.jobs = getJobs();
    filteredJobs.value = state.jobs;
  } catch (error) {
    console.error('Error fetching jobs', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center animate-fade-in">
        Browse Jobs
      </h2>
      
      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Show job filters and listings when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-5 gap-6">
        <!-- Job Listings - Left Side (80%) -->
        <div class="md:col-span-4">
          <!-- No Results Message -->
          <div v-if="filteredJobs.length === 0" class="text-center py-10 animate-fade-in">
            <i class="pi pi-search text-5xl text-gray-400 mb-4"></i>
            <h3 class="text-xl font-bold text-gray-700 mb-2">No Jobs Found</h3>
            <p class="text-gray-500">Try adjusting your filters or search criteria</p>
          </div>
          
          <!-- Job Listings -->
          <div v-else class="grid grid-cols-4 gap-6">
            <div 
              v-for="(job, index) in filteredJobs.slice(0, limit || filteredJobs.length)" 
              :key="job.id"
              class="animate-fade-in"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <JobListing :job="job" />
            </div>
          </div>
        </div>
        
        <!-- Job Filters - Right Side (20%) -->
        <div class="md:col-span-1">
          <JobFilters 
            :jobs="state.jobs" 
            @filtered-jobs="handleFilteredJobs" 
          />
        </div>
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 transition-colors duration-300 animate-fade-in"
      >View All Jobs</RouterLink
    >
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
