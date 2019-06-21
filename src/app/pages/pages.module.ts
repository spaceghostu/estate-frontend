import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './../materials/materials.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstatesComponent } from './estates/estates.component';
import { ComponentsModule } from '../components/components.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, AboutComponent, DashboardComponent, EstatesComponent, FormComponent],
  imports: [CommonModule, MaterialsModule, ComponentsModule, ReactiveFormsModule, HttpClientModule],
  exports: [HomeComponent, AboutComponent, DashboardComponent, EstatesComponent, FormComponent]
})
export class PagesModule {}
