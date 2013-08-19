App.Store = DS.Store.extend({
  revision  : 12,
  adapter   : 'App.SusubaAdapter'
});

App.SusubaAdapter = DS.RESTAdapter.extend({
  bulkCommit: false,
  url : "http://localhost:3000",
  
  serializer: DS.RESTSerializer.extend({

    primaryKey: function(type) {
      return '_id';
    }
  }),

  updateRecord: function(store, type, record) {
    var id, root, adapter, data;

    id = Ember.get(record, 'id');
    root = this.rootForType(type);
    adapter = this;

    data = {};
    data[root] = this.serialize(record);

    return this.ajax(this.buildURL(root, id, record), "PUT",{
      data: data
    }).then(function(json){
      // wrap received json in { '<root>': [json] }
      wrapper = {}
      wrapper[root] = [json];
      json = wrapper;
      adapter.didUpdateRecord(store, type, record, json);
    }, function(xhr) {
      adapter.didError(store, type, record, xhr);
      throw xhr;
    }).then(null, DS.rejectionHandler);
  },


});

