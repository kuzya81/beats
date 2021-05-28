$('.slider__item').on('click', (e)=>{
        
    $('.slider__item').removeClass('slider__item-active');

});
$('.slider__item').on('click', function(e){
        
    $(this).addClass('slider__item-active');

});
