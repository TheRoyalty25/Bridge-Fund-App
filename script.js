document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".tab-content");

  function showTab(tabName) {
    sections.forEach(section => {
      section.classList.remove("active");
    });

    const activeSection = document.getElementById(tabName);
    if (activeSection) {
      activeSection.classList.add("active");
    }
  }

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabName = btn.getAttribute("data-tab");
      showTab(tabName);
    });
  });

  // Show default tab (home)
  showTab("home");

  // Text-to-speech
  window.speakText = function (text) {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
  };

  // Accessibility toggle
  document.getElementById("high-contrast-toggle")?.addEventListener("change", (e) => {
    document.body.classList.toggle("high-contrast", e.target.checked);
  });

  // Login Form
  document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;
    const role = document.getElementById("role").value;

    sessionStorage.setItem("user", JSON.stringify({ name, phone, role }));

    alert(`OTP sent to ${phone}. Simulated login success.`);

    showTab(role); // redirect to role-specific form
  });
});

// TAB NAVIGATION FUNCTIONALITY
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    // Hide all tab contents
    tabContents.forEach((section) => section.classList.remove("active"));

    // Show selected tab
    document.getElementById(target).classList.add("active");
  });
});
// TEXT TO SPEECH FUNCTION
function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en";
  speechSynthesis.speak(utterance);
}

// LANGUAGE SWITCHING SIMULATION
document.getElementById("languageSelect").addEventListener("change", function () {
  const selected = this.value;
  alert("Language switched to: " + selected);
  // Real implementation would replace text content dynamically based on language.
});

// Tab switching logic
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    
    //Hide all content  document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
    });

    // Show selected tab
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
      targetTab.style.display = 'block';
    }
  });


// Set initial tab visible (optional, e.g., home)
window.addEventListener('DOMContentLoaded', () => {
  const defaultTab = document.querySelector('[data-tab="home"]');
  if (defaultTab) defaultTab.click();
});

// Tab navigation (if not already added)
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    
    // Hide all content
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
    });

    // Show selected tab
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
      targetTab.style.display = 'block';
    }
  });
});

// Initialize with home tab or any default
window.addEventListener('DOMContentLoaded', () => {
  const defaultTab = document.querySelector('[data-tab="home"]');
  if (defaultTab) defaultTab.click();
});

// Optional: Report suspicious profile action
document.addEventListener("DOMContentLoaded", () => {
  const reportBtn = document.querySelector(".report-button");
  if (reportBtn) {
    reportBtn.addEventListener("click", () => {
      alert("Report submitted. Admins will review this profile.");
    });
  }
});

// Tab switching logic
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
    });
    const activeTab = document.getElementById(tabId);
    if (activeTab) activeTab.style.display = 'block';
  });
});

// Show Home tab by default
window.addEventListener('DOMContentLoaded', () => {
  const defaultTab = document.querySelector('[data-tab="home"]');
  if (defaultTab) defaultTab.click();
});

// Admin ID Access Logic
document.getElementById('verifyAdminBtn').addEventListener('click', () => {
  const adminInput = document.getElementById('adminIdInput').value.trim();
  const feedback = document.getElementById('adminFeedback');
  const adminPanel = document.getElementById('admin-panel');

  // Replace "bridgeAdmin123" with your secure admin ID
  if (adminInput === "bridgeAdmin123") {
    adminPanel.style.display = 'block';
    feedback.textContent = '';
  } else {
    adminPanel.style.display = 'none';
    feedback.textContent = 'Invalid Admin ID.';
  }
});