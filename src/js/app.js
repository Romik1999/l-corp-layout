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

    // const casesLine = new Swiper('.cases-slider', {
    //     slidesPerView: 7,
    //     spaceBetween: 75,
    //     loop: true,
    //     breakpoints: {
    //         300: {
    //             slidesPerView: 2
    //         },
    //         576: {
    //             slidesPerView: 3
    //         },
    //         768: {
    //             slidesPerView: 5,
    //             autoplay: {
    //                 enabled: true,
    //                 delay: 1,
    //             },
    //             speed: 5000,
    //         },
    //         1025: {
    //             slidesPerView: 7
    //         }
    //     }
    // });

    const slider = document.querySelector('.cases-slider');
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

    const priceSlider = new Swiper('.price-table', {
        loop: false,
        pagination: {
            el: '.price-table__pagination',
        },
        navigation: {
            nextEl: '.price-table__arrow--next',
            prevEl: '.price-table__arrow--prev',
            clickable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            350: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            576: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            670: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            769: {
                slidesPerView: 5,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            860: {
                slidesPerView: 7,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
        }
    });

    const brandsSlider = new Swiper('.brands-slider', {
        loop: false,
        pagination: {
            el: '.brands-slider__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.brands-slider__arrow--next',
            prevEl: '.brands-slider__arrow--prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 10,
                grid: {
                    rows: 4,
                    fill: "row"
                },
            },
            450: {
                slidesPerView: 3,
                spaceBetween: 10,
                grid: {
                    rows: 4,
                    fill: "row"
                },
            },
            769: {
                slidesPerView: 5,
                spaceBetween: 15,
                grid: {
                    rows: 4,
                    fill: "row"
                },
            },
        }
    });

    let priceButton = document.querySelector('.price__button');
    if (priceButton) {
        let priceRows = document.querySelectorAll('.price__row--hidden');
        if (priceRows) {
            priceButton.addEventListener('click', () => {
                priceRows.forEach(priceRow => {
                    priceRow.classList.remove(('price__row--hidden'));
                })
                priceButton.classList.add('active')
            });
        }
    }

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
