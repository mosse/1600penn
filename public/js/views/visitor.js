var app = app || {};

app.VisitorView = Backbone.View.extend({
  tagName: 'div',
  className: 'visitorContainer',
  template: _.template( $('#visitorTemplate').html()),

  render: function(){
    this.$el.html( this.template( this.model.toJSON() ));

    return this;
  }
});