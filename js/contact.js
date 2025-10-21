// Cache DOM elements up-front
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const errors = {
  fullName: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  subject: document.getElementById("subjectError"),
  message: document.getElementById("messageError"),
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time validation (on blur)
const inputs = document.querySelectorAll(".form-input");
inputs.forEach((input) => {
  input.addEventListener("blur", () => validateField(input));
});

// Form Submit Handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous errors
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));

  let isValid = true;

  // Validate Full Name
  if (!fullName.value.trim()) {
    errors.fullName.textContent = "Full name is required";
    isValid = false;
  }

  // Validate Email
  if (!email.value.trim()) {
    errors.email.textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    errors.email.textContent =
      "Please enter a valid email (e.g., name@example.com)";
    isValid = false;
  }

  // Validate Subject
  if (!subject.value.trim()) {
    errors.subject.textContent = "Subject is required";
    isValid = false;
  }

  // Validate Message
  const msg = message.value.trim();
  if (!msg) {
    errors.message.textContent = "Message is required";
    isValid = false;
  } else if (msg.length < 10) {
    errors.message.textContent = "Message must be at least 10 characters";
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    form.style.display = "none";
    successMessage.style.display = "block";
  }
});

// Validate individual field
function validateField(field) {
  const id = field.id;
  const value = field.value.trim();
  const errorEl = errors[id];
  if (!errorEl) return;

  errorEl.textContent = "";

  switch (id) {
    case "fullName":
      if (!value) errorEl.textContent = "Full name is required";
      break;
    case "email":
      if (!value) errorEl.textContent = "Email is required";
      else if (!emailPattern.test(value))
        errorEl.textContent =
          "Please enter a valid email (e.g., name@example.com)";
      break;
    case "subject":
      if (!value) errorEl.textContent = "Subject is required";
      break;
    case "message":
      if (!value) errorEl.textContent = "Message is required";
      else if (value.length < 10)
        errorEl.textContent = "Message must be at least 10 characters";
      break;
  }
}
