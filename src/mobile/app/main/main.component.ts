import { Component, OnInit, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router"

import { User } from "../shared/user";
import { UserService } from "../shared/userService";

@Component({
  selector: "my-main",
  templateUrl: "main/main.component.html",
  styleUrls: ["main/main.component.css"],
  providers: [UserService]
})
export class MainComponent implements OnInit { 
  userList: Array<User> = [];

constructor(private userService: UserService,
            private zone: NgZone, private routerExtensions: RouterExtensions){ }

  ngOnInit() {
      this.userService.load()
      .subscribe(loadedUsers => {
        loadedUsers.forEach((userObject) => {
          this.userList.unshift(userObject);
        });
      });
  }

  open(item: User) {
    console.log(item.firstName)
    this.routerExtensions.navigate(["/details", item.firstName, item.lastName, item.avatar], {
        transition: {
            name: "none",
            duration: 100,
            curve: "linear"
        }
    });
  }
}
