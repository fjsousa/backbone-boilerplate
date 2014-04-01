define([
  'jquery',
  'underscore',
  'backbone',
  'models/UserEditModel',
  'text!templates/UserEditTemplate.html'
], function($, _, Backbone, UserEditModel, UserEditTemplate){

  var EditUserView = Backbone.View.extend({
    el: '.page',

    render: function(options){ 

      var that = this;
      if(options.id){
        this.user = new UserEditModel({id: options.id});
        this.user.fetch({  //GET users/123344
          success:function(user){
            var template = _.template(UserEditTemplate, {user: user});
            that.$el.html(template);
          }
        });
      }
      else {
        var template = _.template(UserEditTemplate, {user:null})
        this.$el.html(template);
      }
    },
    events: {
      'submit .edit-user-form': 'saveUser',
      'click .delete': 'deleteUser' 
    },
    saveUser: function(ev){

      var userDetails = $(ev.currentTarget).serializeObject();
      var user = new UserEditModel();
      user.save(userDetails,{
        success: function(user){
          Backbone.history.navigate('', {trigger:true});
        }
      })
      return false;
    },

    deleteUser: function (ev) {
      this.user.destroy({
        success: function () {
          Backbone.history.navigate('', {trigger:true}); 
        }
      })
      return false;
    } 
  });

  return EditUserView;
});
