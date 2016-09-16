import { AdminPageComponent } from './components/adminPage/adminPage.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
  },
  {
    path:'',
    component:LoginComponent,
  }
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);