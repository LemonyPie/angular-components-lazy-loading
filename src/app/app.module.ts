import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardDirective } from './dashboard/dashboard.directive';
import {CommonModule} from "@angular/common";
import {SettingsComponent} from "./settings/settings.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardDirective,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
