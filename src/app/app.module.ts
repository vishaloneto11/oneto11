import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ContentyoutubeComponent } from './contentyoutube/contentyoutube.component';
import { NewdirectorComponent } from './newdirector/newdirector.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ContentyoutubeComponent,
    NewdirectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
