import { Component } from "@angular/core";
import { TextField } from "ui/text-field";
import { User } from "../shared"

@Component({
    selector: "details-comp",
    templateUrl: "details/details.component.html",
    styleUrls: ["details/details-common.css", "details/details.component.css"],
})

export class DetailsComponent {
    user: User;

    constructor() {
        this.user = new User();
        this.user.firstName = "Alam";
        this.user.lastName = "Yudi";
        this.user.avatar = "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg";
    }

    public onNavBtnTap(){
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    }

    public onEdit() {
        console.log("Edit tap");
    }
}