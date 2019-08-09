import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
// import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { ShareDataService } from 'src/_core/shared/share-data.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  anHienDK: boolean = false;
  anDN: boolean = true;

  constructor(private dataService: DataService, private shareDataService: ShareDataService) { }

  ngOnInit() {

  }
  HienThiDangKy() {
    this.anHienDK = !this.anHienDK;
    this.anDN = false;
  }

  DangNhap(value) {
    // console.log(value.TaiKhoan);

    const uri = `QuanLyNguoiDung/DangNhap?TaiKhoan=${value.TaiKhoan}&MatKhau=${value.MatKhau}`;

    this.dataService.post(uri).subscribe((data) => {
      console.log(data);
      if (data === "Tài khoản hoặc mật khẩu không đúng !") {
        swal.fire({
          type: 'error',
          timer: 1500,
          text: 'Tài khoản hoặc mật khẩu không đúng !',
          animation: false,
          showConfirmButton: false,
          customClass: {
            popup: 'fliplnX'
            // fliplnX
          }

        })
      } else {
        // alert("Đăng nhập thành công");
        // swal.fire( {position: 'center', title:"c", type:'success', timer: 1500});
        swal.fire({
          type: 'success',
          title: 'Đăng nhập thành công !',
          animation: false,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'bounceOut'

          }
        });
        // console.log("login" + data);
        this.shareDataService.sharingDataUser(data);
        this.anDN = false;
        localStorage.setItem("user", JSON.stringify(data));

      }
    })

  }
}
