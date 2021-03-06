import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WebcamModule } from 'ngx-webcam';
import { VideoComponent } from './video/video.component';
import { MatGridTileComponent } from './gallery/mat-grid-tile/mat-grid-tile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    VideoComponent,
    MatGridTileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    WebcamModule
  ]
})
export class DashboardModule { }
