$('.form').submit(e =>{
 e.preventDefault();


 const form = $(e.currentTarget);
 const name = form.find("[name = 'name']");
 const phone = form.find("[name = 'phone']");
 const comment = form.find("[name = 'comment']");
 const to = form.find("[name = 'to']");
 const modal = $("#modal");
 const content = modal.find("modal__content");

 [name, phone, comment, to].forEach((field) =>{
     field.removeClass("form__error")
    if (field.val().trim() === ""){
        field.addClass("form__error");
    }
 });

 const errorField = form.find(".form__error");
 if (errorField.lenght === 0){
     
 }

 $.ajax({
     url:"https://webdev-api.loftschool.com/sendmail",
     method: "post",
     data: {
         name: name.val(),
         phone: phone.val(),
         comment: comment.val(),
         to:to.val()
     },
     success:data => {
        content.text(data.message);
        $.fancybox.open({
            src: "#modal",
            type: "inline"
            });
     },
     error: data =>{
         content.text(data.message);
         $.fancybox.open({
            src: "#modal-error",
            type: "inline"
            });
     }
 });


});