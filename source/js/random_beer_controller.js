App.RandomBeerController = Ember.Controller.extend({

  actions: {
    randomBeer: function() {
      var beers = App.Beer.FIXTURES;
      var random_index = Math.floor((Math.random()*beers.length-1)+1);
      var beer = beers[random_index];
      this.set('model', beer);
      return beer;
    },
  },

  name: function() {
    if (this.get('model') !== undefined) {
      return this.get('model').name;
    } else {
      return "";
    }
  }.property('model')
});
