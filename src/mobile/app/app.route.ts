import { SplashComponent } from "./splash/splash.component"

export const routes = [
    {
        path: "",
        redirectTo: "/splash", 
        pathMatch: "full"
    },
    {
        path: "splash",
        component: SplashComponent
    }
]