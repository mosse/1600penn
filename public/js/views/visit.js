var app = app || {};

app.VisitView = Backbone.View.extend({
  tagName: 'div',
  className: 'visitContainer',
  template: _.template( $('#visitTemplate').html()),

  render: function(){
    this.$el.html( this.template( this.model.toJSON() ));

    return this;
  }
});