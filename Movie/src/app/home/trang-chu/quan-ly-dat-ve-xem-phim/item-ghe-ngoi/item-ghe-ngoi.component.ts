import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe-ngoi',
  templateUrl: './item-ghe-ngoi.component.html',
  styleUrls: ['./item-ghe-ngoi.component.scss']
})
export class ItemGheNgoiComponent implements OnInit {
  @Input() ghe;
  @Output() eventGhe = new EventEmitter();
  trangThaiChon : boolean =  false;


  constructor() { }

  ngOnInit() {
  }

  chonGhe(){
    this.trangThaiChon = !this.trangThaiChon;
    let obj = {
      ghe: this.ghe,
      trangThaiChon:  this.trangThaiChon
    }
    console.log(this.ghe);
    this.eventGhe.emit(obj);

  }
  
  

}
