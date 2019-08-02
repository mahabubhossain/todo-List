import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routing} from "./app-routing.module";
import { AppComponent } from './app.component';
import { TeamViewComponent } from './component/team-view/team-view.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TeamViewComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    routing,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
