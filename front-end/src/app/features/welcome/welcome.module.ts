import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome.component';
import {welcomeRouting} from './welcome-routing.module';
import {ScrollToModule} from 'ng2-scroll-to';
import {SharedModule} from '../../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent

  ],
  imports: [
    SharedModule,
    welcomeRouting,
    ScrollToModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,

    MatFormFieldModule,

  ],
  exports: [
    WelcomeComponent
  ]

})
export class WelcomeModule {
}
