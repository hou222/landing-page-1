const green = document.querySelector('.js-green_cup');
const pink = document.querySelector('.js-pink_cup');
const caramel = document.querySelector('.js-caramel_cup');

const circleColor = document.querySelector('.circle');

const cup = document.querySelector('.js-cup_starbucks');

green.addEventListener('click', () => {
    cup.classList.add('green_starbucks');
    cup.classList.remove('pink_starbucks');
    cup.classList.remove('caramel_starbucks');
    circleColor.style.background = '#00704A';
});
pink.addEventListener('click', () => {
    cup.classList.add('pink_starbucks');
    cup.classList.remove('green_starbucks');
    cup.classList.remove('caramel_starbucks');
    circleColor.style.background = 'rgb(213, 0, 199)';
});
caramel.addEventListener('click', () => {
    cup.classList.add('caramel_starbucks');
    cup.classList.remove('pink_starbucks');
    cup.classList.remove('green_starbucks');
    circleColor.style.background = 'rgb(190, 145, 63)';
    
});

