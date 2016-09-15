import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
    			<div class="container-fluid text-center">
    				<div class="jumbotron">
    				  <h1> Regulator temperatury </h1>
    				</div>
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
	    		</div>

    `
})



export class AppComponent { }
