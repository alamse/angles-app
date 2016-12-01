import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { TextField } from "ui/text-field";
import { User } from "../shared"

@Component({
    selector: "details-comp",
    templateUrl: "details/details.component.html",
    styleUrls: ["details/details-common.css", "details/details.component.css"],
})

export class DetailsComponent {
    user: User;
    firstName: string;
    constructor(private route: ActivatedRoute) {
        this.route.params
            .forEach((param) => { 
                console.log(param["firstName"]); 
                this.user = new User();
                this.user.firstName = param["firstName"];
                this.user.lastName = param["lastName"];
                this.user.avatar = param["avatar"];
            });

    }

    public onNavBtnTap(){
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    }

    public onEdit() {
        console.log("Edit tap");
    }
}