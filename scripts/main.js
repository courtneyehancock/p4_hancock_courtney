var userFeed = new Instafeed({
    get: 'user',
    userId: '5762033151',
    accessToken: '5762033151.1677ed0.be1ef754b4f346499eb8cdffda6a1988',
    limit: 12,
});

userFeed.run();var loadButton = document.getElementById('load-more');
   var feed = new Instafeed({
       // every time we load more, run this function
       after: function() {
           // disable button if no more results to load
           if (!this.hasNext()) {
               loadButton.setAttribute('disabled', 'disabled');
           }
       },
   });

   // bind the load more button
   loadButton.addEventListener('click', function() {
       feed.next();
   });

   // run our feed!
   feed.run();

   var feed = new Instafeed({
        get: 'charlotte.glancy',
        userId: '5762033151',
        filter: function(image) {
            return image.tags.indexOf('cinnamonrolls') >= 0;
        }
    });
    feed.run();

/*$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
*/
