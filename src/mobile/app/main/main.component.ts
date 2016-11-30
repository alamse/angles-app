import { Component, OnInit, NgZone } from "@angular/core";
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
            private zone: NgZone){ }

  ngOnInit() {
      for (let i = 0; i < 20; i++) {
          this.userList.push(new User(i, "" + i,"" + i,"" + i));
      }

      this.userService.load()
      .subscribe(loadedUsers => {
        loadedUsers.forEach((userObject) => {
          this.userList.unshift(userObject);
        });
      });
  }
}
