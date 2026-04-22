const text = ["BTech Student", "Web Developer", "Learning New Skills 🚀"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (index >= text.length) index = 0;

    currentText = text[index];

    if (!isDeleting) {
        document.querySelector(".typing").textContent =
            currentText.substring(0, charIndex++);
    } else {
        document.querySelector(".typing").textContent =
            currentText.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();