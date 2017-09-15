/**
 * Created by smileMAC on 9/15/17.
 */
import {Component, OnInit} from "@angular/core";

@Component({
  selector:"my-heroes",
  template:`
              <div>我是heroesTemplate模板</div>
           `
})


export class HeroesComponent implements OnInit{
  ngOnInit(): void {
      console.log("今天是 星期五...");
  }

}
