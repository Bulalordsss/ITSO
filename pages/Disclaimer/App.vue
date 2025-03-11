
<template>
  <div class="container">
    <!-- Back Button -->
    <button class="back-button" @click="goBack">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>

    <!-- Content -->
    <div class="privacy-section">
      <h1>ITSO Privacy Statement</h1>
      <p>
        At ITSO, we respect your privacy and the value of your intellectual property. When you submit personal information
        or intellectual property to us, we commit to handling it with care and confidentiality.
      </p>
    </div>

    <h2>Disclaimer</h2>
    <p>
      By submitting personal information or intellectual property to ITSO, you acknowledge that you have read and
      understood our Privacy Statement. ITSO disclaims any liability for unauthorized access or misuse of your data
      beyond our reasonable control. Use of our services implies your consent to our privacy practices as outlined.
    </p>

    <!-- Agree Button -->
    <button class="agree-button" @click="handleAgree">Agree</button>
  </div>
</template>

<script setup>
const handleAgree = () => {
  console.log('User agreed to privacy statement');
};
const goBack = () => {
  window.history.back();
};
</script>


