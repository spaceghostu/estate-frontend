import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './../materials/materials.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './../app-routing.module';
import { TableComponent } from './table/table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MaterialsModule, AppRoutingModule, MatTableModule, MatPaginatorModule, MatSortModule],
  declarations: [HeaderComponent, SidebarComponent, TableComponent],
  exports: [HeaderComponent, SidebarComponent, TableComponent]
})
export class ComponentsModule {}
