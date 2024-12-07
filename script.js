// script.js
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement.parentElement;
      const answer = faqItem.querySelector('.faq-answer');
      const isHidden = answer.classList.contains('hidden');
  
      // Toggle answer visibility
      answer.classList.toggle('hidden', !isHidden);
  
      // Change button text
      button.textContent = isHidden ? '-' : '+';
    });
  });
  