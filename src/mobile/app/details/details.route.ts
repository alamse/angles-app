import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DetailsComponent } from "./details.component";

const detailsRoute: Routes = [
    {
        path: "details/:firstName/:lastName/:avatar",
        component: DetailsComponent
    }
];

export const detailsRouting: ModuleWithProviders = RouterModule.forChild(detailsRoute);