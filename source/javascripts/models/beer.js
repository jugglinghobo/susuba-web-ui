App.Beer = DS.Model.extend({
  name    : DS.attr('string'),
  alc     : DS.attr('number'),
  rating  : DS.attr('string'),
  tasted  : DS.attr('boolean'),
});
