import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginModel} from "../modules/login/models/login.model";
import {UserModel} from "../modules/login/models/user.model";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  public generateToken(login: LoginModel): Observable<AuthToken> {
    return this.http.post<AuthToken>("/api/token/generate-token", login);
  }

  public getAuthorizedUser(): Observable<UserModel> {
    return this.http.get<UserModel>("/api/user/current");
  }

}

export interface AuthToken {
  readonly token: string;
}
