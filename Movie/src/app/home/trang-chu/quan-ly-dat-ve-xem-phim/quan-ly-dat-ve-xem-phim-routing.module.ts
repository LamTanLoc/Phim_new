import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyDatVeXemPhimComponent } from './quan-ly-dat-ve-xem-phim.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { ChonVePhimComponent } from './chon-ve-phim/chon-ve-phim.component';
import { DanhSachChonGheXemPhimComponent } from './danh-sach-chon-ghe-xem-phim/danh-sach-chon-ghe-xem-phim.component';
import { KetQuaDatVeComponent } from './ket-qua-dat-ve/ket-qua-dat-ve.component';




const routes: Routes = [
    {
        path: '', component: QuanLyDatVeXemPhimComponent, children: [
            { path: 'chi-tiet-phim/:id', component: ChiTietPhimComponent },
            { path: 'chon-ve/:id', component: ChonVePhimComponent },
            { path: 'chon-ghe/:malichchieu', component: DanhSachChonGheXemPhimComponent },
            { path: 'ket-qua-dat-ve', component: KetQuaDatVeComponent }
        ]
    }



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuanLyDatVeXemPhimRoutingModule { }
