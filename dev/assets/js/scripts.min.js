

window.onload = function(){
    __main.init();
}

const __main = {
    init: ()=>{
        __main.footerTab();
        __main.popEditHeader();
        __main.headerMenu();
    },
    headerMenu: function(){
        let button = $('.header-item__hamburger'),
        menu = $('.js-header-menu');
        button.on('click',function(){
            menu.addClass('is-active');
        });

    },
    popEditHeader: function(){
        let button = $('.js-pop-edit-button'),
        pop = $('.js-pop-edit'),
        close = $('.js-pop-edit-close')
        button.on('click',function(){
            pop.addClass('is-show');
        });
        close.on('click',function(){
            pop.removeClass('is-show');
        });
    },
    footerTab: function(){
        let button = $('.js-tab-menu li'),
        item= $('.js-tab-body');
        button.on('click',function(){
          id = $(this).attr('data-id')
          item.removeClass("active")
          $("#"+id).addClass('active');
          button.removeClass("active")
          $(this).addClass("active")
        })
    }
    
}