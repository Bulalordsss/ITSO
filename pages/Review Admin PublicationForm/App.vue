<template>
  <div class="max-w-3xl w-full">
    <!-- Back Arrow -->
    <div class="mb-6">
      <a href="#" class="inline-flex items-center text-pink-500 hover:text-pink-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="m15 18-6-6 6-6"></path></svg>
      </a>
    </div>

    <!-- Form Title -->
    <h1 class="text-pink-500 text-lg mb-6">Request for competition, presentation, or publication Application</h1>

    <form @submit.prevent="submitForm">
      <!-- 1. Applicant Information -->
      <div class="mb-6">
        <h2 class="text-gray-700 mb-4">1. Applicant Information</h2>
        
        <div class="space-y-4">
          <div>
            <label class="text-sm text-pink-500">Full Name</label>
            <input 
              v-model="formData.fullName" 
              type="text" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label class="text-sm text-pink-500">Position/Title</label>
            <input 
              v-model="formData.position" 
              type="text" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your position or title"
              required
            />
          </div>

          <div>
            <label class="text-sm text-pink-500">Email</label>
            <input 
              v-model="formData.email" 
              type="email" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-sm text-pink-500">Contact Number</label>
              <input 
                v-model="formData.contactNumber" 
                type="text" 
                class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your contact number"
                required
              />
            </div>
            <div>
              <label class="text-sm text-pink-500">Department</label>
              <div class="relative">
                <select 
                  v-model="formData.department" 
                  class="w-full border rounded-lg p-3 appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="" disabled selected>Select department</option>
                  <option value="CCS">CCS</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business">Business</option>
                  <option value="Arts">Arts</option>
                  <option value="Science">Science</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg class="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Event/Public Details -->
      <div class="mb-6">
        <h2 class="text-gray-700 mb-4">2. Event/Public Details</h2>
        
        <div class="space-y-4">
          <div>
            <label class="text-sm text-pink-500">Type of Activity</label>
            <div class="border rounded-lg p-3 bg-white">
              <div class="flex flex-wrap gap-6">
                <label class="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    v-model="formData.activityType" 
                    value="Research Presentation" 
                    class="hidden"
                    required
                  />
                  <div class="w-4 h-4 rounded-full border border-gray-300 mr-2 flex items-center justify-center" :class="{'bg-pink-500': formData.activityType === 'Research Presentation'}">
                    <div v-if="formData.activityType === 'Research Presentation'" class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span>Research Presentation</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    v-model="formData.activityType" 
                    value="Competition" 
                    class="hidden"
                  />
                  <div class="w-4 h-4 rounded-full border border-gray-300 mr-2 flex items-center justify-center" :class="{'bg-pink-500': formData.activityType === 'Competition'}">
                    <div v-if="formData.activityType === 'Competition'" class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span>Competition</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    v-model="formData.activityType" 
                    value="Publication Submission" 
                    class="hidden"
                  />
                  <div class="w-4 h-4 rounded-full border border-gray-300 mr-2 flex items-center justify-center" :class="{'bg-pink-500': formData.activityType === 'Publication Submission'}">
                    <div v-if="formData.activityType === 'Publication Submission'" class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span>Publication Submission</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label class="text-sm text-pink-500">Name of Event/Journal</label>
            <input 
              v-model="formData.eventName" 
              type="text" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter event or journal name"
              required
            />
          </div>

          <div>
            <label class="text-sm text-pink-500">Date(s) of Event/Submission Deadline</label>
            <input 
              v-model="formData.eventDate" 
              type="date" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label class="text-sm text-pink-500">Location (Venue/Online Platform)</label>
            <input 
              v-model="formData.location" 
              type="text" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter location or platform"
              required
            />
          </div>

          <div>
            <label class="text-sm text-pink-500">Organizer/Publisher</label>
            <input 
              v-model="formData.organizer" 
              type="text" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter organizer or publisher name"
              required
            />
          </div>
        </div>
      </div>

      <!-- 3. Project/Research/Publication Information -->
      <div class="mb-6">
        <h2 class="text-gray-700 mb-4">3. Project/Research/Publication Information</h2>
        
        <div class="space-y-4">
          <div>
            <label class="text-sm text-pink-500">Title of Project/Research/Paper</label>
            <input 
              v-model="formData.projectTitle" 
              type="text" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter project title"
              required
            />
          </div>

          <div>
            <label class="text-sm text-pink-500">Brief Description of Project/Research/Paper</label>
            <textarea 
              v-model="formData.projectDescription" 
              class="w-full border rounded-lg p-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter a brief description of your project"
              required
            ></textarea>
          </div>

          <div class="border rounded-lg p-3 bg-white">
            <div class="flex flex-wrap gap-6">
              <label class="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  v-model="formData.ipProtection" 
                  value="With IP protection" 
                  class="hidden"
                  required
                />
                <div class="w-4 h-4 rounded-full border border-gray-300 mr-2 flex items-center justify-center" :class="{'bg-pink-500': formData.ipProtection === 'With IP protection'}">
                  <div v-if="formData.ipProtection === 'With IP protection'" class="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span>With IP protection</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  v-model="formData.ipProtection" 
                  value="Without IP protection" 
                  class="hidden"
                />
                <div class="w-4 h-4 rounded-full border border-gray-300 mr-2 flex items-center justify-center" :class="{'bg-pink-500': formData.ipProtection === 'Without IP protection'}">
                  <div v-if="formData.ipProtection === 'Without IP protection'" class="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span>Without IP protection</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- 5. Attachments -->
      <div class="mb-6">
        <h2 class="text-gray-700 mb-4">5. Attachments</h2>
        <p class="text-sm text-pink-500 mb-2">Event/Publication Guidelines</p>
        <div class="border rounded-lg p-4 bg-white flex items-center justify-between">
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="documentCheck"
              v-model="formData.documentSelected"
              class="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
            />
            <label for="documentCheck" class="ml-2 text-pink-500">Document.pdf</label>
          </div>
          <button 
            type="button"
            @click="viewDocument"
            class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            View Document
          </button>
        </div>
      </div>

      <!-- 6. Review -->
      <div class="mb-6">
        <h2 class="text-gray-700 mb-4">6. Review</h2>
        <div class="space-y-4">
          <div class="border rounded-lg p-3 bg-white">
            <div class="flex flex-wrap gap-6">
              <label class="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  v-model="formData.reviewStatus" 
                  value="Endorsed" 
                  class="hidden"
                  required
                />
                <div class="w-4 h-4 rounded-full border border-gray-300 mr-2 flex items-center justify-center" :class="{'bg-pink-500': formData.reviewStatus === 'Endorsed'}">
                  <div v-if="formData.reviewStatus === 'Endorsed'" class="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span>Endorsed</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  v-model="formData.reviewStatus" 
                  value="Not Endorsed" 
                  class="hidden"
                />
                <div class="w-4 h-4 rounded-full border border-gray-300 mr-2 flex items-center justify-center" :class="{'bg-pink-500': formData.reviewStatus === 'Not Endorsed'}">
                  <div v-if="formData.reviewStatus === 'Not Endorsed'" class="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span>Not Endorsed</span>
              </label>
            </div>
          </div>
          
          <div>
            <p class="text-sm text-pink-500 mb-2">Research/IP not endorsed</p>
            <textarea 
              v-model="formData.reviewNotes" 
              class="w-full border rounded-lg p-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter review notes..."
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-center gap-4 mt-6">
        <button 
          type="button"
          class="px-6 py-1.5 bg-pink-500 hover:bg-pink-600 text-white rounded-md text-sm font-medium"
        >
          Back
        </button>
        <button 
          type="submit"
          class="px-6 py-1.5 bg-pink-500 hover:bg-pink-600 text-white rounded-md text-sm font-medium"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// Form data
const formData = reactive({
  fullName: '',
  position: '',
  email: '',
  contactNumber: '',
  department: '',
  activityType: '',
  eventName: '',
  eventDate: '',
  location: '',
  organizer: '',
  projectTitle: '',
  projectDescription: '',
  ipProtection: '',
  documentSelected: false,
  reviewStatus: '',
  reviewNotes: ''
});

// View document
const viewDocument = () => {
  // Handle document viewing logic
  alert('Opening document viewer...');
};

// Submit form
const submitForm = () => {
  console.log('Form submitted:', formData);
  alert('Form submitted successfully!');
};
</script>

<style scoped>
/* Custom checkbox styles */

input[type="checkbox"] {
  accent-color: #f472b6;
}

/* Smaller buttons */
button {
  transition: all 0.2s ease;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-pink-500 {
  color: #f472b6;
}

.bg-pink-500 {
  background-color: #f472b6;
}

.border-pink-500 {
  border-color: #f472b6;
}

.hover\:bg-pink-600:hover {
  background-color: #db2777;
}

/* Focus styles for inputs */
.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-pink-500:focus {
  --tw-ring-color: #f472b6;
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

/* Add smooth transitions */
button, input, select, textarea {
  transition: all 0.2s ease;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.5) sepia(1) saturate(5) hue-rotate(300deg);
}
/* Custom checkbox styles */
input[type="checkbox"] {
  accent-color: #f08383;
}

/* Smaller buttons */
button {
  transition: all 0.2s ease;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-pink-500 {
  color: #f472b6;
}

.bg-pink-500 {
  background-color: #f472b6;
}

.border-pink-500 {
  border-color: #f472b6;
}

.hover\:bg-pink-600:hover {
  background-color: #db2777;
}

.hover\:bg-pink-50:hover {
  background-color: #fdf2f8;
}

/* Focus styles for inputs */
.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-pink-500:focus {
  --tw-ring-color: #f472b6;
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

/* Add smooth transitions */
button, input, select, textarea {
  transition: all 0.2s ease;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.5) sepia(1) saturate(5) hue-rotate(300deg);
}


.max-w-3xl {
  max-width: 48rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.p-4 {
  padding: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.h-4 {
  height: 1rem;
}

.h-5 {
  height: 1.25rem;
}

.w-4 {
  width: 1rem;
}

.w-5 {
  width: 1.25rem;
}

.w-full {
  width: 100%;
}

.min-h-\[100px\] {
  min-height: 100px;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-4 {
  gap: 1rem;
}

.gap-6 {
  gap: 1.5rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded {
  border-radius: 0.25rem;
}

.border {
  border-width: 1px;
}

.border-gray-300 {
  border-color: #d1d5db;
}

.bg-white {
  background-color: #ffffff;
}

.p-3 {
  padding: 0.75rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-1\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.font-medium {
  font-weight: 500;
}

.text-gray-700 {
  color: #374151;
}

.text-white {
  color: #ffffff;
}

.appearance-none {
  appearance: none;
}

.cursor-pointer {
  cursor: pointer;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.inset-y-0 {
  top: 0;
  bottom: 0;
}

.right-0 {
  right: 0;
}

.pointer-events-none {
  pointer-events: none;
}

</style>