document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector('.hamburger');
    let mobile = document.querySelector('.mobile-slide');
    burger.addEventListener('click', () => {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            mobile.classList.remove('active');
            document.body.style.overflow = "visible";
        } else {
            burger.classList.add('active');
            mobile.classList.add('active');
            document.body.style.overflow = "hidden";
        }
    });

    const slider = document.querySelector('.cases-slider--line');
    const sl = new Swiper(slider, {
        loop: true,
        speed: 5000,
        slidesPerView: '7',
        autoplay: {
            enabled: true,
            delay: 1,
        },
        spaceBetween: 40,
        breakpoints: {
            300: {
                slidesPerView: '2'
            },
            576: {
                slidesPerView: '3'
            },
            768: {
                slidesPerView: '5',
            },
            1025: {
                slidesPerView: '7'
            }
        }
    });


    const swiper = new Swiper('.mega-swiper', {
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.mega-swiper__arrow--next',
            prevEl: '.mega-swiper__arrow--prev',
        },
        pagination: {
            el: '.mega-swiper__pagination',
        },
    });


    const personsSlider = new Swiper('.persons-slider', {
        spaceBetween: 20,
        pagination: {
            el: '.persons-slider__pagination',
        },
        breakpoints: {
            300: {
                slidesPerView: '1',
                spaceBetween: 5,
                loop: true,
            },
            576: {
                loop: false,
                slidesPerView: '2'
            }
        }
    });


    const sliderTable = document.querySelector('.cases-slider--table');
    const slTable = new Swiper(sliderTable, {
        speed: 5000,
        autoplay: {
            enabled: true,
            delay: 1,
        },
        grid: {
            rows: 2,
        },
        spaceBetween: 50,
        breakpoints: {
            300: {
                slidesPerView: '2',
                grid: {
                    rows: 1,
                    fill: 'row'
                },
            },
            576: {
                slidesPerView: '3',
                grid: {
                    rows: 2,
                    fill: 'row'
                },
            }
        }
    });

    // Функция ymaps.ready() будет вызвана, когда
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [53.196256, 50.219040],
                controls: [],
                zoom: 13
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../../img/contacts/icon.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });

        myMap.geoObjects
            .add(myPlacemark)
    });

    // функция для модалки

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scarollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scarollWidth;
    }

    let scrollWidth = calcScroll();

    function modal(modal, modalActiveClass, triggers, modalClose) {
        const triggers_ = document.querySelectorAll(triggers),
            modal_ = document.querySelector(modal),
            modalClose_ = document.querySelector(modalClose);

        if (triggers_.length > 0) {
            triggers_.forEach(item => {
                item.addEventListener('click', () => {
                    modal_.classList.add(modalActiveClass);
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scrollWidth}px`;
                });
            });

            modalClose_.addEventListener('click', () => {
                modal_.classList.remove(modalActiveClass);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            });

            modal_.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal__container')) {
                    modal_.classList.remove(modalActiveClass);
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                }
            });
        }
    }

    modal('.modal', 'modal--active', '[data-modal]', '.modal__close');
});
