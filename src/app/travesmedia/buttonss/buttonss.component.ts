import { Component ,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-buttonss',
  templateUrl: './buttonss.component.html',
  styleUrls: ['./buttonss.component.css']
})
export class ButtonssComponent implements OnInit {


  @Input() text:string;


  constructor(){

  }
  ngOnInit(): void {
      
  }
}
