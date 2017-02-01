function wrap(userDb){

	function Users(name, email){
		this.name = name;
		this.email = email;
	}

	Users.prototype.hello = function(){
		console.log("User " + this.name + " says Hello!");
	}

	Users.prototype.checkEmail = function(){

		// console.log(userDb); // выводим наш json
		console.log(userDb, this.email); // выводим наш json
		for (var i = 0; i < userDb.length; i++) {
			console.log(userDb[i].email);
			if(userDb[i].email === this.email){
				return true; // Если совпало хоть с одним эмейлом из базы, то true
			}
			return false;
		}

	}
	return Users;
}
module.exports = wrap;