import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardService } from './services/dashboard.service';
import { DashboardMetrics } from './model/dashboard-metrics';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  metrics!: DashboardMetrics;

  constructor(
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.metrics = this.dashboardService.getMetrics();
  }
}