// Fade-in effect on scroll
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFade);
checkFade();

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // page reload nahi hoga
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    // mailto link
    const mailtoLink = `mailto:nidhibhati975@gmail.com?subject=Portfolio Message from ${encodeURIComponent(name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

    // redirect to email client
    window.location.href = mailtoLink;

    // optional: form reset
    this.reset();
});
