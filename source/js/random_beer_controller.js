App.RandomBeerController = Ember.Controller.extend({

  randomBeer: function() {
    var self = this, url = "http://localhost:3000/beers/random"
    Ember.$.get(url).then(function(data) {
      console.log(self);
      self.set('model', data.beer);
    });
  },

  name: function() {
    if (this.get('model') !== undefined) {
      return this.get('model').name;
    } else {
      return "";
    }
  }.property('model')
});
