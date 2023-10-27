const elementToAnimate = document.querySelector('.logo');

elementToAnimate.addEventListener('mouseover', () => {
  elementToAnimate.style.animation = 'rotate 2.5s';
  elementToAnimate.style.animationIterationCount = '1'; 
  elementToAnimate.addEventListener('animationend', () => {
    elementToAnimate.style.animation = 'none';
    setTimeout(() => {
      elementToAnimate.style.animation = '';
    }, 0);
    elementToAnimate.removeEventListener('animationend', null); 
  });
});
