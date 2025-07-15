

const headerInner = document.querySelector('.header__top-inner');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

function toggleMenu() {
    menu.classList.toggle('active');
    burger.classList.toggle('burger-active');
}


menu.addEventListener('click', (e) => {
    if (e.target === menu) {
        menu.classList.remove('active')
        burger.classList.toggle('burger-active');
    }
})
burger.addEventListener('click', toggleMenu);


const button = document.getElementById('button')
const nav = document.getElementById('nav')

function toggle() {
    nav.classList.toggle('active')
    button.classList.toggle('accordion-active')
}

button.addEventListener('click', toggle)

const list = document.getElementById('list')
const controls = document.getElementById('control')
const listing = document.getElementById('listing')

function toggleControls() {
    controls.classList.toggle('active')
}

list.addEventListener('click', toggleControls)
listing.addEventListener('click', toggleControls)

document.getElementById('list').addEventListener('click',
    function () {
        document.getElementById('col').style.color = '#C5358C'
    }
)



// слайдер set

const swiper = new Swiper('.set__slider', {
    spaceBetween: 20,
    slidesPerView: 5,


    // Navigation arrows
    navigation: {
        nextEl: '.set__next',
        prevEl: '.set__prev',
    },
    breakpoints: {
        201:{
            slidesPerView: 1,
        },

        601: {
            slidesPerView: 2,
        },
        1201: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        }
    }
});
