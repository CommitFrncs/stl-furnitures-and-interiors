// STL Furniture and Interiors - Standalone Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // Direct Contact handler
  const quoteButtons = document.querySelectorAll('.trigger-quote-modal');
  const modal = document.getElementById('standalone-quote-modal');
  const closeModal = document.getElementById('close-standalone-modal');
  const quoteForm = document.getElementById('standalone-quote-form');
  const categorySelect = document.getElementById('modal-category');

  if (quoteButtons && modal) {
    quoteButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const cat = btn.getAttribute('data-category');
        if (cat && categorySelect) {
          categorySelect.value = cat;
        }
        modal.style.display = 'flex';
      });
    });
  }

  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const ref = 'STL-' + Math.floor(100000 + Math.random() * 900000);
      alert(
        'Thank you! Your quote request has been logged under Reference ID: ' +
          ref +
          '. Our Senior Furniture Director will contact you within 2 business hours.'
      );
      if (modal) modal.style.display = 'none';
      quoteForm.reset();
    });
  }

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
