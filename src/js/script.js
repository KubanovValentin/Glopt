// $(document).ready(function() {

//     $('.carousel__inner').slick({
//             speed: 1200,
//             dcenterMode: true,
//             centerPadding: '60px',
//             slidesToShow: 3,
//             responsive: [
//                 {
//                   breakpoint: 768,
//                   settings: {
//                     arrows: false,
//                     centerMode: true,
//                     centerPadding: '40px',
//                     slidesToShow: 3
//                   }
//                 },
//                 {
//                   breakpoint: 480,
//                   settings: {
//                     arrows: false,
//                     centerMode: true,
//                     centerPadding: '40px',
//                     slidesToShow: 1
//                   }
//                 }
//               ]
//         // adaptiveHeight: true,
//         // prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         // nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
        
//     });
// });

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});

$(function() {
  $('#dg-container').gallery();
});
