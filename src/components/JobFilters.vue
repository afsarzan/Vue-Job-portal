<script setup>
import { ref, watch, computed, onMounted } from 'vue';

const props = defineProps({
  jobs: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['filtered-jobs']);

// Filter states
const searchQuery = ref('');
const jobType = ref('All');
const salaryRange = ref('All');
const location = ref('All');

// Get unique locations from jobs
const locations = computed(() => {
  const uniqueLocations = new Set(props.jobs.map(job => job.location));
  return ['All', ...Array.from(uniqueLocations)];
});

// Get unique job types from jobs
const jobTypes = computed(() => {
  const uniqueTypes = new Set(props.jobs.map(job => job.type));
  return ['All', ...Array.from(uniqueTypes)];
});

// Salary ranges
const salaryRanges = [
  'All',
  'Under $50K',
  '$50K - $60K',
  '$60K - $70K',
  '$70K - $80K',
  '$80K - $90K',
  '$90K - $100K',
  '$100K - $125K',
  '$125K - $150K',
  '$150K - $175K',
  '$175K - $200K',
  'Over $200K'
];

// Filter jobs based on criteria
const filterJobs = () => {
  let filtered = [...props.jobs];
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(job => 
      job.title.toLowerCase().includes(query) || 
      job.description.toLowerCase().includes(query) ||
      job.company.name.toLowerCase().includes(query)
    );
  }
  
  // Filter by job type
  if (jobType.value !== 'All') {
    filtered = filtered.filter(job => job.type === jobType.value);
  }
  
  // Filter by salary range
  if (salaryRange.value !== 'All') {
    filtered = filtered.filter(job => job.salary === salaryRange.value);
  }
  
  // Filter by location
  if (location.value !== 'All') {
    filtered = filtered.filter(job => job.location === location.value);
  }
  
  emit('filtered-jobs', filtered);
};

// Watch for changes in filter criteria
watch([searchQuery, jobType, salaryRange, location], () => {
  filterJobs();
});

// Initial filter
onMounted(() => {
  filterJobs();
});
</script>

<template>
  <div class="bg-white p-4 rounded-lg shadow-md mb-8 animate-fade-in sticky top-4">
    <h3 class="text-lg font-bold mb-3 text-green-800">Filter Jobs</h3>
    
    <div class="space-y-4">
      <!-- Search -->
      <div>
        <label class="block text-gray-700 font-bold mb-1 text-sm">Search</label>
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search jobs..."
            class="w-full border rounded py-1 px-3 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <i class="pi pi-search absolute left-2 top-2 text-gray-400 text-sm"></i>
        </div>
      </div>
      
      <!-- Job Type -->
      <div>
        <label class="block text-gray-700 font-bold mb-1 text-sm">Job Type</label>
        <select
          v-model="jobType"
          class="w-full border rounded py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option v-for="type in jobTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
      </div>
      
      <!-- Salary Range -->
      <div>
        <label class="block text-gray-700 font-bold mb-1 text-sm">Salary Range</label>
        <select
          v-model="salaryRange"
          class="w-full border rounded py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option v-for="range in salaryRanges" :key="range" :value="range">
            {{ range }}
          </option>
        </select>
      </div>
      
      <!-- Location -->
      <div>
        <label class="block text-gray-700 font-bold mb-1 text-sm">Location</label>
        <select
          v-model="location"
          class="w-full border rounded py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option v-for="loc in locations" :key="loc" :value="loc">
            {{ loc }}
          </option>
        </select>
      </div>
    </div>
    
    <!-- Clear Filters Button -->
    <div class="mt-4">
      <button
        @click="searchQuery = ''; jobType = 'All'; salaryRange = 'All'; location = 'All';"
        class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded text-sm w-full transition-colors duration-300"
      >
        Clear Filters
      </button>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 