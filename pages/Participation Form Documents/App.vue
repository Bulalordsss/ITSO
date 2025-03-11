<template>
  <div class="submission-form">
    <!-- Main Content -->
    <main class="main-content">
      <!-- Progress Section -->
      <div class="progress-section">
        <h2 class="section-title">Submission Progress</h2>
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progressWidth + '%' }"></div>
          </div>
          <div class="progress-steps">
            <div 
              v-for="(step, index) in steps" 
              :key="index" 
              class="step" 
              :class="{ active: currentStep >= index }"
            >
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-label">{{ step }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Attachments Section -->
      <div class="attachments-section">
        <h3 class="section-title">5. Attachments</h3>
        
        <div v-for="(doc, index) in documents" :key="index" class="document-upload">
          <h4 class="document-title">{{ doc.title }}</h4>
          <div class="document-container">
            <div class="document-info">
              <p class="upload-text">{{ doc.file ? doc.file.name : 'Upload Document' }}</p>
              <p class="file-info">Only PDF files are accepted</p>
            </div>
            <div class="document-actions">
              <button 
                v-if="doc.actions.includes('check')" 
                class="btn btn-check" 
                @click="checkDocument(index)"
                :disabled="doc.checking"
              >
                {{ doc.checking ? 'Checking...' : 'Check Document' }}
              </button>
              <button 
                v-if="doc.actions.includes('view')" 
                class="btn btn-view" 
                @click="viewDocument(doc.viewType)"
              >
                {{ doc.viewType === 'sample' ? 'View Sample Format' : 'View Document' }}
              </button>
              <button 
                class="btn btn-upload" 
                @click="triggerFileUpload(index)"
                :disabled="doc.uploading"
              >
                {{ doc.uploading ? 'Uploading...' : 'Upload' }}
              </button>
              <input 
                type="file" 
                ref="fileInputs" 
                :id="'file-input-' + index" 
                accept=".pdf" 
                class="hidden-input" 
                @change="handleFileUpload($event, index)"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="navigation">
        <button 
          class="btn btn-nav" 
          @click="goBack" 
          :disabled="currentStep === 0"
        >
          Back
        </button>
        <button 
          class="btn btn-nav" 
          @click="goNext" 
          :disabled="currentStep === steps.length - 1"
        >
          Next
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'SubmissionForm',
  data() {
    return {
      currentStep: 0,
      steps: ['Basic Information', 'Documents', 'Review'],
      documents: [
        {
          title: 'Event/Publication Guidelines',
          actions: ['check'],
          file: null,
          uploading: false,
          checking: false,
          viewType: null
        },
        {
          title: 'Documents',
          actions: ['check'],
          file: null,
          uploading: false,
          checking: false,
          viewType: null
        },
        {
          title: 'Request Document',
          actions: ['view'],
          file: null,
          uploading: false,
          checking: false,
          viewType: 'sample'
        },
        {
          title: 'Additional Document (if necessary)',
          actions: ['view'],
          file: null,
          uploading: false,
          checking: false,
          viewType: 'document'
        }
      ]
    };
  },
  computed: {
    progressWidth() {
      return ((this.currentStep + 1) / this.steps.length) * 100;
    }
  },
  methods: {
    goBack() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    goNext() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    triggerFileUpload(index) {
      // Use the DOM to trigger the file input click
      document.getElementById(`file-input-${index}`).click();
    },
    handleFileUpload(event, index) {
      const file = event.target.files[0];
      
      if (!file) return;
      
      // Check if file is PDF
      if (file.type !== 'application/pdf') {
        alert('Only PDF files are accepted');
        return;
      }
      
      // Set uploading state
      this.documents[index].uploading = true;
      
      // Simulate upload delay
      setTimeout(() => {
        this.documents[index].file = file;
        this.documents[index].uploading = false;
        
        // Reset file input
        event.target.value = '';
      }, 1500);
    },
    checkDocument(index) {
      this.documents[index].checking = true;
      
      // Simulate checking delay
      setTimeout(() => {
        this.documents[index].checking = false;
        alert('Document checked successfully!');
      }, 1000);
    },
    viewDocument(type) {
      if (type === 'sample') {
        alert('This would open the sample format document in a real application.');
      } else {
        alert('This would open the document in a real application.');
      }
    }
  }
};
</script>