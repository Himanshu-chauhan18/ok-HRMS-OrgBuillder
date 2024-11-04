import { Routes } from '@angular/router';
import { DASHBAORD_ROUTES } from './dashboard/routes/dashboard.routes';
import { ORGAZATION_ROUTES } from './organization/routes/organization.routes';
import { USER_ROUTES } from './user/routes/user.routes';
import { ALERT_ROUTES } from './alert/routes/alert.routes';
import { PAYMENT_ROUTES } from './payment/routes/payment.routes';
import { REPORT_ROUTES } from './report/routes/report.routes';
import { SETTING_ROUTES } from './setting/routes/setting.routes';
import { PageNotFoundComponent } from './layout/shared/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ...DASHBAORD_ROUTES,
    ...ORGAZATION_ROUTES,
    ...USER_ROUTES,
    ...ALERT_ROUTES,
    ...PAYMENT_ROUTES,
    ...REPORT_ROUTES,
    ...SETTING_ROUTES,
    { path: '**', component: PageNotFoundComponent},
];
