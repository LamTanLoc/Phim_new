import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: "./home/home.module#HomeModule" },
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  {path:'form', loadChildren:'./register-login/resgister-login.module#ResgisterLoginModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
