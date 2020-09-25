import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UniqueappComponent } from './uniqueapp/uniqueapp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ByconstructionComponent } from './byconstruction/byconstruction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniqueappComponent,
    DashboardComponent,
    ByconstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
