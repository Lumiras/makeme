$(document).ready(function(){
    // alert("Hey!");
    $(".fancybox").fancybox();
    $(".fancybox").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });
    $("#campus1").hover(function(){
        $(this).attr('src', $(this).attr('src').replace(/\.jpg/, '-on.jpg') );
    });
});
