import { Component ,Input } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'room',
    template: `
    			<div class="col-md-4 col-xs-6 col-sm-6">
    			   <div class="room">
    			   			<p> Aktualna temperatura: </p>
    			   			<div class="numberCircle"> {{currentTemperature}} <sup>0 C</sup></div>
    			   			<p> Ustawiona temperatura: </p>
	    					<div *ngIf="enabled" class="numberCircle"> {{temperature}} <sup>0 C</sup></div>
	    					<div *ngIf="!enabled" class="regulatorOff"> OFF </div>
	    					<p *ngIf="temperature>currentTemperature && enabled"  [ngStyle]="{'color': 'red'}"> Trwa grzewanie...<p>
	    					<p *ngIf="temperature<currentTemperature && enabled" [ngStyle]="{'color': 'blue'}"> Trwa chłodzenie...<p>
	    					<p *ngIf="temperature==currentTemperature"> <p>
	    					<h2>{{roomName}}</h2>
	    					<button (click)="lowerTemp()" type="button" class="btn btn-primary btn-lg">-</button>
	    					<button *ngIf="enabled" (click)="turnOff()" type="button" class="btn btn-default btn-lg">{{status}}</button>
	    					<button *ngIf="!enabled" (click)="turnOn()" type="button" class="btn btn-default btn-lg">{{status}}</button>
	    					<button (click)="higherTemp()" type="button" class="btn btn-danger btn-lg">+</button>
	    		   </div>
	    		</div>
    			`
})
export class RoomComponent {
	 currentTemperature:number=21;
	 temperature:number = 24;
	 maxTemp:number=40;
	 minTemp:number=18;
	 status:string="OFF";
	 defaultTemp:number =24;

	 public enabled=true;
	 @Input() roomName:string = "";

	 	higherTemp(){
	 		if(this.enabled)
	 		{
		 		if(this.temperature>=this.maxTemp)
		 		{
		 			alert("Przekroczono maksymalną temperaturę.");
		 		}
		 		else
		 		{
		 			this.temperature++;
		 	    }
		 	}
	 	}

	 	lowerTemp(){
	 		if(this.enabled)
	 		{
		 		if(this.temperature <= this.minTemp )
		 		{
		 			alert("Osiągnięto minimalną temperaturę ogrzewania.");
		 		}
		 		else
		 		{
		 			this.temperature--;
		 		}
	 		}
	 	}

	 	turnOff(){
	 		this.enabled=false;
	 		this.status="ON";

	 	}
	 	turnOn(){
	 		this.enabled=true;
	 		this.status="OFF";
	 		this.temperature=this.defaultTemp;
	 	}

	 	/*if(this.temperature>this.currentTemperature)
	 	{
	 		this.operation="Ogrzewanie...";
	 	}
	 	else if(this.temperature>this.currentTemperature)
	 	{
	 		this.operation="Chłodzenie...";
	 	}
	 	else if(this.temperature==this.currentTemperature)
	 	{
	 		this.operation="";
	 	}*/


  	 constructor() { }

 }


