import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { TrangChuRoutingModule } from './trang-chu-routing.module';

import { CarouselComponent } from './carousel/carousel.component';
import { ListDeXuatComponent } from './list-de-xuat/list-de-xuat.component';
import { ItemDeXuatComponent } from './item-de-xuat/item-de-xuat.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimSapChieuComponent } from './item-phim-sap-chieu/item-phim-sap-chieu.component';
import { ItemPhimDangChieuComponent } from './item-phim-dang-chieu/item-phim-dang-chieu.component';

import { PhoneAppComponent } from './phone-app/phone-app.component';

import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { ShareModule } from 'src/_core/shared/share.module';
import { ResgisterLoginModule } from 'src/app/register-login/resgister-login.module';




@NgModule({
  declarations: [TrangChuComponent, CarouselComponent, ListDeXuatComponent, ItemDeXuatComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent,ItemPhimSapChieuComponent,ItemPhimDangChieuComponent, PhoneAppComponent, TinTucComponent, DienAnhComponent, ReviewComponent, KhuyenMaiComponent],
  imports: [
    CommonModule,
    TrangChuRoutingModule,
    ShareModule,
    
  ]
})
export class TrangChuModule { }
