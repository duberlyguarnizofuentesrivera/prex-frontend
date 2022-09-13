import {RouterModule, Routes} from "@angular/router";
import {PageIndexComponent} from "./main-site/page-index/page-index.component";
import {PageLoginComponent} from "./main-site/page-login/page-login.component";
import {PageSearchByCodeComponent} from "./main-site/page-search-by-code/page-search-by-code.component";
import {
  PageSearchByCodeResultsComponent
} from "./main-site/page-search-by-code-results/page-search-by-code-results.component";
import {PageUserShipmentsComponent} from "./main-site/page-user-shipments/page-user-shipments.component";

const appRoutes: Routes = [
  {path: '', component: PageIndexComponent, pathMatch: 'full'},
  {path: 'login', component: PageLoginComponent, pathMatch: 'full'},
  {path: 'search-by-code', component: PageSearchByCodeComponent, pathMatch: 'full'},
  {path: 'search-by-code-results', component: PageSearchByCodeResultsComponent, pathMatch: 'full'},
  {path: 'app/shipments', component: PageUserShipmentsComponent, pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(appRoutes);
