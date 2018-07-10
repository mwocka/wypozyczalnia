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
  MatListModule, MatTabsModule, MatTooltipModule
} from '@angular/material';
import {ModelComponent} from './model/model.component';

@NgModule({
  declarations: [
    ModelComponent,
    HomeComponent
  ],
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
    MatTooltipModule,
    MatTabsModule
  ],
  exports: [],
  providers: []

})
export class HomeModule {
}
