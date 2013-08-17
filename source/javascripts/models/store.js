App.Store = DS.Store.extend({
  revision  : 12,
  adapter   : 'App.SusubaAdapter'
});

App.LSAdapter = DS.LSAdapter.extend({
  namespace : 'beers-emberjs'
});

App.SusubaAdapter = DS.RESTAdapter.extend({
  bulkCommit: false,
  url : "http://localhost:3000",

  serializer: DS.RESTSerializer.extend({

    primaryKey: function(type) {
      return '_id';
    }
  }),
});

