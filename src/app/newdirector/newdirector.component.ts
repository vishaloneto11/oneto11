import { Component } from '@angular/core';

@Component({
  selector: 'app-newdirector',
  templateUrl: './newdirector.component.html',
  styleUrls: ['./newdirector.component.css']
})
export class NewdirectorComponent {
  status:boolean =false;

  sname :string = "Name"

  onaddserver(server:any){
    this.sname = server.value;
    this.status=true;

  }

}
