import { DetailsComponent } from "./details/details.component"

export const routes = [
    {
        path: "",
        redirectTo: "/details", 
        pathMatch: "full"
    },
    {
        path: "details",
        component: DetailsComponent
    }
]