App.Router.map(function () {
  this.route('index', { path: '/' });
  this.resource('randomBeer', { path: '/random' });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo("randomBeer");
  }
});

App.RandomBeerRoute = Ember.Route.extend({
});
