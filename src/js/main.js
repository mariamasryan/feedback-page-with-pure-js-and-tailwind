import "../styles/style-tw-output.css";

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const feedbackForm = document.getElementById("feedback-form");
const modal = document.getElementById("modal");
const jsCloseModal = document.getElementById("js-close-modal");

function modalClose() {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}

function modalOpen() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

jsCloseModal.addEventListener("click", function () {
  modalClose();
});

window.onclick = function (event) {
  if (event.target == modal) {
    modalClose();
  }
};

feedbackForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  if (validateForm()) {
      if (validateForm()) {
        modalOpen();
      }
    // to clean input fields when form is submitted
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
  }
}
// 

function validateForm() {
  const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let isValid = true;

  const inputs = [nameInput, emailInput, subjectInput, messageInput];
  inputs.forEach((input) => {
    input.classList.remove(
      "border",
      "border-gray-300",
      "border-green-500",
      "border-red-500"
    );
  });

  if (nameInput.value.trim() === "") {
    nameInput.classList.add("border", "border-red-500");
    isValid = false;
  } else {
    nameInput.classList.add("border", "border-green-500");
  }

  if (emailInput.value.trim() === "") {
    emailInput.classList.remove("border-green-500"); 
    emailInput.classList.add("border", "border-red-500");
    isValid = false;
  } else if (!emailInput.value.match(isEmail)) {
    emailInput.classList.remove("border-green-500"); 
    emailInput.classList.add("border", "border-red-500");
    isValid = false;
  } else {
    emailInput.classList.add("border", "border-green-500");
  }

  if (subjectInput.value.trim() === "") {
    subjectInput.classList.remove("border-green-500"); 
    subjectInput.classList.add("border", "border-red-500");
    isValid = false;
  } else {
    subjectInput.classList.add("border", "border-green-500");
  }

  if (messageInput.value.trim() === "") {
    messageInput.classList.remove("border-green-500"); 
    messageInput.classList.add("border", "border-red-500");
    isValid = false;
  } else {
    messageInput.classList.add("border", "border-green-500");
  }

  return isValid;
}

// to close modal when screen size is 400px and more low
function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 400) {
    modalClose()
  }
}
window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;
