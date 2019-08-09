import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';

@Component({
  selector: 'app-phone-app',
  templateUrl: './phone-app.component.html',
  styleUrls: ['./phone-app.component.scss']
})
export class PhoneAppComponent implements OnInit {
  @ViewChild("phoneApp") phoneApp: ElementRef;
  scrollItem: any;

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.shareKey.subscribe((data) => {
      if (Object.keys(data).length !== 0) {

        if (data.toString() === "ungdung") {
          this.scrollPhim();
        }
      }

    })
  }

  scrollPhim() {

    this.phoneApp.nativeElement.scrollIntoView({ behavior: 'smooth' });

  }

}
