$(document).ready(function(){

    let projectOwl = $('.project-overview .owl-carousel');

    projectOwl.owlCarousel({
        stagePadding: 160,
        loop:false,
        margin:60,
        autoWidth: true,
        nav:false,
        responsive:{
            0:{
                items:1,
                margin: 20
            },
            375: {
                margin: 20
            },
            600:{
                items:2
            },
            768: {
                margin: 40
            },
            1000:{
                items:3
            }
        }
    });

    $('.custom-next-btn').click(function() {
        projectOwl.trigger('next.owl.carousel');
    });
    $('.custom-prev-btn').click(function() {
        projectOwl.trigger('prev.owl.carousel', [300]);
    });



    let owl = $('#reviews-items');
    owl.owlCarousel({
        stagePadding: 100,
        loop:true,
        margin:20,
        autoWidth: true,
        autoplay:true,
        smartSpeed:8000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        responsive: {
            0: {
                items: 1
            },
            375: {
                margin: 14
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[0])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

});