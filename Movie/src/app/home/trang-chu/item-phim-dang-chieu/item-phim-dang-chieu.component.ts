import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-phim-dang-chieu',
  templateUrl: './item-phim-dang-chieu.component.html',
  styleUrls: ['./item-phim-dang-chieu.component.scss']
})
export class ItemPhimDangChieuComponent implements OnInit {

  @Input() phimDangChieu;
  constructor() { }

  ngOnInit() {
  }

}
