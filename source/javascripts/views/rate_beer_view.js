App.RateBeerView = Ember.Select.extend({
  classNames: ["rating"],

  content: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],

  change: function() {
    console.log(this);
    this.get('controller').rateBeer();
  }

});
