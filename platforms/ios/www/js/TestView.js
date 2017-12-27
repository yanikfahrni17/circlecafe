var TestView = function() {
    this.initialize = function() {
        this.$el = $('<div data-role="page"/>');
        this.render();
    };
    this.render = function() {
        this.$el.html(this.template(sessions));
        return this;
    };
    this.initialize();
  }