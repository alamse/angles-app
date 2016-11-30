import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";

import { detailsRouting } from "./details.route";
import { DetailsComponent } from "./details.component";

@NgModule({
    imports: [
        NativeScriptModule,
        detailsRouting
    ],
    declarations: [
        DetailsComponent
    ]
})

export class DetailsModule{}