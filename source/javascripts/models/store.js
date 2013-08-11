App.Store = DS.Store.extend({
  revision  : 12,
  adapter   : 'App.SusubaAdapter'
});

App.LSAdapter = DS.LSAdapter.extend({
  namespace : 'beers-emberjs'
});

App.SusubaAdapter = DS.RESTAdapter.extend({
  url : "http://localhost:3000",
  serializer: DS.JSONSerializer.extend({
    extract: function(loader, json, type, record) {
      var root = this.rootForType(type);

      this.sideload(loader, type, json, root);
      this.extractMeta(loader, type, json);

      if (json[root]) {
        if (record) { loader.updateId(record, json[root]); }
        this.extractRecordRepresentation(loader, type, json[root]);
      } else {
        Ember.Logger.warn("Extract requested, but no data given for " + type + ". This may cause weird problems.");
      }
    },

    extractMany: function(loader, json, type, records) {
      var root = this.rootForType(type);
      root = this.pluralize(root);
      json = this.transform(root, json);

      if (json[root]) {
        var objects = json[root], references = [];
        if (records) { records = records.toArray(); }

        for (var i = 0; i < objects.length; i++) {
          if (records) { loader.updateId(records[i], objects[i]); }
          var reference = this.extractRecordRepresentation(loader, type, objects[i]);
          references.push(reference);
        }

        loader.populateArray(references);
      }
    },

    transform: function(root, json) {
      container = []
      json.forEach(function(json_object) {
        object = JSON.parse(json_object);
        object.id = object._id.$oid;
        delete object._id;
        container.push(object);
      });
      json = {}
      json[root] = container;
      return json;
    }

  }),
});

