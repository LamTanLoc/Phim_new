import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './trang-chu/header/header.component';


const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', loadChildren: './trang-chu/trang-chu.module#TrangChuModule' },
            // { path: 'trang-chu', loadChildren: './trang-chu/trang-chu.module#TrangChuModule' },
           


        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
