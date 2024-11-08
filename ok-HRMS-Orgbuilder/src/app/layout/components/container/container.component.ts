import { Component, EventEmitter, HostListener, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass } from '@angular/common';
import { MainComponent } from "../main/main.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NavbarComponent, NgClass, MainComponent, SidebarComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent {
  @Input() isSidebarClosed: boolean = false;
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.isSidebarClosed = true;
    } else {
      this.isSidebarClosed = false;
    }
  }
}