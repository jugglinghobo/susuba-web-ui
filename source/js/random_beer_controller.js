App.RandomBeerController = Ember.Controller.extend({

  actions: {
    randomBeer: function() {
      //var backend = "http://localhost:3000";
      var backend = "http://susuba.herokuapp.com";
      var url = backend+"/beers/random";
      var self = this;
      Ember.$.get(url).then(function(data) {
        self.set('model', data.beer);
      });
    },
  },

  name: function() {
    if (this.get('model') !== undefined) {
      return this.get('model').name;
    } else {
      return "";
    }
  }.property('model'),

  alc: function() {
    if (this.get('model') !== undefined) {
      return this.get('model').alc + "%";
    } else {
      return "";
    }
  }.property('model')
});
