import { RouterModule, Routes } from "@angular/router";
import {PageIndexComponent} from "./main-site/page-index/page-index.component";
import {PageLoginComponent} from "./main-site/page-login/page-login.component";

const appRoutes: Routes = [
  {path: '', component: PageIndexComponent, pathMatch: 'full'},
  {path: 'login', component: PageLoginComponent, pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(appRoutes);
