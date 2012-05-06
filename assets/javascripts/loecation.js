var Loecation = {
  initialize: function () {
    this.map = new Map();

    return this;
  }
};

window.onload = function () {
  window.loecation = Loecation.initialize();
  loecation.map.drawLocation();
};
