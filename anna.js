// const gallery = document.querySelector('.gallery');
// const items = document.querySelectorAll('.gallery-item');

// items.forEach(item => {
//   item.addEventListener('click', () => {
//     const index = item.getAttribute('data-index');
//     const imgUrl = item.getAttribute('src');
//     showModal(index, imgUrl);
//   });
// });

// function showModal(index, imgUrl) {
//   // создание модального окна и вставка в него картинки
// }

// function toggleImages() {
//   const hiddenImages = document.querySelector('.hidden-images');
//   if (hiddenImages.style.display === 'none') {
//     hiddenImages.style.display = 'flex';
//   } else {
//     hiddenImages.style.display = 'none';
//   }
// }


// $(document).ready(function() {
//   $('.main-image').on('mouseenter', function() {
//     $('.other-images').show();
//   });
//   $('.main-image').on('mouseleave', function() {
//     $('.other-images').hide();
//   });
// });

// Получаем все ссылки в меню
var menuItems = document.querySelectorAll('.header nav ul li a');

// Обходим ссылки и назначаем обработчик события
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
        // Удаляем класс active у всех элементов списка
        for (var j = 0; j < menuItems.length; j++) {
            menuItems[j].classList.remove('active');
        }

        // Добавляем класс active выбранному элементу списка
        this.classList.add('active');
    });
}

