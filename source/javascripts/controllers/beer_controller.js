App.BeerController = Ember.ObjectController.extend({

 tasted: function(key, value) {
    var model = this.get('model');

    if (value === undefined) {
      // property being used by a getter
      return model.get('tasted');
    } else {
      // property being used as a setter
      model.set('tasted', value);
      model.save();
      return value;
    }
  }.property('model.tasted'),

  rateBeer: function() {
    var beer = this.get('model');
    beer.save();
  },

  isEditing: false,

  editBeer: function() {
    this.set('isEditing', true);
  },

  removeBeer: function() {
    var beer = this.get('model');
    beer.deleteRecord();
    beer.save();
  },

  acceptChanges: function() {
    // fix for various bowsers which fire focusOut event after submitting with
    // newline
    if(this.get('model').get('isSaving')) return;

    this.set('isEditing', false);
    this.get('model').save();
  }

});
