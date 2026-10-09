import { DashboardMetrics } from "../model/dashboard-metrics";

export const DASHBOARD_MOCK: DashboardMetrics = {

  totalQuotes: 125,

  totalOrders: 83,

  conversionRate: 66.4,

  totalRevenue: 42750,

  averageAcceptanceDays: 4.2,

  cancellationRate: 8.5,

  quotesByMonth: [
    { month: 'Ene', value: 12 },
    { month: 'Feb', value: 15 },
    { month: 'Mar', value: 10 },
    { month: 'Abr', value: 18 },
    { month: 'May', value: 22 },
    { month: 'Jun', value: 20 },
    { month: 'Jul', value: 8 },
    { month: 'Ago', value: 5 },
    { month: 'Sep', value: 15 }
  ],

  ordersByMonth: [
    { month: 'Ene', value: 7 },
    { month: 'Feb', value: 10 },
    { month: 'Mar', value: 8 },
    { month: 'Abr', value: 11 },
    { month: 'May', value: 15 },
    { month: 'Jun', value: 13 },
    { month: 'Jul', value: 6 },
    { month: 'Ago', value: 3 },
    { month: 'Sep', value: 10 }
  ],

  revenueByMonth: [
    { month: 'Ene', value: 3200 },
    { month: 'Feb', value: 4100 },
    { month: 'Mar', value: 2800 },
    { month: 'Abr', value: 5300 },
    { month: 'May', value: 7200 },
    { month: 'Jun', value: 6800 },
    { month: 'Jul', value: 2700 },
    { month: 'Ago', value: 1800 },
    { month: 'Sep', value: 4850 }
  ]
};
