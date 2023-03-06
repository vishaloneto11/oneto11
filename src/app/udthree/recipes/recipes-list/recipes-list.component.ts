import { Component } from '@angular/core';
import { recipe } from '../recipes.modal';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent { 
 recipe :recipe[] =[
    new recipe("A Test Recipe","this is momo","https://unsplash.com/photos/Vj-J5xNjnxA")

 ];

}
