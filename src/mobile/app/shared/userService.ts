import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "./user";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {

  baseUrl: string = 'http://reqres.in/api/users';

  constructor(private http: Http) {}

  load() {
    return this.http.get(this.baseUrl)
    .map(res => res.json())
    .map(data => {
      let userList = [];
      data.data.forEach((user) => {
        userList.push(new User(user.id, user.first_name, user.last_name, user.avatar));
      });
      return userList;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}