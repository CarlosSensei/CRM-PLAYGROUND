import { Injectable } from '@angular/core';
import { DashboardMetrics } from '../model/dashboard-metrics';
import { DASHBOARD_MOCK } from '../model/dashboard.mock';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getMetrics(): DashboardMetrics {
    return DASHBOARD_MOCK;
  }

}