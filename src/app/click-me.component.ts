/**
 * Created by smileMAC on 9/13/17.
 */
import {Component} from "@angular/core"


@Component({
  selector:'click-me',
  template:`<button (click)="onClickMe()">click me!</button>
           <span style="color:#f00;">{{clickMessage}}</span>
           `
})
export class ClickMeComponent{
   clickMessage = "";
   onClickMe(){
     this.clickMessage = 'You are my hero~~~~!'
   }
}


