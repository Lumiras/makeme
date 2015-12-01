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
    //   var feed = new Instafeed({
    //       get: 'tagged',
    //       tagName: 'awesome',
    //       clientId: 'f92b3e17910840b8a934c030c5baa7f2',
    //       template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    //     });
      //
    //   feed.run();

});
