// Initialize jobs in localStorage if not exists
const initializeJobs = () => {
  if (!localStorage.getItem('jobs')) {
    const initialJobs = [
      {
        "id": "1",
        "title": "Senior Vue Dev",
        "type": "Full-Time",
        "location": "Boston, MA",
        "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as Vue or Angular.",
        "salary": "$90K - $100K",
        "company": {
          "name": "NewTek Solutions",
          "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
          "contactEmail": "contact@teksolutions.com",
          "contactPhone": "555-555-5555"
        }
      }
    ];
    localStorage.setItem('jobs', JSON.stringify(initialJobs));
  }
};

// Get all jobs
const getJobs = () => {
  return JSON.parse(localStorage.getItem('jobs') || '[]');
};

// Get a single job by id
const getJobById = (id) => {
  const jobs = getJobs();
  return jobs.find(job => job.id === id);
};

// Add a new job
const addJob = (job) => {
  const jobs = getJobs();
  const newJob = {
    ...job,
    id: String(Date.now()) // Generate a unique ID
  };
  jobs.push(newJob);
  localStorage.setItem('jobs', JSON.stringify(jobs));
  return newJob;
};

// Update a job
const updateJob = (id, updatedJob) => {
  const jobs = getJobs();
  const index = jobs.findIndex(job => job.id === id);
  if (index !== -1) {
    jobs[index] = { ...jobs[index], ...updatedJob };
    localStorage.setItem('jobs', JSON.stringify(jobs));
    return jobs[index];
  }
  return null;
};

// Delete a job
const deleteJob = (id) => {
  const jobs = getJobs();
  const filteredJobs = jobs.filter(job => job.id !== id);
  localStorage.setItem('jobs', JSON.stringify(filteredJobs));
  return true;
};

// Initialize jobs when the module is imported
initializeJobs();

export {
  getJobs,
  getJobById,
  addJob,
  updateJob,
  deleteJob
}; 