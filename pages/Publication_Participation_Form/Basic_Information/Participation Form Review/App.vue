<template>
  <div class="submission-container">
    <h2 class="title">Submission Progress</h2>
    
    <!-- Redesigned Progress Steps - Numbers below the line with labels underneath -->
    <div class="progress-container">
      <div class="progress-bar">
        <!-- Horizontal line -->
        <div class="progress-line"></div>
        
        <!-- Step indicators below the line -->
        <div class="progress-steps">
          <div class="progress-step active">
            <div class="step-number">1</div>
            <div class="step-label">Basic Information</div>
          </div>
          <div class="progress-step active">
            <div class="step-number">2</div>
            <div class="step-label">Documents</div>
          </div>
          <div class="progress-step active">
            <div class="step-number">3</div>
            <div class="step-label">Review</div>
          </div>
        </div>
      </div>
    </div>
    
    <form @submit.prevent="submitForm">
      <!-- Section 1: Applicant Information -->
      <div class="form-section">
        <h3 class="section-title">1. Applicant Information</h3>
        
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            v-model="formData.fullName" 
            class="form-control"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="position">Position/Title</label>
          <input 
            type="text" 
            id="position" 
            v-model="formData.position" 
            class="form-control"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            class="form-control"
            required
          />
        </div>
        
        <!-- Contact Number and Department side by side -->
        <div class="form-row">
          <div class="form-group half">
            <label for="contactNumber">Contact Number</label>
            <input 
              type="tel" 
              id="contactNumber" 
              v-model="formData.contactNumber" 
              class="form-control"
              required
            />
          </div>
          
          <div class="form-group half">
            <label for="department">Department</label>
            <div class="select-wrapper">
              <select 
                id="department" 
                v-model="formData.department" 
                class="form-control"
                required
              >
                <option value="" disabled selected>Select Department</option>
                <option v-for="dept in departments" :key="dept" :value="dept">
                  {{ dept }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Section 2: Event/Public Details -->
      <div class="form-section">
        <h3 class="section-title">2. Event/Public Details</h3>
        
        <div class="form-group">
          <label>Type of Activity</label>
          <div class="radio-group">
            <label class="radio-label">
              <input 
                type="radio" 
                v-model="formData.activityType" 
                value="Research Presentation" 
                name="activityType"
              />
              <span class="radio-custom"></span>
              Research Presentation
            </label>
            
            <label class="radio-label">
              <input 
                type="radio" 
                v-model="formData.activityType" 
                value="Competition" 
                name="activityType"
              />
              <span class="radio-custom"></span>
              Competition
            </label>
            
            <label class="radio-label">
              <input 
                type="radio" 
                v-model="formData.activityType" 
                value="Publication Initiative" 
                name="activityType"
              />
              <span class="radio-custom"></span>
              Publication Submission
            </label>
          </div>
        </div>
        
        <div class="form-group">
          <label for="eventName">Name of Event/Journal</label>
          <input 
            type="text" 
            id="eventName" 
            v-model="formData.eventName" 
            class="form-control"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="eventDetails">Date(s) of Event/Submission Deadline</label>
          <input 
            type="text" 
            id="eventDetails" 
            v-model="formData.eventDetails" 
            class="form-control"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="location">Location(Venue/Online Platform)</label>
          <input 
            type="text" 
            id="location" 
            v-model="formData.location" 
            class="form-control"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="organizer">Organizer/Publisher</label>
          <input 
            type="text" 
            id="organizer" 
            v-model="formData.organizer" 
            class="form-control"
            required
          />
        </div>
      </div>
      
      <!-- Section 3: Project/Research/Publication Information -->
      <div class="form-section">
        <h3 class="section-title">3. Project/Research/Publication Information</h3>
        
        <div class="form-group">
          <label for="projectTitle">Title of Project/Research/Paper</label>
          <input 
            type="text" 
            id="projectTitle" 
            v-model="formData.projectTitle" 
            class="form-control"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="projectDescription">Brief Description of Project/Research/Paper</label>
          <textarea 
            id="projectDescription" 
            v-model="formData.projectDescription" 
            class="form-control textarea"
            rows="4"
            required
          ></textarea>
        </div>
      </div>
      
      <!-- Section 4: Attachments -->
      <div class="form-section">
        <h3 class="section-title">4. Attachments</h3>
        <p class="attachment-note">Event/Publication Guidelines</p>
        
        <div class="attachment-container">
          <div class="file-info">
            <span v-if="selectedFile" class="file-remove" @click="removeFile">✕</span>
            <span>{{ selectedFile ? selectedFile.name : 'Document.pdf' }}</span>
          </div>
          <div class="file-actions">
            <button type="button" class="btn btn-select" @click="triggerFileInput">Check Document</button>
            <button type="button" class="btn btn-upload" @click="uploadFile" :disabled="!selectedFile">Upload</button>
            <input 
              type="file" 
              ref="fileInput" 
              @change="handleFileSelect" 
              style="display: none"
              accept=".pdf,.doc,.docx"
            />
          </div>
        </div>
      </div>
      
      <!-- Form Navigation -->
      <div class="form-navigation">
        <button type="button" class="btn btn-back">Back</button>
        <button type="submit" class="btn btn-submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      departments: [
        'Engineering',
        'Science',
        'Arts',
        'Business',
        'Medicine',
        'Law'
      ],
      selectedFile: null,
      formData: {
        fullName: '',
        position: '',
        email: '',
        contactNumber: '',
        department: '',
        activityType: 'Research Presentation',
        eventName: '',
        eventDetails: '',
        location: '',
        organizer: '',
        projectTitle: '',
        projectDescription: '',
        attachments: []
      }
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    handleFileSelect(event) {
      this.selectedFile = event.target.files[0]
    },
    removeFile() {
      this.selectedFile = null
    },
    uploadFile() {
      if (this.selectedFile) {
        // Here you would typically upload the file to a server
        // For this example, we'll just add it to the attachments array
        this.formData.attachments.push(this.selectedFile)
        alert('File uploaded successfully!')
      }
    },
    submitForm() {
      // Here you would typically submit the form data to a server
      console.log('Form submitted:', this.formData)
      alert('Form submitted successfully!')
    }
  }
}
</script>

<style>
body, html{ 
background-color: #fff;
}
.submission-container {
  max-width: 600px;
    width: 100%;
    margin-top: 2px; /* Move down */
    margin-left: 300px; /* Move right */
}

.title {
  text-align: center;
  color: #FF7892;
  margin-bottom: 20px;
}

/* Redesigned Progress Bar */
.progress-container {
  margin-bottom: 30px;
  padding: 0 20px;
}

.progress-bar {
  position: relative;
  padding-top: 20px; /* Space for the line */
  margin-bottom: 40px;
}

/* Horizontal line */
.progress-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #FF7892;
}

/* Steps container */
.progress-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
}

/* Individual step */
.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 33.33%;
}

/* Number indicator */
.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #FF7892;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 8px;
}

/* Step label */
.step-label {
  font-size: 12px;
  color: #FF7892;
  max-width: 100px;
  text-align: center;
}

/* Form Sections */
.form-section {
  margin-bottom: 30px;
}

.section-title {
  color: #FF7892;
  margin-bottom: 15px;
  font-weight: 500;
}

.form-group {
  margin-bottom: 15px;
}

/* Added for side-by-side layout */
.form-row {
  display: flex;
  gap: 15px;
}

.form-group.half {
  flex: 1;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #FF7892;
  font-size: 14px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ffccd5;
  border-radius: 4px;
  font-size: 14px;
}

.textarea {
  resize: vertical;
  min-height: 100px;
}

/* Select Dropdown */
.select-wrapper {
  position: relative;
}

.select-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #FF7892;
  font-size: 12px;
  pointer-events: none;
}

/* Radio Buttons */
.radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-right: 15px;
  font-size: 14px;
  color: #333;
}

.radio-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-custom {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #fff;
  border: 2px solid #ffccd5;
  border-radius: 50%;
}

.radio-label input:checked ~ .radio-custom::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #FF7892;
}

/* Attachment Section */
.attachment-note {
  font-size: 14px;
  color: #FF7892;
  margin-bottom: 10px;
}

.attachment-container {
  border: 1px solid #ffccd5;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.file-info {
  color: #666;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.file-remove {
  color: #FF7892;
  margin-right: 8px;
  cursor: pointer;
}

.file-actions {
  display: flex;
  gap: 10px;
}

/* Buttons */
.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.btn-select {
  background-color: #fff;
  color: #FF7892;
  border: 1px solid #FF7892;
}

.btn-upload {
  background-color: #FF7892;
  color: white;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Updated to center buttons */
.form-navigation {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
}

.btn-back {
  background-color: #FF7892;
  color: white;
}

.btn-submit {
  background-color: #FF7892;
  color: white;
}
</style>