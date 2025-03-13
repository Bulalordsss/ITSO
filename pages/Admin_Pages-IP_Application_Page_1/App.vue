<template>
  <div class="ip-protection-container">
    <h1 class="main-title">IP Protection Application</h1>
    
    <div class="form-section">
      <label class="section-label">Title</label>
      <input 
        type="text" 
        class="form-input" 
        v-model="formData.title" 
        placeholder="Enter project title"
      />
    </div>
    
    <div class="form-section">
      <label class="section-label">Category</label>
      <div class="radio-group">
        <label class="radio-label">
          <input type="radio" name="category" value="Research" v-model="formData.category" checked />
          <span class="radio-text">Research</span>
        </label>
        <label class="radio-label">
          <input type="radio" name="category" value="Project" v-model="formData.category" />
          <span class="radio-text">Project</span>
        </label>
        <label class="radio-label">
          <input type="radio" name="category" value="Thesis" v-model="formData.category" />
          <span class="radio-text">Thesis</span>
        </label>
        <label class="radio-label">
          <input type="radio" name="category" value="Capstone" v-model="formData.category" />
          <span class="radio-text">Capstone</span>
        </label>
      </div>
    </div>
    
    <div class="form-section">
      <label class="section-label">Inventor Information</label>
      
      <div class="input-group">
        <label class="input-label">Full Name</label>
        <input 
          type="text" 
          class="form-input" 
          v-model="formData.fullName" 
          placeholder="Enter full name"
        />
      </div>
      
      <div class="input-group">
        <label class="input-label">Email</label>
        <input 
          type="email" 
          class="form-input" 
          v-model="formData.email" 
          placeholder="Enter email address"
        />
      </div>
      
      <div class="input-row">
        <div class="input-group half-width">
          <label class="input-label">Contact Number</label>
          <input 
            type="tel" 
            class="form-input" 
            v-model="formData.contactNumber" 
            placeholder="Enter contact number"
          />
        </div>
        
        <div class="input-group half-width">
          <label class="input-label">Department</label>
          <div class="select-wrapper">
            <select class="form-input" v-model="formData.department">
              <option value="College of Nursing">College of Nursing</option>
              <option value="College of Medicine">College of Medicine</option>
              <option value="College of Engineering">College of Engineering</option>
              <option value="College of Science">College of Science</option>
            </select>
            <div class="select-arrow">▼</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="document-section" v-for="(doc, index) in formData.documents" :key="index">
      <div class="document-info">
        <span class="document-name">{{ doc.name }}</span>
      </div>
      <button class="view-file-btn">View File</button>
    </div>
    
    <div class="navigation-buttons">
      <button class="nav-btn back-btn">Back</button>
      <button class="nav-btn next-btn">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IPProtectionForm',
  data() {
    return {
      formData: {
        title: 'Artificial Intelligence in Healthcare: Developing AI Algorithms for Early Disease Detection',
        category: 'Research',
        fullName: 'Jey L. Nada',
        email: 'jnada_20000000513@uic.edu.ph',
        contactNumber: '09123456781',
        department: 'College of Nursing',
        documents: [
          { name: 'Document.pdf', path: '#' },
          { name: 'Document1.pdf', path: '#' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData)
    }
  }
}
</script>

<style scoped>

body, html{
  background-color: white !important;
}
.ip-protection-container {
  max-width: 700px;
  width: 100%;
  margin-top: 2px; /* Move down */
  margin-left: 300px; /* Move right */
  padding: 20px;
  font-family: Arial, sans-serif;
}

.main-title {
  color: #ff7a8a;
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.form-section {
  margin-bottom: 20px;
}

.section-label {
  display: block;
  color: #ff7a8a;
  font-size: 16px;
  margin-bottom: 8px;
}

.input-label {
  display: block;
  color: #ff7a8a;
  font-size: 14px;
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 14px;
  box-sizing: border-box;
}

.radio-group {
  display: flex;
  gap: 15px;
  margin-top: 5px;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-text {
  margin-left: 5px;
  color: #666;
}

.input-group {
  margin-bottom: 15px;
}

.input-row {
  display: flex;
  gap: 15px;
}

.half-width {
  width: 50%;
}

.select-wrapper {
  position: relative;
}

.select-arrow {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #ff7a8a;
  font-size: 10px;
  pointer-events: none;
}

.document-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 10px;
  margin-bottom: 15px;
}

.document-name {
  color: #ff7a8a;
  font-size: 18px;
}

.view-file-btn {
  background-color: #ff7a8a;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 14px;
}

.navigation-buttons {
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 10px; 
  margin-top: 30px;
}

.nav-btn {
  background-color: #ff7a8a;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 16px;
}

input[type="radio"] {
  accent-color: #ff7a8a;
}
</style>