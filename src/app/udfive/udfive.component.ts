import { Component } from '@angular/core';

@Component({
  selector: 'app-udfive',
  templateUrl: './udfive.component.html',
  styleUrls: ['./udfive.component.css']
})
export class UdfiveComponent {

  serverElements = [{ type: 'Server', name: 'Testserver', content: 'Just a Test!' }];

  onServerAdded() {
    this.serverElements.push()
  }
  onBlueprintAdded() {
    console.log("hii")
  }

}
