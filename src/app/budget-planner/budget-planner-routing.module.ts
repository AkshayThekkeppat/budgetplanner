import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'sidenavbar',component:SidenavbarComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
