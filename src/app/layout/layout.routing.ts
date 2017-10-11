import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const LAYOUT_ROUTES: Routes = [
  { path: '', component: LayoutComponent, children: [
    // Home
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },

    // Button
    { path: 'general/button', loadChildren: '../pages/general/button/button.module#ButtonModule' }

  ]}
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
