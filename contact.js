
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Form Submit Handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));

  let isValid = true;

  // Validate Full Name
  const fullName = document.getElementById("fullName");
  if (!fullName.value.trim()) {
    document.getElementById("nameError").textContent = "Full name is required";
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email (e.g., name@example.com)";
    isValid = false;
  }

  // Validate Subject
  const subject = document.getElementById("subject");
  if (!subject.value.trim()) {
    document.getElementById("subjectError").textContent = "Subject is required";
    isValid = false;
  }

  // Validate Message
  const message = document.getElementById("message");
  if (!message.value.trim()) {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  } else if (message.value.trim().length < 10) {
    document.getElementById("messageError").textContent =
      "Message must be at least 10 characters";
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    form.style.display = "none";
    successMessage.style.display = "block";
  }
});

// Real-time validation (on blur)
const inputs = document.querySelectorAll(".form-input");
inputs.forEach((input) => {
  input.addEventListener("blur", function () {
    validateField(this);
  });
});

// Validate individual field
function validateField(field) {
  const fieldId = field.id;
  const errorElement = document.getElementById(fieldId + "Error");

  if (!errorElement) return;

  errorElement.textContent = "";

  if (fieldId === "fullName" && !field.value.trim()) {
    errorElement.textContent = "Full name is required";
  } else if (fieldId === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!field.value.trim()) {
      errorElement.textContent = "Email is required";
    } else if (!emailPattern.test(field.value)) {
      errorElement.textContent =
        "Please enter a valid email (e.g., name@example.com)";
    }
  } else if (fieldId === "subject" && !field.value.trim()) {
    errorElement.textContent = "Subject is required";
  } else if (fieldId === "message") {
    if (!field.value.trim()) {
      errorElement.textContent = "Message is required";
    } else if (field.value.trim().length < 10) {
      errorElement.textContent = "Message must be at least 10 characters";
    }
  }
}
