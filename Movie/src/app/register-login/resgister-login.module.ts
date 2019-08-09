import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterLoginComponent } from './register-login.component';
import { RegisterLoginRoutingModule } from './register-login-routing.module';
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [RegisterLoginComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RegisterLoginRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class ResgisterLoginModule { }
