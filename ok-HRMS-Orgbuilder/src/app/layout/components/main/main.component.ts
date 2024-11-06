import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BreadcrumbModule, RouterModule,NgClass,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  currentUrl: string = '';  // Variable to store the current route path

  constructor(private activatedRoute: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let urlWithoutSlash = event.urlAfterRedirects.substring(1)
        this.currentUrl = urlWithoutSlash.charAt(0).toUpperCase() + urlWithoutSlash.slice(1);
      }
    });
  }
}
