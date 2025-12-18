const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = contactForm.elements['firstName'].value;

  alert(`Thank you, ${firstName}! Your message has been sent.`);

  contactForm.reset();
});
