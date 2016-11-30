import { Component } from "@angular/core";

@Component({
    selector: "details-comp",
    templateUrl: "details/details.component.html"
})

export class DetailsComponent {
    public onNavBtnTap(){
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    }

    public onEdit() {
        console.log("Edit tap");
    }
}