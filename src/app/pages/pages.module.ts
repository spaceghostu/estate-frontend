import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './../materials/materials.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstatesComponent } from './estates/estates.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, AboutComponent, DashboardComponent, EstatesComponent],
  imports: [CommonModule, MaterialsModule, ComponentsModule],
  exports: [HomeComponent, AboutComponent, DashboardComponent, EstatesComponent]
})
export class PagesModule {}
