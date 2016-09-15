import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoomComponent } from './components/room/room.component';
import { AppComponent }  from './app.component';

//import {LoginComponent} from './components/login/login.component';

//import {Routes,ROUTER_DIRECTIVES} from '@angular/router';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,RoomComponent],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
