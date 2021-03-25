

window.onload = function(){
    __main.init();
}


const __main = {
    init: ()=>{
        __main.headerTab();
        __main.mainTab();
        __main.headerMenu();
        __main.productSlider();
    },
    productSlider: function(){
        var galleryThumbs = new Swiper('.product-item__slider-small', {
            spaceBetween: 15,
            slidesPerView: 5,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            speed: 1000,
            breakpoints: {
                320: {
                    slidesPerView: 4,
                    loopedSlides: 4, //looped slides should be the same
                },
                575: {
                    slidesPerView: 5,
                    loopedSlides: 5, //looped slides should be the same
                },
            }
        });
        var galleryTop = new Swiper('.product-item__slider', {
            speed: 1000,
            loopedSlides: 5, //looped slides should be the same
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    },
    headerMenu: function(){
        let button = $('.header-hamburger'),
        menu = $('.js-header-menu'),
        close = $('.js-header-close');
        $('.header-mobile ul a.dropdown').on('click',function(){
            $('.header-list').toggleClass('active');
            $(this).toggleClass('active');
        })
        button.on('click',function(){
            menu.fadeIn();
        });
        close.on('click',function(){
            menu.fadeOut();
        });

    },
    headerTab: function(){
        let button = $('.js-tab-header-menu li'),
        item= $('.js-tab-header-body');
        button.on('click',function(){
          let id = $(this).attr('data-id')
          item.removeClass("active")
          $("#"+id).addClass('active');
          button.removeClass("active")
          $(this).addClass("active")
        })
    },
    mainTab: function(){
        let button = $('.js-tab-menu li'),
        item= $('.js-tab-body');
        button.on('click',function(){
          let id = $(this).attr('data-id')
          item.removeClass("active")
          $("#"+id).addClass('active');
          button.removeClass("active")
          $(this).addClass("active")
        })
    }
    
}