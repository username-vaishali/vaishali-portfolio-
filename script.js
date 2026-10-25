
/* 1. Welcome message */
alert("Welcome to Vaishali's Portfolio!");


/* 2. Home section button */
const projectButton = document.querySelector(
    '#home a'
);

projectButton.addEventListener('click', function () {
    console.log("User is viewing my projects!");
});


/* 3. Skills section interaction */
const skillsSection = document.querySelector('#skills');

skillsSection.addEventListener('click', function () {
    alert("These are my technical skills!");
});


/* 4. Footer year update */
const footer = document.querySelector('footer p');

footer.textContent =
    "© " + new Date().getFullYear() +
    " Vaishali | My Portfolio";

const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
    const formStatus = document.querySelector("#formStatus");

    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    formStatus.textContent =
        "Thank you, " + name + "! Your form is valid.";

    contactForm.reset();
});
  
const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

