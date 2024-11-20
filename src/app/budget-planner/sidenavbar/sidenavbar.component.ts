import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.css'
})
export class SidenavbarComponent {
isSlideOut=true;
constructor(private router: Router){}
  toggleSlideOut(){
    this.isSlideOut=!this.isSlideOut;
    console.log(this.isSlideOut)
  }
  dashboard(){
    this.router.navigate(['/dashboard']);
  }
  profile(){
    this.router.navigate(['/profile']);
  }
 
logout(){
  this.router.navigate(['']);
}
  }


