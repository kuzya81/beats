const findBlockByAlias = (alias) =>{
    return $(".feedbacks__content").filter((ndx,  item)=>{
        return $(item).attr('data-linked-with') === alias;
    });
};

$(".feedbacks__item").click( (e)=>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".feedbacks__item");

    itemToShow.addClass('active-content').siblings().removeClass('active-content');
    
    curItem.addClass('feedbacks__item-active').siblings().removeClass('feedbacks__item-active');
   

});
