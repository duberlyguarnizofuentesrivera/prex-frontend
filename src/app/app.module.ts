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

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageIndexComponent,
    MainHeaderComponent,
    LoginWindowComponent,
    MainFooterComponent,
    UserHeaderComponent,
    PageSearchByCodeComponent
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
        DividerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
