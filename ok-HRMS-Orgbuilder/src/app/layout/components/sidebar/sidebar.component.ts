import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { AuthService } from '../../../auth/services/auth.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule,RouterLink,RouterLinkActive,SkeletonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  // isSidebarClosed: boolean = false;
  @Input() isSidebarClosed: boolean = false;

  constructor(private router: Router, private authService: AuthService){}


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.isSidebarClosed = true;
    } else {
      this.isSidebarClosed = false;
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
  
}
