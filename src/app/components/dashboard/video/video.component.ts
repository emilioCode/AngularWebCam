import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @ViewChild('target', {static: true}) target!: ElementRef;

  options: any;
  player!: videojs.Player;

  constructor(private elementRef: ElementRef) { 
   this.options= { autoplay: !true, controls: true, sources: [this.videoSrc]};

  }
  videoSrc = {
    src: './assets/video1.mkv', // video url in the assets folder
    type: 'video/mp4' // format of the video
  }
  ngOnInit(): void {
    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

}
