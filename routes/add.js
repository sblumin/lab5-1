var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var name = request.query.name;
	var description = request.query.description;
	var newFriend = {
		"name": name,
		"description": description,
		"imageURL": "https://lorempixel.com/400/400/people"
	}
	console.log(newFriend);
	data.friends.push(newFriend);
	response.render('index', data);
 }