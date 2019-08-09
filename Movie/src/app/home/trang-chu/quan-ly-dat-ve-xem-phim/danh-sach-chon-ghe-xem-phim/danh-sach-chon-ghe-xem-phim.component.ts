import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';
import { Router } from '@angular/router';
import { DataService } from 'src/_core/services/data.service';
import { ItemGheNgoiComponent } from './../item-ghe-ngoi/item-ghe-ngoi.component';
import swal from 'sweetalert2';

@Component({
  selector: 'app-danh-sach-chon-ghe-xem-phim',
  templateUrl: './danh-sach-chon-ghe-xem-phim.component.html',
  styleUrls: ['./danh-sach-chon-ghe-xem-phim.component.scss']
})
export class DanhSachChonGheXemPhimComponent implements OnInit {
  @ViewChildren(ItemGheNgoiComponent) listGhe: QueryList<ItemGheNgoiComponent>;
  TongTien: any;
  soLuongCombo_1: number = 0;
  soLuongCombo_2: number = 0;
  giaCombo_1: number = 55000;
  giaCombo_2: number = 60000;
  TongTienCombo: any;
  soLuongVe: any;
  giaVePhim: any;

  phim: any;
  chiTietLichChieu: any;
  DanhSachGheNgoi = [];
  DanhSachGheDaDat = [];
  gheDaDat: any;
  trangThaiAnHien: boolean = true;

  HienDN: boolean = true;

  constructor(private shareDataService: ShareDataService, private dataService: DataService, private router: Router) { }

  ngOnInit() {

    this.shareDataService.shareChiTietPhim.subscribe(obj => {
      this.TongTien = obj[0].TongTien;
      this.soLuongVe = obj[0].soLuongVe;
      this.giaVePhim = obj[0].giaVePhim;
      this.phim = obj[0].phim;
      this.chiTietLichChieu = obj[0].chiTietLichChieu;
    });

    this.getChiTietPhongVe();

  }

  getChiTietPhongVe() {
    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.chiTietLichChieu.MaLichChieu}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.DanhSachGheNgoi = data.DanhSachGhe;

    })

  }

  daChonGhe(obj) {

    if (obj.trangThaiChon === true) {
      if (this.DanhSachGheDaDat.length < this.soLuongVe) {
        this.DanhSachGheDaDat.push(obj.ghe);
      } else {
        alert("Bạn chỉ được chọn " + this.soLuongVe + " ghế !");
        this.listGhe.map(item => {
          if (item.ghe.TenGhe === obj.ghe.TenGhe) {
            item.trangThaiChon = false;
          }
        })
      }
    } else {
      let vitri;
      this.DanhSachGheDaDat.map((item, index) => {
        if (obj.ghe.TenGhe === item.TenGhe) {
          vitri = index;

        }
      })
      this.DanhSachGheDaDat.splice(vitri, 1);
    }
  }

  AnHien() {
    this.trangThaiAnHien = !this.trangThaiAnHien;
  }

  TangSoLuongCombo(bool) {
    if (bool) {
      this.soLuongCombo_1 += 1;

      return this.soLuongCombo_1;
    } else {
      this.soLuongCombo_2 += 1;

      return this.soLuongCombo_2;
    }



  }
  GiamSoLuongCombo(bool) {
    if (bool) {
      if (this.soLuongCombo_1 >= 1) {
        this.soLuongCombo_1 -= 1;
        // this.TongTienCombo = (this.giaCombo_1 + this.soLuongCombo_1) + (this.soLuongCombo_2 * this.giaCombo_2);
        return this.soLuongCombo_1;
      }
    }
    else {
      if (this.soLuongCombo_2 >= 1) {
        this.soLuongCombo_2 -= 1;
        // this.TongTienCombo = (this.giaCombo_1 + this.soLuongCombo_1) + (this.soLuongCombo_2 * this.giaCombo_2);
        return this.soLuongCombo_2;
      }
    }
  }

  tongTienCombo() {

    this.TongTienCombo = (this.giaCombo_1 * this.soLuongCombo_1) + (this.soLuongCombo_2 * this.giaCombo_2);
    return this.TongTienCombo;

  }

  KiemTraDangNhap() {

    if (localStorage.getItem("user") === null) {
     
      swal.fire({
        
        text: 'Mời bạn đăng nhập trước khi Mua vé ! ',
      
      })
      
      this.HienDN = !this.HienDN;
    } else {
      
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'Mua vé thành công !',
        showConfirmButton: false,
        timer: 1500
      });
      let date = new Date();
      console.log("date" + date);
      this.router.navigate(["/ket-qua-dat-ve"]);
      // console.log("Phim: " + this.phim.TenPhim);
      // console.log("CTPhim: " + this.chiTietLichChieu.MaLichChieu);
      // console.log("CTPhim: " + this.chiTietLichChieu.NgayChieuGioChieu);
      // console.log("CTPhim: " + this.chiTietLichChieu.Rap.TenRap);

      // this.shareDataService.shareUser.subscribe(data => {
      //   // let user= {
      //   //   TaiKhoan : data
      //   // }
      //   console.log("user" + data);
      // })
      // this.DanhSachGheDaDat.map(item => {
      //   console.log(item.TenGhe + item.MaGhe);
      // })

      let obj = {

        DanhSachGheDaDat: this.DanhSachGheDaDat,
        TenPhim: this.phim.TenPhim,
        MaLichChieu: this.chiTietLichChieu.MaLichChieu,
        TenRap: this.chiTietLichChieu.Rap.TenRap,
        TongTien: this.TongTien + (this.giaCombo_1 * this.soLuongCombo_1) + (this.soLuongCombo_2 * this.giaCombo_2),
        chiTietLichChieu: this.chiTietLichChieu,
        date: date

      };

      this.shareDataService.sharingChiTietThanhToan(obj);

    }

  }

}