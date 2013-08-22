App.BeersController = Ember.ArrayController.extend({
  createBeer: function () {
    // Get the beer name set by the "New Beer" text field
    var name = this.get('newName');
    if (!name.trim()) { return; }

    // Create the new Beer model
    var beer = App.Beer.createRecord({
      name: name,
      alc: 4.6,
      rating: "5",
      tasted: false
    });

    // Clear the "New Beer" text field
    this.set('newName', '');

    // Save the new model
    beer.save();
  },

  remaining: function() {
    return this.filterProperty('tasted', false).get('length');
  }.property('@each.tasted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'beer' : 'beers';
  }.property('remaining'),

  hasTasted: function() {
    return this.get('tasted') > 0;
  }.property('tasted'),

  tasted: function() {
    return this.filterProperty('tasted', true).get('length');
  }.property('@each.tasted'),

  clearTasted: function() {
    var tasted = this.filterProperty('tasted', true);
    tasted.invoke('deleteRecord');

    this.get('store').commit();
  },

  allAreTasted: function(key, value) {
    if (value === undefined) {
      return !!this.get('length') && this.everyProperty('tasted', true);
    } else {
      this.setEach('tasted', value);
      this.get('store').save();
      return value;
    }
  }


});
