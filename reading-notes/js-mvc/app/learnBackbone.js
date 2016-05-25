

var User = Backbone.Model.extend({
	'url':'/User'
})

var Users = Backbone.Collection.extend({
	comparator : function(user){
		return user.get("name");		
	}	
});

var users = new Users;

var user1 = new User({"name":"Heke"})
var user2 = new User({"name":"Tom"})


users.add(user1)
users.add(user2)

users.get(user1.cid) == user1

