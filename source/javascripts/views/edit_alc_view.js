App.EditAlcView = Ember.TextField.extend({
  classNames: ['editingAlc'],

  insertNewline: function () {
    this.get('controller').acceptChanges();
  },

  focusOut: function () {
    this.get('controller').acceptChanges();
  },

  didInsertElement: function () {
    this.$().focus();
  }
});
