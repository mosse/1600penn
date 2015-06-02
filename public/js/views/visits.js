var app = app || {};

app.VisitsView = Backbone.View.extend({
  el: '#visits',

  initialize: function( initialVisits ) {
    this.collection = new app.Visits( initialVisits );
    this.render();
  },

  render: function(){
    this.collection.each(function( visit ) {
      this.renderVisit( visit );
    }, this );
  },

  renderVisit: function (item) {
    var visitView = new app.VisitView({
      model: item
    });
    this.$el.append( visitView.render().el );
  }
});