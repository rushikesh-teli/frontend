import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
