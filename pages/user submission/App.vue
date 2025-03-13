<template>
  <div class="submission-container">
    <!-- Back button -->
    <button class="back-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Title -->
    <h1 class="title">Submission Progress</h1>

    <!-- Progress bar -->
    <div class="progress-bar">
      <div class="progress-line"></div>
    </div>

    <!-- Progress steps -->
    <div class="progress-steps">
      <div class="step active">
        <div class="step-number">1</div>
        <div class="step-label">Basic Information</div>
      </div>
      <div class="step active">
        <div class="step-number">2</div>
        <div class="step-label">Document</div>
      </div>
      <div class="step active">
        <div class="step-number">3</div>
        <div class="step-label">Documents Checklist</div>
      </div>
      <div class="step active">
        <div class="step-number">4</div>
        <div class="step-label">Review</div>
      </div>
    </div>

    <!-- Form -->
    <form @submit.prevent="submitForm">
      <!-- Title field -->
      <div class="form-group">
        <label for="title">Title</label>
        <input 
          id="title" 
          type="text" 
          v-model="formData.title" 
          placeholder="Enter your research title"
          class="form-input"
        />
      </div>

      <!-- Category field -->
      <div class="form-group">
        <label>Category</label>
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" v-model="formData.category" value="Research" checked />
            <span class="radio-text">Research</span>
          </label>
          <label class="radio-label">
            <input type="radio" v-model="formData.category" value="Project" />
            <span class="radio-text">Project</span>
          </label>
          <label class="radio-label">
            <input type="radio" v-model="formData.category" value="Thesis" />
            <span class="radio-text">Thesis</span>
          </label>
          <label class="radio-label">
            <input type="radio" v-model="formData.category" value="Capstone" />
            <span class="radio-text">Capstone</span>
          </label>
        </div>
      </div>

      <!-- Inventor Information -->
      <div class="inventor-section">
        <h2>Inventor Information</h2>
        
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input 
            id="fullName" 
            type="text" 
            v-model="formData.fullName" 
            placeholder="Enter your full name"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input 
            id="email" 
            type="email" 
            v-model="formData.email" 
            placeholder="Enter your email address"
            class="form-input"
          />
        </div>

        <div class="form-row">
          <div class="form-group half">
            <label for="contactNumber">Contact Number</label>
            <input 
              id="contactNumber" 
              type="tel" 
              v-model="formData.contactNumber" 
              placeholder="Enter your contact number"
              class="form-input"
            />
          </div>

          <div class="form-group half">
            <label for="department">Department</label>
            <div class="select-wrapper">
              <select 
                id="department" 
                v-model="formData.department"
                class="form-input"
              >
                <option value="" disabled selected>Select Department</option>
                <option value="CCS">College of Computer Studies</option>
                <option value="CN">College of Nursing</option>
                <option value="CAH">College of Arts and Humanities</option>
                <option value="CABE">College of Accounting and Business Education</option>
                <option value="CTE">College of Teacher Education</option>
                <option value="CMBS">College of Medical and Biological Sciences</option>
                <option value="CEA">College of Engineering and Architecture</option>
                <option value="CPC">College of Pharmacy and Chemistry</option>
                <option value="CM">College of Music</option>
                <option value="CHEFS">College of Human Environmental Science and Food Studies</option>
              </select>
              <div class="select-arrow"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Document section -->
      <div class="document-section">
        <div class="document-info">
          <span class="document-name">Document.pdf</span>
          <button type="button" class="check-document-btn">Check Document</button>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="action-buttons">
        <button type="button" class="btn btn-back">Back</button>
        <button type="submit" class="btn btn-submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SubmissionProgressForm',
  data() {
    return {
      formData: {
        title: '',
        category: 'Research',
        fullName: '',
        email: '',
        contactNumber: '',
        department: '',
        document: null
      },
      currentStep: 1,
      totalSteps: 4
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData)
      // Add your form submission logic here
    },
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    }
  }
}
</script>

<style scoped>
:root {
  background-color: #1a1a1a;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.submission-container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  font-family: Arial, sans-serif;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: 50%;
}

.back-arrow {
  background: none;
  border: 1px solid #ff8aa5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ff8aa5;
  margin-bottom: 20px;
}

.title {
  text-align: center;
  color: #ff8aa5;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: normal;
}

.progress-bar {
  height: 8px;
  background-color: #ff8aa5;
  border-radius: 4px;
  margin-bottom: 20px;
  position: relative;
}

.progress-line {
  height: 100%;
  background-color: #ff8aa5;
  border-radius: 4px;
  width: 25%;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  text-align: center;
}

.step .step-number {
  width: 36px;
  height: 36px;
  background-color: #ff8aa5;
  border: 2px solid #ff8aa5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-bottom: 8px;
}

.step.active .step-number {
  background-color: #ff8aa5;
  color: white;
}

.step-label {
  font-size: 14px;
  color: #ff8aa5;
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group.half {
  width: 50%;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #ff8aa5;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
}

.form-input:focus {
  border-color: #ff8aa5;
}

.radio-group {
  display: flex;
  gap: 20px;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-label input {
  margin-right: 8px;
  accent-color: #ff8aa5;
}

.inventor-section h2 {
  color: #ff8aa5;
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: normal;
}

.select-wrapper {
  position: relative;
}

.select-arrow {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #ff8aa5;
  font-size: 12px;
  pointer-events: none;
}

.document-section {
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
}

.document-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.document-name {
  font-size: 18px;
  color: #ff8aa5;
}

.check-document-btn {
  background-color: #ff8aa5;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  cursor: pointer;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.btn-back {
  background-color: #ff8aa5;
  color: white;
}

.btn-submit {
  background-color: #ff8aa5;
  color: white;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
  
  .form-group.half {
    width: 100%;
  }
  
  .radio-group {
    flex-direction: column;
    gap: 10px;
  }
}
</style>