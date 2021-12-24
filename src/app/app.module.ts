import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './components/shared/shared.module';
import { LoginComponent } from './login/login.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { SpinnerInterceptor } from './components/shared/interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
