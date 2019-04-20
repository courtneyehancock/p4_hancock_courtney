//Instafeed
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
