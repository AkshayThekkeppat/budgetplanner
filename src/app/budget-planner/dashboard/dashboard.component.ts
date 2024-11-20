import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [CommonModule,MatIconModule,RouterModule,RouterOutlet,SidenavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  lastMonthIncome=["January:$1000","February:$4000"]
  currentMonthIncome="$200"
  lastMonthExpense=["January:$1000","February:$4000"]
  currentMonthExpense="$200"


  todoTransactions = [
    { description: "pay bill" },
    { description: "submit monthly report" },
    { description: "pay bill" },
    { description: "submit monthly report" }
];

  totalCurrentMonthIncome="$2000";
  totalCurrentMonthExpense="$1000";

}


