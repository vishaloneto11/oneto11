import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  newServerName = ' ';
  newServercontent=' ';

  onAddServer(){
    console.log("hello")
  }
  onAddBlueprint(){
    console.log("hii")
  }
}
