import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit,AfterViewInit {
  danhSachPhimDangChieu = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.getDanhSachPhimDangChieu();
  }

  ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    })

  }
  getDanhSachPhimDangChieu() {

    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP09`;
    this.dataService.get(uri).subscribe((data) => {
      this.danhSachPhimDangChieu = data;
      console.log(this.danhSachPhimDangChieu);

    })


  }
}
