import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SplashComponent } from "./splash.component";

const splashRoute: Routes = [
    {
        path: "splash",
        component: SplashComponent
    }
];

export const splashRouting: ModuleWithProviders = RouterModule.forChild(splashRoute);