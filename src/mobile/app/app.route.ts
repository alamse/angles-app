import { DetailsComponent } from "./details/details.component"
import { MainComponent } from "./main/main.component"

export const routes = [
  { path: "", component: MainComponent },
  { path: "details", component: DetailsComponent }
];

export const navigatableComponents = [
  MainComponent,
  DetailsComponent,
];