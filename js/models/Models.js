//Models are the heart of any JavaScript application, containing the interactive
//data as well as a large part of the logic surrounding it: conversions,
//validations, computed properties, and access control.

define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var SomeModel = Backbone.Model.extend({
    urlRoot: '/someurl'
  });

  return SomeModel;

});
