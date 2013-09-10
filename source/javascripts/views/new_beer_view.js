App.NewBeerView = Ember.View.extend({

  beerBinding: 'App.Beer',

  insertNewline: function () {
    this.get('controller').createBeer();
  },
})
