import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {ModalModule} from "ngx-bootstrap/modal";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {RouterModule, Routes} from "@angular/router";
import {BillingDetailsViewComponent} from "./modules/layout/components/billing-details/billing-details-view.component";
import {NotFoundComponent} from "./modules/layout/components/404/not-found.component";
import {LayoutModule} from "./modules/layout/layout.module";
import {HomeComponent} from "./modules/layout/components/home/home.component";
import {UserService} from "./services/user-service";
import {APIInterceptor} from "./interceptors/api-interceptor";
import {LoginComponent} from "./modules/layout/components/login/login.component";
import {CanActivateService} from "./services/can-activate.service";

const appRoutes: Routes = [
  {path: "", component: HomeComponent, canActivate: [CanActivateService]},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent, canActivate: [CanActivateService]},
  {path: "billing-details/:id", canActivate: [CanActivateService], component: BillingDetailsViewComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, APIInterceptor, {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
