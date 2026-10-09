export interface DashboardMetrics {

  totalQuotes: number;

  totalOrders: number;

  conversionRate: number;

  totalRevenue: number;

  averageAcceptanceDays: number;

  cancellationRate: number;

  quotesByMonth: MonthlyData[];

  ordersByMonth: MonthlyData[];

  revenueByMonth: MonthlyData[];
}

export interface MonthlyData {
  month: string;
  value: number;
}
