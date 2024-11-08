import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 constructor(private router: Router, private authService: AuthService){}

 ngOnInit(){
 
 }

 login(){
  this.authService.login();
  this.router.navigate(['/dashboard'])
 }
}
