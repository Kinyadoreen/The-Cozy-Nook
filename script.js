const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event){
    // Prevent form from submitting by default event.preventDefault();
    // Get form fields
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    // Simple email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name){
        alert ('Please enter your name.');
        return;
    }
    if (!email || !emailPattern.test(email)){
        alert('Please enter a valid email address.')
        return;
    }
    if(!message){
        alert('Please enter your message.');
        return;
    }
    //If all good, you can submit the form or do further processing here
    alert('Thank you for reaching out, '+ name+'! We will get back to you soon.');
    // Optionally reset the form
    contactForm.requestFullscreen();
});

// Scroll animations
const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));

