
function User(login, passwd, email) {
	this.login = login;
	this.passwd = passwd;
	this.email = email;
	
	this.changeData = function (key, data) {
		this[key] = data; // этот метод меняет данные, ХОТЯ ничто не мешает нам поменять их напрямую, ведь это публичные свойства объекта
    }
}



// var vasya = new User("Вася", "123", "v@google.com");
// var petya = new User("Петя", "123", "p@google.com");

var users =[];

$(document).on('ready', function(){
	_.getUserInfo("#getUserInfo", function(info_my){

		users.push(new User(info_my.login, info_my.passwd, info_my.email));
		console.dir(users);

		/// / var elemCont = $("#container");

		// for(key in info_my){
		// 	elemCont.append("<h2>" + info_my[key] + "</h2>");

		// }
	});


	$(".show").on("click", function () {

		$("#container").html("<ul></ul>");

        for(var i=0; i < users.length; i++) {

			$("#container").append("<li><span>Login: </span><span>" + users[i].login + "</span></br>" +
                "<span>Password: </span><span>" + users[i].passwd + "</span></br>"+
                "<span>Email: </span><span>" + users[i].email + "</span></li>");
		}
    })
})