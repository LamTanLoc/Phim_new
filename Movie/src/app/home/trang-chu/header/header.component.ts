import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  anHienDN: boolean = false;
  anHienDK: boolean = false;
  nguoiDung: boolean = false;
  user: any = {
    TaiKhoan: "Đăng nhập"
  }
  icon:boolean = false;
  // show: any = "";

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.User();
    this.KiemTraUser();
  }

  HienThiDangNhap() {
    if (this.user.TaiKhoan === "Đăng nhập") {
      this.anHienDN = !this.anHienDN;
      this.anHienDK = false;
      this.nguoiDung = false;
    } else {
      this.nguoiDung = !this.nguoiDung;
     

    }
  }

  DangXuat() {
    this.user.TaiKhoan = "Đăng nhập";
    localStorage.clear();
    this.nguoiDung = false;
   

    swal.fire({

      type:'success',
      text: 'Đăng xuất thành công!',
      showConfirmButton: false,
      timer: 1300
    })
    window.scrollTo(0 , 0);
    //  location.reload();
  }

  HienThiDangKy(boolean: false) {
    this.anHienDK = !this.anHienDK;
    this.anHienDN = false;
  }

  User() {

    this.shareDataService.shareUser.subscribe((data) => {
      if (Object.keys(data).length !== 0) {
        this.user = data;
        this.icon = true;
      }
    })
  }

  Scroll(value){
    this.shareDataService.sharingKeyScroll(value);
  }

  KiemTraUser() {
    if (localStorage.length !== 0) {
      let ktra = JSON.parse(localStorage.getItem("user"));
      if (Object.keys(ktra).length !== 0) {

        this.shareDataService.sharingDataUser(ktra);
        // location.reload();


      }
    }

  }

}
