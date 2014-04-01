define([
  'underscore',
  'backbone'
], function(_, Backbone){

  var SomeCollection = Backbone.Collection.extend({
    url: '/someurl'
  });

  return SomeCollection;
});