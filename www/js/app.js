// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
	HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
	SessionListView.prototype.template = Handlebars.compile($("#session-list-tpl").html());
	SessionView.prototype.template = Handlebars.compile($("#session-tpl").html());
	BeerView.prototype.template = Handlebars.compile($("#beer-tpl").html());
	InfoView.prototype.template = Handlebars.compile($("#info-tpl").html());
	TestView.prototype.template = Handlebars.compile ($("#header").html());
    var service = new ConferenceService();
	var slider = new PageSlider($('body'));
	service.initialize().done(function () {
      router.addRoute('', function() {
			slider.slidePage(new HomeView(service).render().$el);
			$('.beerBtn').click(function(){
				location.hash = "beer";
			});	
			$('.infoBtn').click(function(){
				location.hash = "info";
			});	
			$('.content').on( "swipeleft", function(event){
				location.hash = "beer";
			});
      });
      router.addRoute('sessions/:id', function(id) {
          service.findById(parseInt(id)).done(function(session) {
              slider.slidePage(new SessionView(session).render().$el);
          });
			$('.content').on( "swiperight", function(event){
				location.hash = "";
			});	
      });
	  router.addRoute('beer', function() {
		  slider.slidePage(new BeerView().render().$el);
			$('.beerBtn').click(function(){
				location.hash = "beer";
			});	
			
			$('.infoBtn').click(function(){
				location.hash = "info";

			});	
			$('.homeBtn').click(function(){
				location.hash = "";
			});
			$('.beer').on( "swiperight", function(event){
				location.hash = "";
			});	

      });
      router.addRoute('info', function() {
		  slider.slidePage(new InfoView().render().$el);
			$('.homeBtn').click(function(){
				location.hash = "";
			});
			$('.beerBtn').click(function(){
				location.hash = "beer";
			});	
			$('.infoBtn').click(function(){
				location.hash = "info";
			});
			$('.info').on( "swiperight", function(event){
				location.hash = "";
			});				
      });
      router.start();
  });

    /* --------------------------------- Event Registration -------------------------------- */
/*
    document.addEventListener('deviceready', function () {
		FastClick.attach(document.body);
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);

*/

    /* ---------------------------------- Local Functions ---------------------------------- */
/*
	$(window).on('beforeunload', function (event) {
    		if( !$('.search-key').val()) {

		var fullNameBlank = sessions[2].date + " " + sessions[2].eventName;

		alert(fullNameBlank);

	}
});

    if( !$('.search-key').val() ) {
		$('.content').append(theTemplate(sessions));
    }

	
	
	var beer = $('.beerBtn');
	beer.click(function(){
		slider.slidePage(new BeerView().render().$el);
	});
	
	var info = $('.infoBtn');
	info.click(function(){
		slider.slidePage(new InfoView().render().$el);
	});
	*/
}());