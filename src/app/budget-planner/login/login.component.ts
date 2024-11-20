import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router,RouterModule,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: any;
  registerForm:any;
  activeForm:'login' |'register' = 'login';
  toggleForm(form:'login' | 'register'){
    console.log("toggle")
    this.activeForm=form;

}
constructor(private router: Router) {}
dashboard(){
  this.router.navigate(['/dashboard']);
}
}