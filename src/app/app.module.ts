import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ContentyoutubeComponent } from './contentyoutube/contentyoutube.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ContentyoutubeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
