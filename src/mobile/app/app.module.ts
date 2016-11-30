import { Component, NgModule } from "@angular/core";
import { platformNativeScriptDynamic, NativeScriptModule,  } from "nativescript-angular/platform";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router"
import { routes, navigatableComponents } from "./app.route"

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        ...navigatableComponents,
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ]
})
export class AppModule { }
