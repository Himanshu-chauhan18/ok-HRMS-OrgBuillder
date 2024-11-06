import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MeterGroupModule } from 'primeng/metergroup';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { ContainerComponent } from './layout/components/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,DropdownModule,InputTextModule,DialogModule,MeterGroupModule, CardModule,CommonModule,NavbarComponent,SidebarComponent,ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isSidebarClosed = false;
  title = 'okHRMS-Orgbuilder';
  isLargeScreen = window.innerWidth >= 1024; 
  isMediumScreen = window.innerWidth >= 768 && window.innerWidth < 1024; 
  isSmallScreen = window.innerWidth < 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.isLargeScreen = event.target.innerWidth >= 1024;
    this.isMediumScreen = event.target.innerWidth >= 768 && event.target.innerWidth < 1024;
    this.isSmallScreen = event.target.innerWidth < 768;
  }
  
  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}
