import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { ColorComponent } from "./utilities/color/color.component";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      { path: "page1", component: Page1Component },
      { path: "page2", component: Page2Component },
      { path: "dashboard", component: DashboardComponent },
      {
        path: "utilities",
        children: [{ path: "color", component: ColorComponent }],
      },
    ],
  },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
