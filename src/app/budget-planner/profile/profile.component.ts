import { Component } from '@angular/core';
import { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';
import { Router,RouterModule,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SidenavbarComponent,RouterModule,RouterOutlet,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
