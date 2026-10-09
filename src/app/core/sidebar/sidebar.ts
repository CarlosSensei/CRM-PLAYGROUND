import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {

  userName = 'Carlos';

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      route: '/home',
      icon: '🏠'
    },
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: '📊'
    },
    {
      label: 'Clientes',
      route: '/clients',
      icon: '👤'
    },
    {
      label: 'Presupuestos',
      route: '/quotes',
      icon: '📝'
    },
    {
      label: 'Pedidos',
      route: '/orders',
      icon: '📋'
    },
    {
      label: 'Configuración',
      route: '/settings',
      icon: '⚙️'
    }
  ];

  @Output() expandedChange = new EventEmitter<boolean>();

  onMouseEnter() {
    this.expandedChange.emit(true);
  }

  onMouseLeave() {
    this.expandedChange.emit(false);
  }

}