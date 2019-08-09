import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chon-ve-phim',
  templateUrl: './chon-ve-phim.component.html',
  styleUrls: ['./chon-ve-phim.component.scss']
})
export class ChonVePhimComponent implements OnInit {
  phim: any;
  chiTietLichChieu: any;
  soLuongVe: number = 1;
  TongTien: any;

  constructor(private shareDataService: ShareDataService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0 , 0);

    this.shareDataService.shareChiTietPhim.subscribe(data => {
      if (data !== undefined) {
        this.phim = data[1];
        this.chiTietLichChieu = data[0];
      }


    })
  }

  TangSoLuongVe() {
    this.soLuongVe += 1;
    return this.soLuongVe;
  }

  GiamSoLuongVe() {
    if (this.soLuongVe >= 2) {
      this.soLuongVe -= 1;
      return this.soLuongVe;
    }
  }



  TongTienVe() {
    this.TongTien = (this.soLuongVe * this.chiTietLichChieu.GiaVe);
    return this.TongTien;
  }

  ChonGhe() {

    let obj: any = [{
      phim: this.phim,
      chiTietLichChieu: this.chiTietLichChieu,
      soLuongVe: this.soLuongVe,
      TongTien: this.TongTien,
      giaVePhim: this.chiTietLichChieu.GiaVe
    }];


    this.router.navigate(["/chon-ghe/", this.chiTietLichChieu.MaLichChieu]);

    this.shareDataService.sharingDataChiTietPhim(obj);

  }



}
