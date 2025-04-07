<script setup>
import { RouterLink } from 'vue-router';
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const showFullDescription = ref(false);

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

const truncatedDescription = computed(() => {
  let description = props.job.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...';
  }
  return description;
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
    <div class="p-6">
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-300">
          <RouterLink :to="`/jobs/${job.id}`">{{ job.title }}</RouterLink>
        </h3>
        <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {{ job.type }}
        </span>
      </div>
      
      <div class="flex items-center text-gray-600 mb-4">
        <i class="pi pi-map-marker text-orange-500 mr-2"></i>
        <span>{{ job.location }}</span>
      </div>
      
      <p class="text-gray-600 mb-4 line-clamp-3">{{ job.description }}</p>
      
      <div class="flex justify-between items-center">
        <div class="text-green-700 font-semibold">{{ job.salary }}</div>
        <RouterLink
          :to="`/jobs/${job.id}`"
          class="bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          View Details
        </RouterLink>
      </div>
    </div>
    
    <div class="bg-gray-50 px-6 py-3 border-t border-gray-100">
      <div class="flex items-center">
        <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
          <span class="text-green-800 font-bold text-sm">{{ job.company.name.charAt(0) }}</span>
        </div>
        <div>
          <div class="text-sm font-semibold text-gray-800">{{ job.company.name }}</div>
          <div class="text-xs text-gray-500">{{ job.company.contactEmail }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
