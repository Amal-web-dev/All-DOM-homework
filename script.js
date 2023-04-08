let btnColor = document.querySelector('.btn-color-blue')
let btnColorRed = document.querySelector('.btn-color-red')
let btnColorYellow = document.querySelector('.btn-color-yellow')
let btnColorMidnight = document.querySelector('.btn-color-midnight')
let btnColorPurple = document.querySelector('.btn-color-purple')
let btnColorStarlight = document.querySelector('.btn-color-starlight')
let imgOne = document.querySelector('.img-iphone')

btnColor.onmouseenter = () => {
     document.querySelector('.p-parametr').textContent = 'Color - blue'
}

btnColor.onmouseleave = () => {
    document.querySelector('.p-parametr').textContent = 'Color'
}

btnColorRed.onmouseenter = () => {
    document.querySelector('.p-parametr').textContent = 'Color - red'
}

btnColorRed.onmouseleave = () => {
   document.querySelector('.p-parametr').textContent = 'Color'
}

btnColorPurple.onmouseenter = () => {
    document.querySelector('.p-parametr').textContent = 'Color - purple'
}

btnColorPurple.onmouseleave = () => {
   document.querySelector('.p-parametr').textContent = 'Color'
}

btnColorMidnight.onmouseenter = () => {
    document.querySelector('.p-parametr').textContent = 'Color - midnight'
}

btnColorMidnight.onmouseleave = () => {
   document.querySelector('.p-parametr').textContent = 'Color'
}

btnColorYellow.onmouseenter = () => {
   document.querySelector('.p-parametr').textContent = 'Color - yellow'
}

btnColorYellow.onmouseleave = () => {
  document.querySelector('.p-parametr').textContent = 'Color'
}

btnColorStarlight.onmouseenter = () => {
   document.querySelector('.p-parametr').textContent = 'Color - starlight'
}

btnColorStarlight.onmouseleave = () => {
  document.querySelector('.p-parametr').textContent = 'Color'
}

let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let randomBtn = document.getElementById('random');
let numberEl = document.getElementById('number');

let number = 0;

plusBtn.addEventListener('click', () => {
  number++;
  numberEl.textContent = number;
});

minusBtn.addEventListener('click', () => {
  number--;
  numberEl.textContent = number;
});

randomBtn.addEventListener('click', () => {
  let randomNum = Math.round(Math.random() * 10) + 1;
  numberEl.textContent = randomNum;
  number = randomNum;
});