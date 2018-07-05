import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from '../../core/auth.guard';


const homeRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]}

]as Routes;

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
