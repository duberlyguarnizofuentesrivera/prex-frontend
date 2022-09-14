import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {routing} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageLoginComponent} from './main-site/page-login/page-login.component';
import {PageIndexComponent} from './main-site/page-index/page-index.component';
import {MainHeaderComponent} from './main-site/components/main-header/main-header.component';
import {LoginWindowComponent} from './main-site/components/login-window/login-window.component';
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {MainFooterComponent} from './main-site/components/main-footer/main-footer.component';
import {PasswordModule} from "primeng/password";
import {UserHeaderComponent} from './main-site/components/user-header/user-header.component';
import {DividerModule} from "primeng/divider";
import {PageSearchByCodeComponent} from './main-site/page-search-by-code/page-search-by-code.component';
import {
  PageSearchByCodeResultsComponent
} from './main-site/page-search-by-code-results/page-search-by-code-results.component';
import {
  SearchShipmentsResultsTableComponent
} from './main-site/components/search-shipments-results-table/search-shipments-results-table.component';
import {TableModule} from "primeng/table";
import {PageUserShipmentsComponent} from './main-site/page-user-shipments/page-user-shipments.component';
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule} from "primeng/card";
import {
  SearchClientsResultsTableComponent
} from './main-site/components/search-clients-results-table/search-clients-results-table.component';
import {PageUserClientsComponent} from './main-site/page-user-clients/page-user-clients.component';
import {PageUserReceiversComponent} from './main-site/page-user-receivers/page-user-receivers.component';
import {
  SearchReceiversResultsTableComponent
} from './main-site/components/search-receivers-results-table/search-receivers-results-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageIndexComponent,
    MainHeaderComponent,
    LoginWindowComponent,
    MainFooterComponent,
    UserHeaderComponent,
    PageSearchByCodeComponent,
    PageSearchByCodeResultsComponent,
    SearchShipmentsResultsTableComponent,
    PageUserShipmentsComponent,
    SearchClientsResultsTableComponent,
    PageUserClientsComponent,
    PageUserReceiversComponent,
    SearchReceiversResultsTableComponent
  ],
  imports: [
    routing,
    BrowserModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    PasswordModule,
    DividerModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
