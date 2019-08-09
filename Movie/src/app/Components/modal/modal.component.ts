import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  phim: any;
  trailerChiTiet: string;
  @ViewChild("trailer") trailer: ElementRef;
  url = "";
  videoUrl: SafeResourceUrl;


  constructor(private shareDataService: ShareDataService, private sanitize: DomSanitizer) {
    this.renderPhim();
    // console.log(this.phim);

  }



  ngOnInit() {
    // this.shareDataService.shareChiTietPhim.subscribe(data => {

    // if(Object.keys(data).length !==0){
    //   this.phim = data;
    //   console.log(data);
    //   console.log("lan dau cua em");
    // }

    // });

  }

  renderPhim() {


    this.shareDataService.shareTrailerPhim.subscribe((data) => {

      if (Object.keys(data).length !== 0) {
        // console.log(data);
        this.phim = data;
        // console.log(this.phim.Trailer);
        this.url = this.phim.Trailer.replace("watch?v=", "embed/") + "?autoplay=1";
        this.videoUrl = this.sanitize.bypassSecurityTrustResourceUrl(this.url);
        // console.log(this.videoUrl);
      }


    });
  }

  closeTrailer() {
    // console.log("ahjhj");
    this.trailer.nativeElement.src = "";
    // console.log(this.trailer.nativeElement.src + "ahjhj") ;
  }

}
