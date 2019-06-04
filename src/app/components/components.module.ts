import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './../materials/materials.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  imports: [
  CommonModule,
    MaterialsModule,
    AppRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ]
})
export class ComponentsModule { }
