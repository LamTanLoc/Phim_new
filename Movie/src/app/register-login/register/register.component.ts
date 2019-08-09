import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  anHienDN: boolean = false;
  anDangKy: boolean = true;
  constructor(private dataService : DataService) { }

  ngOnInit() {
  }
  HienThiDangNhap() {
    this.anHienDN = !this.anHienDN;
    this.anDangKy = !this.anDangKy;


  }

  DangKy(value) {
    // console.log(value);
    let nguoiDung = {
      TaiKhoan: value.TaiKhoan,
      MatKhau: value.MatKhau,
      Email: value.Email,
      SoDT : value.SoDienThoai,
      MaNhom: "GP09",
      MaLoaiNguoiDung: "KhachHang"

    }
    
    const uri = `QuanLyNguoiDung/ThemNguoiDung`;
    this.dataService.post(uri,nguoiDung).subscribe((data)=>{
      console.log(data);
      if(data === "Tài khoản đã tồn tại"){
       
        swal.fire({
          type:'error',
          title: 'Tài khoản đã tồn tại',
          animation: false,
          customClass: {
            popup: 'animated tada'
          }
        })
      }else{
        this.anDangKy = false;
 
        swal.fire({
        position: 'center',
       
          type: 'success',
          title: 'Đăng ký thành công !',
          showConfirmButton: false,
          timer: 1500
        });
        // this.anHienDN = !this.anHienDN;
      }
    })

  }
}
