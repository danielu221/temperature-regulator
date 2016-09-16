import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminPageComponent } from './components/adminPage/adminPage.component';
import { AppComponent }  from './app.component';
import { RoomComponent } from './components/room/room.component';
import { LoginComponent } from './components/login/login.component';
import { routing } from './app.routes'; // ROUTING HERE!


@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent,RoomComponent,LoginComponent,AdminPageComponent],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
