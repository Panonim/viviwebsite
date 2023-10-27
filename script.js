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

console.log('%c   __      __ _ __      __ _    _____         _         _    _                    \n   \\ \\    / /(_)\ \    / /(_)  / ____|       | |       | |  (_)                   \n    \\ \\  / /  _  \\ \\  / /  _  | (___    ___  | | _   _ | |_  _   ___   _ __   ___ \n     \\ \\/ /  | |  \\ \\/ /  | |  \\___ \\  / _ \\ | || | | || __|| | / _ \\ | \'\''\''  | | / _ \\ | \'\''\'' \n      \\  /   | |   \\  /   | |  ____) || (_) || || |_| || |_ | || (_) || | | ||\\__ \\ \n       \\/    |_|    \\/    |_| |_____/  \\___/ |_| \__,_| \\__||_| \\___/ |_| |_|||___/', 'color: #00ff90');
