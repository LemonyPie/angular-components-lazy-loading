import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SettingsComponentResolver} from "./services/settings-component.resolver";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  resolve: {
    settingsComponent: SettingsComponentResolver
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
