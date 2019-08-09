import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {
  loaiTinTuc: string = "DienAnh";
  @ViewChild("tintuc") TinTuc: ElementRef;
  scrollItem: any;


  chonLoaiTin(val) {
    this.loaiTinTuc = val;
  }
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.shareKey.subscribe((data) => {
      if (Object.keys(data).length !== 0) {

        if (data.toString() === "tintuc") {
          this.scrollPhim();
        }
      }

    })
  }

  scrollPhim() {

    this.TinTuc.nativeElement.scrollIntoView({ behavior: 'smooth' });

  }

}
