import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './components/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
