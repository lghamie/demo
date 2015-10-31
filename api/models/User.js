/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name:{
      type: 'string',
      required: true
  	},
  	type: {
      type: 'string',
      enum: ['user', 'teacher'],
      required: true,
      defaultsTo: 'user',
  	},
  	email: {
      type: 'email',
      required: true
  	},
  	password: {
      type: 'string',
      required: true
  	},
    avatar : {
      type: 'string',
      defaultsTo: "img/avatars/sunny.png"
    },
    toJSON: function() {
        var obj = this.toObject();
        delete obj.password;
        return obj;
    }	  	
  }
};

