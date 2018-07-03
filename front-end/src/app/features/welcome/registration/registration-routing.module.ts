import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration.component';


const registrationRoutes: Routes = [
  {
    path: '', component: RegistrationComponent
  }
]as Routes;

export const registrationRouting: ModuleWithProviders = RouterModule.forChild(registrationRoutes);
