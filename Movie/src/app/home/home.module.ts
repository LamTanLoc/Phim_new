import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './trang-chu/header/header.component';
import { FooterComponent } from './trang-chu/footer/footer.component';
import { ResgisterLoginModule } from '../register-login/resgister-login.module';








@NgModule({
  declarations: [HomeComponent,HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ResgisterLoginModule

    

  ]
})
export class HomeModule { }
