var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 30,
});

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
});



var swiper = new Swiper(".teacher-card", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".img-card", {
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        313: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3.5,
            spaceBetween: 20
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4.5,
            spaceBetween: 30
        }
    },
});


const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
});

