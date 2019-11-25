
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {NgModule} from "@angular/core";
import {UserService} from "../../services/user-service";
import {StorageService} from "../../services/storage.service";

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
  ],

  providers: [UserService, StorageService],
  exports: [LoginFormComponent]
})
export class LoginModule {
}
