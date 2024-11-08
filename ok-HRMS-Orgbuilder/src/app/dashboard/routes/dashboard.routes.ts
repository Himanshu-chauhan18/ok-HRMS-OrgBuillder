import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { authGuard } from '../../auth/guard/auth.guard';

export const DASHBAORD_ROUTES: Routes = [
    { path: 'dashboard',canActivate: [authGuard], component: DashboardComponent },
];
