import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
    selector: 'login',
    template: `
    			 <div class="container">

				      <form class="form-signin">
				        <h2 class="form-signin-heading">Zaloguj się do systemu</h2>
				        <label for="inputUser" class="sr-only">Nazwa użytkownika</label>
				        <input type="user" id="inputUser" class="form-control" placeholder="Nazwa użytkownika" required autofocus #username>
				        <label for="inputPassword" class="sr-only">Hasło</label>
				        <input type="password" id="inputPassword" class="form-control" placeholder="Hasło" required #password>
				        <button (click)="authentication(username.value,password.value)" class="btn btn-lg btn-primary btn-block" type="submit">Zaloguj</button>
				      </form>

    			 </div> <!-- /container -->
    			`
})
export class LoginComponent {
	 username:string="admin";
	 password:string="admin";
  	 constructor( private router:Router) { }
  	 
  	 authentication(username:string,password:string){
  	 	if(username==this.username && password==this.password)
  	 	{
  	 		this.router.navigate(['/admin']);
  	 	}
  	 	else
  	 	{
  	 		alert("Podano złe dane");
  	 	}
  	 }
 }


