import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
  {
    path: 'welcome',
    loadChildren: 'src/app/features/welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'home',
    loadChildren: 'src/app/features/home/home.module#HomeModule'
  },
  {
    path: 'registration',
    loadChildren: 'src/app/features/welcome/registration/registration.module#RegistrationModule'
  },
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome'}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
