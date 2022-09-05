import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {routing} from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './main-site/page-login/page-login.component';
import { PageIndexComponent } from './main-site/page-index/page-index.component';
import { MainHeaderComponent } from './main-site/components/main-header/main-header.component';
import { LoginWindowComponent } from './main-site/components/login-window/login-window.component';
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import { MainFooterComponent } from './main-site/components/main-footer/main-footer.component';
import {PasswordModule} from "primeng/password";

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageIndexComponent,
    MainHeaderComponent,
    LoginWindowComponent,
    MainFooterComponent
  ],
  imports: [
    routing,
    BrowserModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
