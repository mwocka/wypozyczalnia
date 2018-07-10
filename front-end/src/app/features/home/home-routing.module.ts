import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from '../../core/auth.guard';
import {ModelComponent} from './model/model.component';


const homeRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      {path: ':categoryId', component: ModelComponent},
]}

]as Routes;

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
