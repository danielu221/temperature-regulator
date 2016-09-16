import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div class="container-fluid text-center">
    				<div class="jumbotron">
    				  <h1> Regulator temperatury </h1>
    				</div>
    		
	    			<router-outlet></router-outlet>
	    	   </div>


    `
})




export class AppComponent { }
