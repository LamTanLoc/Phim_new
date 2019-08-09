import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu.component';




const routes: Routes = [
    { path: '', component: TrangChuComponent, children:[
      
     
    ] },
    {path:'', loadChildren:'./quan-ly-dat-ve-xem-phim/quan-ly-dat-ve-xem-phim.module#QuanLyDatVeXemPhimModule'},
   
  
   
    



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrangChuRoutingModule { }
