App.Beer = DS.Model.extend({
  name    : DS.attr('string'),
  rating  : DS.attr('string'),
  tasted  : DS.attr('boolean')
});
