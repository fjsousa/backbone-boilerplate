define([
  'underscore',
  'backbone'
], function(_, Backbone){

  var Users = Backbone.Collection.extend({
    url: '/users'
  });

  return Users;
});