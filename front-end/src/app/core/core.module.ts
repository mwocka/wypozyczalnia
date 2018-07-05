import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {UserService} from './services/user.service';
import {MyInterceptor} from './my.interceptor';
import {AuthGuard} from './auth.guard';
import {LoaderService} from './services/loader.service';
import {CategoryService} from './services/category.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
    AuthGuard,
    LoaderService,
    CategoryService
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
