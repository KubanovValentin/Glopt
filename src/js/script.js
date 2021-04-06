//  $(document).ready(function() {

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
$(window).scroll(function() {
    if ($(this).scrollTop() > 1300) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});



// Smooth scroll and pageup

$("a[href=#upp]").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});

new WOW().init();


//  });