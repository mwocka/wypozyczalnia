import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {appRouting} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    appRouting,

    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
