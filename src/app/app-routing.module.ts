import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { Constants } from "./shared/Constants";
import { TeamViewComponent } from "./component/team-view/team-view.component";
const appRoutes: Routes =
  [
    {
      path: '',   redirectTo: '/' + Constants.teamView , pathMatch: 'full'
    },
    {
        path: Constants.teamView,
        component: TeamViewComponent
    },
    {
      path: "**",
      redirectTo: Constants.teamView,
    }
  ];


@NgModule
({
  imports: [ RouterModule.forRoot(appRoutes, {useHash: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
