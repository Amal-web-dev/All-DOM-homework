let modal = document.querySelector('.modal')
let modalBg = document.querySelector('.modal-bg')
let modalOpen = document.querySelectorAll('.modal-open')
let modalClose = document.querySelectorAll('.btn-close')
let modalScroll = document.querySelectorAll('.modal-scroll') 

modalOpen.forEach(btn => {
  btn.onclick = () => {
    modal.style.display = 'flex'
    modalBg.style.display = 'block'
    document.body.style.overflow = 'hidden';
    modal.style.overflow = 'scroll';
    modal.style.height = '100%'
  }
});


modalClose.forEach(btn => {
  btn.onclick = () => {
    modal.style.display = 'none'
    modalBg.style.display = 'none'
    document.body.style.overflow = 'scroll';
  }
});

modalBg.onclick = () => {
  modal.style.display = 'none'
  modalBg.style.display = 'none'
}

let chavronOne = document.querySelector('.iPhone-14-button')
let cvr = document.querySelectorAll('.chavron-1-all')
let imgChevron = document.querySelector('.chavron-img')
let modalCenter = document.querySelector('.modal-center')

  chavronOne.onclick = () => {
    cvr.forEach(item => {
    
    if (item.style.width === 'auto') {
      item.style.width = '0';
      item.style.height = '0';
      modalCenter.style.height = '750px'
      imgChevron.setAttribute('src', './photo by iphone/8666558_chevron_down_icon.png')
    } else {
      item.style.width = 'auto';
      item.style.height = 'auto';
      imgChevron.setAttribute('src', './photo by iphone/8666673_chevron_up_icon.png')
      modalCenter.style.height = '1300px'
    }
  });
  }

  let chavronTwo = document.querySelector('.iPhone-14-max-button')
let cvrTwo = document.querySelectorAll('.chavron-2-all')
let imgChavronTwo = document.querySelector('.chavron-img-2')


  chavronTwo.onclick = () => {
    cvrTwo.forEach(item => {
    
    if (item.style.width === 'auto') {
      modalCenter.style.height = '750px'
      item.style.width = '0';
      item.style.height = '0';
      imgChavronTwo.setAttribute('src', './photo by iphone/8666558_chevron_down_icon.png')
    } else {
      item.style.width = 'auto';
      item.style.height = 'auto';
      imgChavronTwo.setAttribute('src', './photo by iphone/8666673_chevron_up_icon.png')
      modalCenter.style.height = '1880px'
    }
  });
  }



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

btnColorRed.onclick = () => {
   imgOne.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027939728')
}

btnColorYellow.onclick = () => {
  imgOne.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-yellow?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676505838319')
}

btnColorPurple.onclick = () => {
  imgOne.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027938735')
}

btnColorStarlight.onclick = () => {
  imgOne.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027935971')
}

btnColorMidnight.onclick = () => {
  imgOne.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027925267')
}

btnColor.onclick = () => {
  imgOne.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027942322')
}


let btnCompany = document.querySelector('.company-1')
let btnCompanyTwo = document.querySelector('.company-2')

btnCompany.onclick = () => {
  btnCompany.classList.toggle('company-1')
  btnCompanyTwo.classList.toggle('company-1')
  btnCompany.classList.toggle('company-2')
  btnCompanyTwo.classList.toggle('company-2')
}

btnCompanyTwo.onclick = () => {
  btnCompany.classList.toggle('company-1')
  btnCompanyTwo.classList.toggle('company-1')
  btnCompany.classList.toggle('company-2')
  btnCompanyTwo.classList.toggle('company-2')
}

let optionIphone = document.querySelector('.option-iphone')

optionIphone.addEventListener('click', () => {
  optionIphone.style.boxShadow = '0 0 0 5px rgb(62, 109, 163)';
});

optionIphone.addEventListener('blur', () => {
  optionIphone.style.boxShadow = 'none';
});

let iphoneBlock = document.querySelectorAll('.iphone-14-block')

iphoneBlock.forEach(blk => {
  blk.onclick = () => {
   iphoneBlock.forEach(b => b.style.boxShadow = 'none');
    blk.style.boxShadow = '0 0 0 5px rgb(62, 109, 163)';
  }
});

let mamoryBlock = document.querySelectorAll('.mamory-block')

mamoryBlock.forEach(mmr => {
  mmr.onclick = () => {
    mamoryBlock.forEach(b => b.style.boxShadow = 'none');
    mmr.style.boxShadow = '0 0 0 5px rgb(62, 109, 163)';
  }
});

