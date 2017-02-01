var Users = require("./users"); // так тоже можно. исполняется файл ./users/index.js
var server = require("./server");
Users("john", "email@email.com");
Users("jack", "jack@gmail.com");
