// form data (zapier)
$(document).ready(function(){

  var $form = $("#contact-form");

  $form.on('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: "https://hooks.zapier.com/hooks/catch/9487017/opf42s4",
      type: "post",
      data: $("#contact-form").serialize(),
      success: function() {

        $form.addClass('contact-form_sended');

        // scroll to top of form
        var formY = $form.offset().top;
        var scrolled = $(window).scrollTop();

        if (scrolled > formY) {
          $("html, body").animate({
            scrollTop: formY - 15
          }, 600);
        }
      }
    });
  });
});