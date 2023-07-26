
const feedbackCards = document.querySelectorAll('.feedback-card');


feedbackCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});


