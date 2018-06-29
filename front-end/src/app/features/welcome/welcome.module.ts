import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome.component';
import {welcomeRouting} from './welcome-routing.module';
import {ScrollToModule} from 'ng2-scroll-to';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    welcomeRouting,
    ScrollToModule,

  ],

})
export class WelcomeModule { }
