import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Route, Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MeterGroupModule } from 'primeng/metergroup';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { ContainerComponent } from './layout/components/container/container.component';
import { LoginComponent } from "./auth/components/login/login.component";
import { filter, Subscription } from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { HomeLoaderComponent } from './layout/shared/home-loader/home-loader.component';
import { LoaderService } from './layout/services/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, DropdownModule, InputTextModule, DialogModule, MeterGroupModule, CardModule, CommonModule, NavbarComponent, SidebarComponent, ContainerComponent, LoginComponent,HomeLoaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isSidebarClosed = false;
  title = 'okHRMS-Orgbuilder';
  isLargeScreen = window.innerWidth >= 1024; 
  isMediumScreen = window.innerWidth >= 768 && window.innerWidth < 1024; 
  isSmallScreen = window.innerWidth < 768;
  isAuthenticated = false;  // Track authentication status locally
  private authStatusSubscription!: Subscription;

  
  constructor(private router: Router, private authService: AuthService,public loaderService: LoaderService) {}
  
  ngOnInit() {
    // this.router.events.subscribe(event => {
    //   console.log(this.router.url)
    //   if(this.router.url ==='/login' || this.router.url ==='/dashboard'){
    //     if (event instanceof NavigationStart) {
    //       this.loaderService.show();
    //     } else if (event instanceof NavigationEnd || event instanceof NavigationError) {
    //       console.log("end")
          // setTimeout(() => {
          //   this.loaderService.hide();
          // }, 200); // Delay of 2 seconds
    //     }
    //   }
    // });
    // Subscribe to authentication status changes
    this.authStatusSubscription = this.authService.getAuthStatus().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      this.loaderService.show();
      if (isAuthenticated) {
        // If the user is authenticated, navigate if they are on the login page
        this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
          console.log(this.router.url)
          if (this.router.url === '/login') {
            this.router.navigate(['dashboard']);
          }
         
        });
      } else {
        // If the user is not authenticated, navigate to the login page
        this.router.navigate(['login']);
      }
      setTimeout(() => {
        this.loaderService.hide();
      }, 500); // Delay of 500 miliseconds
    }); 
  }

  ngOnDestroy() {
    // Don't forget to unsubscribe to avoid memory leaks
    if (this.authStatusSubscription) {
      this.authStatusSubscription.unsubscribe();
      this.loaderService.hide();
    }
  }

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
