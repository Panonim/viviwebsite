
const feedbackCards = document.querySelectorAll('.feedback-card');


feedbackCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});


<script>
  document.addEventListener("DOMContentLoaded", function() {
    var jsNotice = document.querySelector(".js-notice");
    jsNotice.style.display = "block"; 
  });
</script>
