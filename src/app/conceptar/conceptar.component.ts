import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conceptar',
  templateUrl: './conceptar.component.html',
  styleUrls: ['./conceptar.component.css']
})
export class ConceptarComponent implements OnInit {
  sample: any = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  sampletwo: any = [11, 12, 13, 14, 15, 16, 17, 18, 19]
  worker = [
    {
      name: "sonu",
      id: 1,

    },
    {
      name: "monu",
      id: 2
    },
    {
      name: "monu",
      id: 2
    },
    {
      name: "komu",
      id: 3
    }, {
      name: "ross",
      id: 4
    }, {
      name: "ishu",
      id: 5
    },
  ]

  ngOnInit(): void {
    console.log(this.sample)
    let index = this.sample.indexOf(9);
    console.log("This is indexOf :", index)
    let work = this.worker.findIndex(item => item.id == 5)
    console.log("This is Array of object ", this.worker)
    console.log("This is Array of object ", work)
    let ltindex = this.sample.lastIndexOf(5)
    console.log(ltindex)

    let finalarray = this.sample.concat(this.sampletwo)

    console.log("Final Array : " + finalarray)
    console.log("Final Array with join : " + finalarray.join("-"))
    console.log("push the element: " + finalarray.push("vishal"))
    console.log("push the element: " + finalarray)
    console.log("push the element: " + finalarray.push("kumar"))
    console.log("push the element: " + finalarray)
    let look = finalarray.indexOf("vishal")
    console.log(look)
    console.log("popout kumar ", finalarray.pop("kumar"))
    console.log("popout kumar ", finalarray.unshift(555))
    console.log("push the element: " + finalarray)




    console.log(finalarray)


  }




}
