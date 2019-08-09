import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-de-xuat',
  templateUrl: './item-de-xuat.component.html',
  styleUrls: ['./item-de-xuat.component.scss']
})
export class ItemDeXuatComponent implements OnInit {

  @Input() phim;
 

  constructor(private router: Router, private shareDataService: ShareDataService) {

  }

  ngOnInit() {

   
  }

  xemTrailer() {
    this.shareDataService.sharingDataTrailerPhim(this.phim);
  
  }

  xemChiTiet() {
    this.router.navigate(["/chi-tiet-phim/", this.phim.MaPhim], {
      queryParams: { tenPhim: this.phim.TenPhim }
    });

  }

 
}
