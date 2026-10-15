import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface AppSettings {
  username: string;
  role: string;
  email: string;

  darkMode: boolean;

  currency: string;
  vatPercentage: number;

  emailNotifications: boolean;
  desktopNotifications: boolean;

  showRevenueWidget: boolean;
  showOrdersWidget: boolean;
  showClientsWidget: boolean;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css']
})
export class SettingsComponent implements OnInit {

  settings: AppSettings = {
    username: 'Carlos',
    role: 'Admin',
    email: 'admin@crmplayground.com',

    darkMode: false,

    currency: 'EUR',
    vatPercentage: 21,

    emailNotifications: true,
    desktopNotifications: false,

    showRevenueWidget: true,
    showOrdersWidget: true,
    showClientsWidget: true
  };

  ngOnInit(): void {
    this.loadSettings();
    this.applyTheme();
  }

  saveSettings(): void {
    localStorage.setItem(
      'settings',
      JSON.stringify(this.settings)
    );

    this.applyTheme();

    alert('Settings saved successfully');
  }

  loadSettings(): void {
    const savedSettings = localStorage.getItem('settings');

    if (savedSettings) {
      this.settings = JSON.parse(savedSettings);
    }
  }

  applyTheme(): void {

    console.log('DArk MOde:', this.settings.darkMode);

    if (this.settings.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  resetSettings(): void {

    localStorage.removeItem('settings');

    this.settings = {
      username: 'Carlos',
      role: 'Admin',
      email: 'admin@crmplayground.com',

      darkMode: false,

      currency: 'EUR',
      vatPercentage: 21,

      emailNotifications: true,
      desktopNotifications: false,

      showRevenueWidget: true,
      showOrdersWidget: true,
      showClientsWidget: true
    };

    this.applyTheme();

    alert('Settings restored');
  }

  exportSettings(): void {

    const data = JSON.stringify(
      this.settings,
      null,
      2
    );

    const blob = new Blob(
      [data],
      { type: 'application/json' }
    );

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'crm-settings.json';
    a.click();

    window.URL.revokeObjectURL(url);
  }
}