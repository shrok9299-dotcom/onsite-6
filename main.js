// Simple Form Validation Feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you, Shorouk! Your message has been sent successfully. (Simulation)');
    this.reset();
});

// Back to Top Button Logic
const backBtn = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 400) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
};

backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});