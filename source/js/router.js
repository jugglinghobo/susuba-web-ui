App.Router.map(function () {
  this.route('index', { path: '/' });
  this.resource('beer', {path: '/random' });
});

App.IndexRoute = Ember.Route.extend();

App.BeerRoute = Ember.Route.extend({
  setupController: function(controller, beer) {
    controller.set('model', beer);
  }
});
