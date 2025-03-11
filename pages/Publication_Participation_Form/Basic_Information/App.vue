<template>
  <div class="form-container">
    <h1 class="form-title">Publication Participation Form</h1>

    <!-- Progress Bar -->
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-step active">
          <div class="step-circle">1</div>
          <div class="step-label">Basic Information</div>
        </div>
        <div class="progress-step">
          <div class="step-circle">2</div>
          <div class="step-label">Documents</div>
        </div>
        <div class="progress-step">
          <div class="step-circle">3</div>
          <div class="step-label">Review</div>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <form @submit.prevent="submitForm">
      <!-- Section 1: Applicant Information -->
      <div class="form-section">
        <h2 class="section-title">1. Applicant Information</h2>

        <div class="form-group">
          <label>Full Name</label>
          <input type="text" v-model="formData.fullName" required />
        </div>

        <div class="form-group">
          <label>Position/Title</label>
          <input type="text" v-model="formData.position" required />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="formData.email" required />
        </div>

        <div class="form-row">
          <div class="form-group half">
            <label>Contact Number</label>
            <input type="tel" v-model="formData.contactNumber" required />
          </div>

          <div class="form-group half">
            <label>Department</label>
            <div class="select-wrapper">
              <select v-model="formData.department" required>
                <option value="" disabled selected>Select Department</option>
                <option value="engineering">Engineering</option>
                <option value="science">Science</option>
                <option value="arts">Arts</option>
                <option value="business">Business</option>
                <option value="medicine">Medicine</option>
              </select>
              <div class="select-arrow">▼</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Event/Public Details -->
      <div class="form-section">
        <h2 class="section-title">2. Event/Public Details</h2>

        <div class="form-group">
          <label>Type of Activity</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" v-model="formData.activityType" value="research" />
              <span class="radio-custom"></span>
              Research Presentation
            </label>

            <label class="radio-label">
              <input type="radio" v-model="formData.activityType" value="competition" />
              <span class="radio-custom"></span>
              Competition
            </label>

            <label class="radio-label">
              <input type="radio" v-model="formData.activityType" value="publication" />
              <span class="radio-custom"></span>
              Publication Submission
            </label>
          </div>
        </div>

        <div class="form-group">
          <label>Name of Event/Journal</label>
          <input type="text" v-model="formData.eventName" required />
        </div>

        <div class="form-group">
          <label>Date(s) of Event/Submission Deadline</label>
          <input type="text" v-model="formData.eventDate" required />
        </div>

        <div class="form-group">
          <label>Location (Venue/Online Platform)</label>
          <input type="text" v-model="formData.eventLocation" required />
        </div>

        <div class="form-group">
          <label>Organizer/Publisher</label>
          <input type="text" v-model="formData.organizer" required />
        </div>
      </div>

      <!-- Section 3: Project/Research/Publication Information -->
      <div class="form-section">
        <h2 class="section-title">3. Project/Research/Publication Information</h2>

        <div class="form-group">
          <label>Title of Project/Research/Paper</label>
          <input type="text" v-model="formData.projectTitle" required />
        </div>

        <div class="form-group">
          <label>Brief Description of Project/Research/Paper</label>
          <textarea v-model="formData.projectDescription" rows="5" required></textarea>
        </div>

        <div class="form-group">
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" v-model="formData.ipProtection" value="with" />
              <span class="radio-custom"></span>
              With IP protection
            </label>

            <label class="radio-label">
              <input type="radio" v-model="formData.ipProtection" value="without" />
              <span class="radio-custom"></span>
              Without IP protection
            </label>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="form-buttons">
        <button type="button" class="btn btn-back" @click="goBack">Back</button>
        <button type="button" class="btn btn-next" @click="goNext">Next</button>
      </div>
    </form>
  </div>
  <!-- Back Button -->
  <button class="back-button" @click="goBack">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        // Applicant Information
        fullName: '',
        position: '',
        email: '',
        contactNumber: '',
        department: '',

        // Event/Public Details
        activityType: 'research',
        eventName: '',
        eventDate: '',
        eventLocation: '',
        organizer: '',

        // Project Information
        projectTitle: '',
        projectDescription: '',
        ipProtection: 'with',
      },
      currentStep: 1,
      totalSteps: 3,
    }
  },
  methods: {
    goNext() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++
      } else {
        this.submitForm()
      }
    },
    goBack() {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    },
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.formData)
      // You would typically send this data to a server
    },
  },
}
</script>
