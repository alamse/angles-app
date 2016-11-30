import { Component, NgModule } from "@angular/core";
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router"
import { routes } from "./app.route"

import { AppComponent } from "./app.component";
// import { SplashComponent } from "./splash/splash.component";
import { SplashModule } from "./splash/splash.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        SplashModule
    ]
})
export class AppModule { }

platformNativeScriptDynamic().bootstrapModule(AppModule);
