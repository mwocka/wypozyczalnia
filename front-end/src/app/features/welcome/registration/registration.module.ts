import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatCheckboxModule,
  MatInputModule, MatDialogModule
} from '@angular/material';
import {SharedModule} from '../../../shared/shared.module';
import {registrationRouting} from './registration-routing.module';
import {ScrollToModule} from 'ng2-scroll-to';

@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    SharedModule,
    registrationRouting,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    ScrollToModule,
    MatInputModule,
    MatDialogModule
  ],
})
export class RegistrationModule {
}
