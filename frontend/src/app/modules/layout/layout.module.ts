import { NgModule } from "@angular/core";
import {BillingDetailsViewComponent} from "./components/billing-details/billing-details-view.component";
import {NotFoundComponent} from "./components/404/not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {BillingAccountModule} from "../billing-account/billing-account.module";
import {HeaderModule} from "../header/header.module";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {LoginModule} from "../login/login.module";

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    BillingDetailsViewComponent
  ],
  imports: [
    BillingAccountModule,
    HeaderModule,
    LoginModule,
    RouterModule
  ],
  providers: [],
  exports: [HomeComponent, LoginComponent, NotFoundComponent, BillingDetailsViewComponent]
})
export class LayoutModule {}
