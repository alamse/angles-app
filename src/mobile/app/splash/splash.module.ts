import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";

import { splashRouting } from "./splash.route";
import { SplashComponent } from "./splash.component";

@NgModule({
    imports: [
        NativeScriptModule,
        splashRouting
    ],
    declarations: [
        SplashComponent
    ]
})

export class SplashModule{}