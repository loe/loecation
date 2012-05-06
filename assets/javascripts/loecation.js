var Loecation = Backbone.View.extend({
  el: 'body',

  initialize: function (options) {
    this.model.on('change:loc', this.render, this);

    return this;
  },

  render: function () {
    this.model.dropMarkerOnCurrentLocation();

    return this;
  }
});
