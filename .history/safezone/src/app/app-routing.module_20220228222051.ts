import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DataComponent } from "./data/data.component";
import { AboutusComponent } from "./aboutus/aboutus.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "data", component: DataComponent },
  { path: "aboutus", component: AboutusComponent },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
