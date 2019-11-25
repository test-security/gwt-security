import {Component, OnInit} from "@angular/core";
import {LoginModel} from "../../models/login.model";
import {AuthToken, UserService} from "../../../../services/user-service";
import {StorageService} from "../../../../services/storage.service";
import {UserModel} from "../../models/user.model";

@Component({
  selector: "app-login-form",
  styleUrls: ["./login-form.component.css"],
  templateUrl: "./login-form.component.html"
})
export class LoginFormComponent implements OnInit {

  public loginModel: LoginModel = {};
  public showCheckYourSetDataAlert: boolean = false;

  constructor(private storageService: StorageService,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    this.userService.generateToken(this.loginModel)
      .subscribe((authToken: AuthToken) => {
        if (authToken.token) {
          this.storageService.setToken(authToken.token);
          this.userService.getAuthorizedUser()
            .subscribe((userModel: UserModel) => {
              this.storageService.setCurrentUser(userModel);
            });
        }
      }, (error) => {
        if (error.status === 401) {
          this.showCheckYourSetDataAlert = true;
        } else {
          alert(error.message);
        }
      });

  }

  public logout(): void {
    this.storageService.clearToken();
    this.storageService.setCurrentUser(null);
  }

}
