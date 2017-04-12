import {Component, View} from "angular2/core";

@Component({
   // selector: 'my-app' // здесь идет привязка
   selector: 'hello-app'
})

@View({
  template: '<h2>Hello World !! {{name}}</h2>'
})

export class MyHelloWorldClass {
	name: "jogn"
}