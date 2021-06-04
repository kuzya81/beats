const burgerBtn = document.querySelector(".burger");
const overlay = document.querySelector( ".overlay");
const wrapper = document.querySelector (".wrapper");
const closeBtn = document.querySelector (".closeBtn");

const gearBtn = document.querySelector (".gear-btn");
 const gearBtnMenu = document.querySelector (".gear-btn__menu")
 gearBtn.addEventListener('mouseover', e=>{
     e.preventDefault();
     gearBtnMenu.style.display = 'block';
  });
  gearBtn.addEventListener('mouseout', e=>{
      e.preventDefault();
      gearBtnMenu.style.display = 'none';
   });


burgerBtn.addEventListener('click', e=>{
    wrapper.style.display = 'none';
    overlay.style.display = "flex";

});
closeBtn.addEventListener('click', e=>{
    overlay.style.display = 'none';
    wrapper.style. display = 'block';
});



$(document).ready(() =>{

    $('.team__item').on('click', (e)=>{
        
        $('.team__item').removeClass('team__item-active');

    });

    $('.team__item').on('click', function(e){
        
        $(this).addClass('team__item-active');

    });
    $('.shop__slider').bxSlider({
        pager: false,
        responsive: true,
    });

});
