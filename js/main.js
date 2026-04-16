/*=============== EMAIL VALIDATIONS  ===============*/

const nameError = document.getElementById("name__error");
const emailError = document.getElementById("email__error");
const messageError = document.getElementById("message__error");
const submitError = document.getElementById("submit__error");
const submitBtn = document.querySelector(".contact__button");

const form = document.getElementById('contact_form');

function validateName() {
  let name = document.getElementById("contact__name").value;

  if (name.length == 0) {
    nameError.innerHTML = "This filed is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]+$/)) {
    nameError.innerHTML = "only alphabets";
    return false;
  } else {
    nameError.innerHTML = "";
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById("contact__email").value;

  if (email.length == 0) {
    emailError.innerHTML = "This filed is required";
    return false;
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "invalid email";
    return false;
  } else {
    emailError.innerHTML = "";
    return true;
  }
}

function validateMessage() {
  let message = document.getElementById("contact__message").value;

  if (message.length == 0) {
    messageError.innerHTML = "This filed is required";
    return false;
  } else {
    messageError.innerHTML = "";
    return true;
  }
}

submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    if(!validateName() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = "";
        return;
    }

    form.reset();
})



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const activeClass = document.querySelectorAll(".nav__link");

activeClass.forEach((active) => {
  active.addEventListener("click", () => {
    activeClass.forEach((item) => {
      item.classList.remove("active");
    });

    active.classList.add("active");
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 300,
  // rest:true
});

sr.reveal(".perfil, contact__form");
sr.reveal(".info", { origin: "left", delay: 800 });
sr.reveal(".skills", { origin: "left", delay: 1000 });
sr.reveal(".about", { origin: "right", delay: 1200 });
sr.reveal(".projects__card, .services__card, .experience__card", {
  interval: 100,
});
