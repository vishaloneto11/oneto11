import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contentyoutube',
  templateUrl: './contentyoutube.component.html',
  styleUrls: ['./contentyoutube.component.css']
})
export class ContentyoutubeComponent {
   username :string ="Enter Username"

   userlist :any =[];

   onclickfn(user:any){
    if(user.value.length>0 && user.value != ' '){
      this.userlist.push(user.value);
      user.value=' ';
    }
    else{
      window.alert("Please Enter Userdetails")
    }
   
  }
  removefn(index:any){
    this.userlist.splice(index,1)

  }
  
}
