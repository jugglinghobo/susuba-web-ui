App.Router = Ember.Router.extend({
  location: 'none'
});
App.Router.map(function() {
  this.resource('beers', {path: '/' }, function() {
    this.route('tasted');
    this.route('untasted');
  });
});

App.BeersRoute = Ember.Route.extend({
  model: function() {
    return App.Beer.find();
  }
});

App.BeersIndexRoute = Ember.Route.extend({
  model: function() {
    return App.Beer.find();
  }
});

App.BeersTastedRoute = Ember.Route.extend({
  model: function(){
    return App.Beer.filter(function (beer) {
      if (beer.get('tasted')) { return true; }
    });
  },
  renderTemplate: function(controller){
    this.render('beers/index', {controller: controller});
  }
});

App.BeersUntastedRoute = Ember.Route.extend({
  model: function(){
    return App.Beer.filter(function (beer) {
      if (!beer.get('tasted')) { return true; }
    });
  },
  renderTemplate: function(controller){
    this.render('beers/index', {controller: controller});
  }
});
