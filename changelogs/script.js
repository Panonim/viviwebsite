// Pobieramy wszystkie elementy o klasie 'feedback-card'
const feedbackCards = document.querySelectorAll('.feedback-card');

// Dodajemy obsługę zdarzenia 'click' dla każdej karty
feedbackCards.forEach(card => {
  card.addEventListener('click', () => {
    // Toggle (zmiana) klasy 'active' dla elementu, po którym kliknięto
    card.classList.toggle('active');
  });
});
