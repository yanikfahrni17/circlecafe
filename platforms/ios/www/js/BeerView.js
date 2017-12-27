var BeerView = function() {

      this.initialize = function() {
          this.$el = $('<div data-role="page"/>');
      };

      this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(BeerView.$el);
        return this;
      };
	  
	
      this.initialize();
  }