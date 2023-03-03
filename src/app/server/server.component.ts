import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  topic = "DataBinding"
  name:string="old server";
  serverstatus = false
  randomserver:any = ' ';
  user:string ="new user";
  sname(){
    return this.name;
  }
  changefn(){
    this.name = "new server"
  }
  onupdateserver(event:any){
    this.randomserver = event.target.value;
  }



}
