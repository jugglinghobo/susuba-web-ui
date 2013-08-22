App.NewBeerView = Ember.TextField.extend({

  insertNewline: function () {
    this.get('controller').createBeer();
  },

})
