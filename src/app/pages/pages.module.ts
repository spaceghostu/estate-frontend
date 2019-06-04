import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './../materials/materials.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    DashboardComponent,
  ]
})
export class PagesModule { }
