import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ContentyoutubeComponent } from './contentyoutube/contentyoutube.component';
import { NewdirectorComponent } from './newdirector/newdirector.component';
import { TravesmediaComponent } from './travesmedia/travesmedia.component';

import { ButtonssComponent } from './travesmedia/buttonss/buttonss.component';
import { UdthreeComponent } from './udthree/udthree.component';
import { RecipesComponent } from './udthree/recipes/recipes.component';
import { RecipesListComponent } from './udthree/recipes/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './udthree/recipes/recipe-details/recipe-details.component';
import { RecipeItemsComponent } from './udthree/recipes/recipes-list/recipe-items/recipe-items.component';
import { ShoppinglistComponent } from './udthree/shoppinglist/shoppinglist.component';
import { ShoppingEditComponent } from './udthree/shoppinglist/shopping-edit/shopping-edit.component';
import { UdheaderComponent } from './udthree/udheader/udheader.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ContentyoutubeComponent,
    NewdirectorComponent,
    TravesmediaComponent,
    ButtonssComponent,
    UdthreeComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeItemsComponent,
    ShoppinglistComponent,
    ShoppingEditComponent,
    UdheaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
