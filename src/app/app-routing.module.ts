import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EstatesComponent } from './pages/estates/estates.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'About' }
  },
  {
    path: 'form',
    component: FormComponent,
    data: { title: 'About' }
  },
  {
    path: 'estates',
    component: EstatesComponent,
    data: { title: 'Estates' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
