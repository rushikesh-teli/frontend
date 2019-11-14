import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { MainComponent } from '../core/main/main.component';

const mainRoutes: Routes = [
  {
    path: 'view',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
