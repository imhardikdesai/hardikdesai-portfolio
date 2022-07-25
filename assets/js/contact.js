let contactForm = document.getElementById('contactForm');

function showCustomPage() {
    contactForm.reset();
    window.open('assets/Pages/ThankYou.html', '_self');
    console.log("Done");
}
