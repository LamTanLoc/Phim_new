import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import { ShareDataService } from 'src/_core/shared/share-data.service';



@Component({
  selector: 'app-list-de-xuat',
  templateUrl: './list-de-xuat.component.html',
  styleUrls: ['./list-de-xuat.component.scss']
})
export class ListDeXuatComponent implements OnInit {
  listDeXuat = [

  ];
  @ViewChild("phimDeXuat") PhimDeXuat: ElementRef;
  scrollItem: any;


  constructor(private dataService: DataService, private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.getListDeXuat();


    this.shareDataService.shareKey.subscribe((data) => {
      if (Object.keys(data).length !== 0) {
        if (data.toString() === "phim") {
          this.scrollPhim();
        }
      }

    })
  }

  getListDeXuat() {
    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP09`;
    this.dataService.get(uri).subscribe((data) => {
      this.listDeXuat = data;
    })
  }
  scrollPhim() {
    this.PhimDeXuat.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


}
