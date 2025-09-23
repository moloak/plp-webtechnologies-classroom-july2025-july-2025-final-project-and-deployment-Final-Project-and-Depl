// Run modal only on about page
if (document.body.id === "aboutPage") {
  function setupModal(modalId, openBtnId, closeBtnId) {
    const modal = document.getElementById(modalId);
    const openModalButton = document.getElementById(openBtnId);
    const closeModalButton = document.getElementById(closeBtnId);

    if (modal && openModalButton && closeModalButton) {
      openModalButton.addEventListener("click", () => {
        modal.classList.add("show");
      });

      closeModalButton.addEventListener("click", () => {
        modal.classList.remove("show");
      });
    }
  }

  setupModal("modal", "openModal", "closeModal");
}


// Run blog "Read More" only on home page
if (document.body.id === "homePage") {
  document.querySelectorAll('.blog, .blog2').forEach(container => {
    const readMoreBtn = container.querySelector('.read-more-btn');
    const moreContent = container.querySelector('.more-content');

    if (readMoreBtn && moreContent) {
      readMoreBtn.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
          moreContent.style.display = 'block'; 
          readMoreBtn.textContent = 'Read Less'; 
        } else {
          moreContent.style.display = 'none'; 
          readMoreBtn.textContent = 'Read More'; 
        }
      });
    }
  });
}


// Run form validation only on partner page
if (document.body.id === "partnerPage") {
  const form = document.getElementById("myForm");
  if (form) {
    form.onsubmit = function(event) {
      event.preventDefault();

      let username = document.getElementById("username").value.trim();
      let email = document.getElementById("email").value.trim(); 
      let password = document.getElementById("password").value.trim();

      document.getElementById("usernameError").innerText = "";
      document.getElementById("emailError").innerText = "";
      document.getElementById("passwordError").innerText = "";

      let isValid = true;

      if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        isValid = false;
      } else if (username.length < 3) {
        document.getElementById("usernameError").innerText = "Username must be at least 3 characters.";
        isValid = false;
      }

      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
      } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
      }

      let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
      } else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, including one letter and one number.";
        isValid = false;
      }

      if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
      }
    };
  }
}
