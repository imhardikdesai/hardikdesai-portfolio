let contactForm = document.getElementById('contactForm');

function showCustomPage() {
    contactForm.reset();
    window.open('assets/Pages/ThankYou.html', '_blank');
    console.log("Done");
}
