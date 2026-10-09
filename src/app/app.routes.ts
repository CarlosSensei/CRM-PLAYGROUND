import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { LayoutComponent } from './core/layout/layout';
import { HomeComponent } from './pages/home/home';
import { ClientListComponent } from './pages/clientes/client-list/client-list';
import { DashboardComponent } from './pages/dashboard/dashboard';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },   
      {
        path: 'clients',
        component: ClientListComponent
      },
      {
        path: 'quotes',
        loadComponent: () =>
          import('./pages/presupuestos/quote-list/quote-list')
            .then(m => m.QuoteListComponent)
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/pedidos/order-list/order-list')
            .then(m => m.OrderListComponent)
      },   
      {
        path: 'dashboard',
        component: DashboardComponent
      }
 

    ]
  }

];;
