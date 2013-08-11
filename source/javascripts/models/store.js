App.Store = DS.Store.extend({
  revision  : 12,
  adapter   : 'App.SusubaAdapter'
});

App.LSAdapter = DS.LSAdapter.extend({
  namespace : 'beers-emberjs'
});

App.SusubaAdapter = DS.RESTAdapter.extend({
  url : "http://localhost:3000",

  transform: function(json) {
    beers = []
    json.forEach(function(beer) {
      obj = JSON.parse(beer);
      obj.id = obj._id;
      delete obj._id;
      beers.push(obj);
    });
    json = JSON.stringify({beers: beers});
    console.log(json);
    return json;
  },
  
  findAll: function(store, type, since) {
    var root, adapter;

    root = this.rootForType(type);
    adapter = this;

    return this.ajax(this.buildURL(root), "GET",{
      data: this.sinceQuery(since)
    }).then(function(json) {
      json = adapter.transform(json);
      adapter.didFindAll(store, type, json);
    }).then(null, DS.rejectionHandler);
  }
});
