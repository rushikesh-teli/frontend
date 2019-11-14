import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { MainComponent } from './core/main/main.component';
import { FooterComponent } from './core/main/footer/footer.component';
import { HeaderComponent } from './core/main/header/header.component';
import { MaincontainerComponent } from './core/main/maincontainer/maincontainer.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MaincontainerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
