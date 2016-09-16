import { Component } from '@angular/core';
import { RoomComponent } from '../room/room.component';

@Component({
	moduleId: module.id,
    selector: 'admin-page',
    template: `
    			 
    				<!-- wygenerowanie pokoi -->
    				<div class="row">
	    				<room roomName="Salon"></room>
	    				<room roomName="Sypialnia"></room>
	    				<room roomName="Kuchnia"></room>
	    			</div>

	    			<div class="row">
	    				<room roomName="Łazienka"></room>
	    				<room roomName="Pokój 1"></room>
	    				<room roomName="Pokój 2"></room>
	    			</div>

	    			<div class="row">
	    				
	    			</div>
	    		
    			`
})
export class AdminPageComponent {
	 
  	 constructor() { }

 }


