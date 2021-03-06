import { Component, OnInit, Input } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.css']
})


export class RightpanelComponent implements OnInit {
  @Input() ctrlData: any;
  isFullscreen: any;
  imgSrcFull: any;

  constructor() { }

  ngOnInit() {
    this.isFullscreen = false;
  }

  ngOnChanges(){
    
  }

  onDownload(path){
    var str_download_name = path.replace(/^.*[\\\/]/, '');
    saveAs(path, str_download_name);
    console.log(path);
  }

  onClickFull(src, isImg){
    console.log(src);
    console.log(isImg);
    this.isFullscreen = !this.isFullscreen;
    this.imgSrcFull = src;
  }
}
