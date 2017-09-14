import { Component } from '@angular/core';

import {Hero} from './hero'

@Component({
  selector: 'my-app',
  template:  `<h1>Hello {{name}}</h1>
             <div>我来自<strong>{{address.province}}</strong>省{{address.city}}市</div>
             <click-me></click-me>
             <ul>
                <li *ngFor="let hero of heroes">
                  {{hero.name}}
                </li>
             </ul>
             <input type="text">
             `,
})
export class AppComponent  {
    name = 'Angular';
    address={
      province:"福建",
      city:"厦门"
    };
    heroes = [
      new Hero(1,"Windstorm"),
      new Hero(13,"Bombasto"),
      new Hero(15,"Magneta"),
      new Hero(20,"Tornado")
    ];
    myHero = this.heroes[0]
}


interface Person{
  name :String;
  age:number;
}

let semlinker:Person = {
  name:"semlinker",
  age:31
}
