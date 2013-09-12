App.Store = DS.Store.extend({
  adapter: 'App.SusubaAdapter'
});

App.SusubaAdapter = DS.FixtureAdapter.create();

//App.SusubaAdapter = DS.RESTAdapter.extend({
//  bulkCommit: false,
//  url : "http://localhost:3000",
//
//  serializer: DS.RESTSerializer.extend({
//
//    primaryKey: function(type) {
//      return '_id';
//    }
//  })
//});
