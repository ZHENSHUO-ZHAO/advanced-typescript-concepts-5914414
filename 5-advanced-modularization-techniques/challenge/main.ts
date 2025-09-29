// import { Analytics } from './analytics';
// import { UserManagement } from './userManagement';

const recordBtn = document.getElementById("record-btn");
if (!recordBtn) {
  console.error("Element with ID 'record-btn' not found.");
} else {
  recordBtn.addEventListener("click", async () => {
    const { Analytics } = await import("./analytics.js");
    Analytics.recordEvent("Button Clicked");
  });
}

const loadProfileBtn = document.getElementById("load-profile-btn");
if (!loadProfileBtn) {
  console.error("Element with ID 'load-profile-btn' not found.");
} else {
  loadProfileBtn.addEventListener("click", async () => {
    const { UserManagement } = await import("./userManagement.js");
    UserManagement.loadUserProfile("user123");
  });
}
