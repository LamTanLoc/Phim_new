import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShareDataService } from './../../../../../_core/shared/share-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/_core/services/data.service';


@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {
  @ViewChild('saoRender') tagStart: ElementRef;
  @ViewChild('lichchieu') LichChieu: ElementRef;
  scrollItem: any;
  phim: any;
  tenPhim: any;
  maPhim: any;
  lichChieu = [];
  star = '';
  loaiTinTuc: string = "LichChieu";
  date = '';
  doitac: string = "Galaxy";
  public saone = [];
  item: object = {
  };


  constructor(private shareDataService: ShareDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {

  }

  ngOnInit() {
    this.getParams();
    this.getChiTietPhim();
  }

  getChiTietPhim() {

    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.maPhim}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.phim = data;
      if (data !== undefined) {
        for (let i = 0; i < this.phim.DanhGia; i++) {
          this.saone.push(i);
        }
        this.phim.LichChieu.map((lchieu) => {
          this.lichChieu.push(lchieu);
        })
      }

    });
  }

  xemTrailer() {
    console.log(this.phim);
    this.shareDataService.sharingDataTrailerPhim(this.phim);

  }

  getParams() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.maPhim = this.activatedRoute.snapshot.paramMap.get("id");
    });
  }

  chonLoaiTin(val) {
    this.loaiTinTuc = val;
  }
  ChonDoiTac(value) {
    this.doitac = value;
  }

  NgayGioChieuPhim(item) {
    this.item = item;

  }

  ChonVe(item) {
    let obj = [
      item,
      this.phim
    ];
    this.shareDataService.sharingDataChiTietPhim(obj);

    this.router.navigate(["/chon-ve/", item.MaLichChieu], {
      queryParams: { tenPhim: item.TenPhim }

    });
  }

  Scroll(value) {

    console.log(value);
    this.LichChieu.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
