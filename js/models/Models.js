define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var SomeModel = Backbone.Model.extend({
    urlRoot: '/someurl'
  });

  return SomeModel;

});
