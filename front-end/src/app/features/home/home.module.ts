import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {homeRouting} from './home-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatTooltipModule
} from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    homeRouting,

    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatTooltipModule
  ]

})
export class HomeModule {
}
