var userDb = require("./userDb"); // подтягиваем json
var Users = require("./userClass")(userDb);

function createUser(name, email){
	var user = new Users(name, email);
	console.log(user);
	console.log(user.checkEmail());
}
module.exports = createUser;