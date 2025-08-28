let burgerBtn = document.querySelector(".burger-button");
let modalCloseBtn = document.querySelector(".modal__close-button");
let modalWindow = document.querySelector(".modal");
let learningPic = document.querySelector(".learning-center__image");

burgerBtn.addEventListener("click", () => {
  modalWindow.style.display = "block";
});
modalCloseBtn.addEventListener("click", () => {
  modalWindow.style.display = "none";
});
function widthResizer() {
  let width = window.innerWidth;
  if (width == 1100) {
    modalWindow.style.display = "none";
  }
}

// Запускаем при загрузке и изменении размера
window.addEventListener("resize", widthResizer);

// const slider = document.querySelector('.slider');
// const sliderBody = slider.querySelector('.slider__body');
// const cards = slider.querySelectorAll('.slider__card');
// const controls = slider.querySelectorAll('.slider__control-button');
// let currentIndex = 0;
// const cardWidth = cards[0].offsetWidth + 20; // width + gap

// function initSlider() {
//   updateControls();
// }
// function goToSlide(index) {
//   if(index < 0) index = 0;
//   if(index > cards.length - 1) index - cards.length - 1;
//   currentIndex = index;
//   sliderBody.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//   updateControls();
// }
// function updateControls() {
//   controls.forEach((control, i) => {
//     if(i === currentIndex) {
//       control.classList.add('active');
//     } else {
//       control.classList.remove('active');
//     }
//   });
// }
// controls.forEach((control, i) => {
//   control.addEventListener('click', () => {
//     goToSlide(i);
//   });
// })
// initSlider();

// document.addEventListener('DOMContentLoaded', function() {
//   const slider = document.querySelector('.slider');
//   const body = slider.querySelector('.slider__body');
//   const cards = slider.querySelectorAll('.slider__card');
//   const controls = slider.querySelectorAll('.slider__control-button');

//   // Оставляем только первые 3 кнопки (остальные скрываем)
//   for (let i = 3; i < controls.length; i++) {
//     controls[i].style.display = 'none';
//   }

//   // Клонируем карточки для бесконечного эффекта
//   const firstCard = cards[0].cloneNode(true);
//   const lastCard = cards[cards.length - 1].cloneNode(true);
//   body.insertBefore(lastCard, cards[0]);
//   body.appendChild(firstCard);

//   const allCards = body.querySelectorAll('.slider__card');
//   const cardWidth = allCards[0].offsetWidth + 20; // width + gap
//   let currentIndex = 1; // Начинаем с первого оригинала (не клона)
//   body.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

//   // Инициализация слайдера
//   function initSlider() {
//     updateControls();
//   }

//   // Перемещение к конкретному слайду
//   function goToSlide(index) {
//     currentIndex = index;
//     body.style.transition = 'transform 0.3s ease';
//     body.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//     updateControls();

//     // После анимации проверяем границы для бесконечного эффекта
//     setTimeout(() => {
//       if (currentIndex === 0) {
//         // Переход к "фейковому" последнему слайду (реально это предпоследний оригинал)
//         body.style.transition = 'none';
//         currentIndex = allCards.length - 2;
//         body.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//       } else if (currentIndex === allCards.length - 1) {
//         // Переход к "фейковому" первому слайду (реально это второй оригинал)
//         body.style.transition = 'none';
//         currentIndex = 1;
//         body.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//       }
//     }, 300);
//   }

//   // Обновление состояния кнопок управления
//   function updateControls() {
//     let controlIndex;
//     if (currentIndex === 0) {
//       controlIndex = 2; // Последний оригинальный слайд
//     } else if (currentIndex === allCards.length - 1) {
//       controlIndex = 0; // Первый оригинальный слайд
//     } else {
//       controlIndex = currentIndex - 1; // Оригинальные слайды
//     }

//     controls.forEach((control, i) => {
//       if (i === controlIndex && i < 3) {
//         control.classList.add('active');
//       } else {
//         control.classList.remove('active');
//       }
//     });
//   }

//   // Обработчики для кнопок управления
//   controls.forEach((control, i) => {
//     if (i < 3) {
//       control.addEventListener('click', () => {
//         goToSlide(i + 1); // +1 потому что первый слайд - клон последнего
//       });
//     }
//   });

//   // Автопрокрутка
//   let interval = setInterval(() => {
//     goToSlide(currentIndex + 1);
//   }, 3000);

//   // Пауза при наведении
//   slider.addEventListener('mouseenter', () => {
//     clearInterval(interval);
//   });

//   slider.addEventListener('mouseleave', () => {
//     interval = setInterval(() => {
//       goToSlide(currentIndex + 1);
//     }, 3000);
//   });

//   // Инициализация
//   initSlider();

//   // Свайп для мобильных устройств
//   let touchStartX = 0;
//   let touchEndX = 0;

//   slider.addEventListener('touchstart', (e) => {
//     touchStartX = e.changedTouches[0].screenX;
//     clearInterval(interval);
//   }, false);

//   slider.addEventListener('touchend', (e) => {
//     touchEndX = e.changedTouches[0].screenX;
//     handleSwipe();
//     interval = setInterval(() => {
//       goToSlide(currentIndex + 1);
//     }, 3000);
//   }, false);

//   function handleSwipe() {
//     if (touchEndX < touchStartX - 50) {
//       goToSlide(currentIndex + 1); // Свайп влево
//     }
//     if (touchEndX > touchStartX + 50) {
//       goToSlide(currentIndex - 1); // Свайп вправо
//     }
//   }
// });
