define([
  'jquery',
  'underscore',
  'backbone',
  'views/View'
], function($, _, Backbone, View) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',
      'resource': 'resource',
      'resource/:id' : 'resource'
    }
  });
  
  var initialize = function(){

    var appRouter = new AppRouter();

    appRouter.on('route:home', homeRoute);

    function homeRoute() {
      var view = new View();
      view.render();
    }

    //...

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
