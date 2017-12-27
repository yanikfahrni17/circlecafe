var HomeView = function (service) {
	var sessionListView;
	var testView;	
	this.initialize = function () {
		// Define a div wrapper for the view (used to attach events)
		this.$el = $('<div data-role="page"/>');
		this.$el.on('keyup', '.search-key', this.findByName);
		sessionListView = new SessionListView();
		testView = new TestView();
		this.render();
	};
	
    this.render = function() {
        this.$el.html(this.template());
        //$('.content', this.$el).html(sessionListView.$el);
		$('.content', this.$el).html(testView.$el);
        return this;
    };
	
	this.findByName = function() {
		service.findByName($('.search-key').val()).done(function(sessions) {
			sessionListView.setSessions(sessions);
		});

		
	};

	this.initialize();  

}