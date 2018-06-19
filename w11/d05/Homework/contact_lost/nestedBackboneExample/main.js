console.log("hello")



var Package = Backbone.Model.extend({
    relations: {
      "documents": Backbone.Collection
    }
});

var pkg = new Package();


pkg.set({
  "documents": [
    {id:1, name: "Document 1"},
    {id:2, name: "Document 2"},
  ],
  "packageTitle": "My Package"
});