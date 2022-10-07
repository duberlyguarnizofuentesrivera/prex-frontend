import {RouterModule, Routes} from "@angular/router";
import {PageIndexComponent} from "./main-site/page-index/page-index.component";
import {PageLoginComponent} from "./main-site/page-login/page-login.component";
import {PageSearchByCodeComponent} from "./main-site/page-search-by-code/page-search-by-code.component";
import {
  PageSearchByCodeResultsComponent
} from "./main-site/page-search-by-code-results/page-search-by-code-results.component";
import {PageUserShipmentsComponent} from "./main-site/page-user-shipments/page-user-shipments.component";
import {PageUserClientsComponent} from "./main-site/page-user-clients/page-user-clients.component";
import {PageUserReceiversComponent} from "./main-site/page-user-receivers/page-user-receivers.component";
import {PageUserTicketsNewComponent} from "./main-site/page-user-tickets-new/page-user-tickets-new.component";
import {PageUserTicketsComponent} from "./main-site/page-user-tickets/page-user-tickets.component";
import {
  PageUserShipmentsDetailComponent
} from "./main-site/page-user-shipments-detail/page-user-shipments-detail.component";
import {
  PageUserReceiversDetailComponent
} from "./main-site/page-user-receivers-detail/page-user-receivers-detail.component";
import {PageUserClientsDetailComponent} from "./main-site/page-user-clients-detail/page-user-clients-detail.component";
import {PageNotFoundComponent} from "./main-site/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {path: '', component: PageIndexComponent, pathMatch: 'full'},
  {path: 'login', component: PageLoginComponent, pathMatch: 'full'},
  {path: 'search-by-code', component: PageSearchByCodeComponent, pathMatch: 'full'},
  {path: 'search-by-code-results', component: PageSearchByCodeResultsComponent, pathMatch: 'full'},
  {path: 'app/shipments', component: PageUserShipmentsComponent, pathMatch: 'full'},
  {path: 'app/shipments/:shipmentId', component: PageUserShipmentsDetailComponent, pathMatch: 'full'},
  {path: 'app/clients', component: PageUserClientsComponent, pathMatch: 'full'},
  {path: 'app/clients/:clientId', component: PageUserClientsDetailComponent, pathMatch: 'full'},
  {path: 'app/receivers', component: PageUserReceiversComponent, pathMatch: 'full'},
  {path: 'app/receivers/:receiverId', component: PageUserReceiversDetailComponent, pathMatch: 'full'},
  {path: 'app/tickets', component: PageUserTicketsComponent, pathMatch: 'full'},
  {path: 'app/tickets-new', component: PageUserTicketsNewComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(appRoutes);
