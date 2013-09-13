App.Router.map(function () {
  this.resource('index', { path: '/' });
  this.resource('randomBeer', { path: '/randomBeer' });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('randomBeer');
  }
});

App.RandomBeerRoute = Ember.Route.extend({});
