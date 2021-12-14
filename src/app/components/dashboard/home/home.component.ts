import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // latest snapshot
  public webcamImage: WebcamImage = null!;
  showWebcam: boolean = false;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  triggerSnapshot(): void {
    this.trigger.next();
  }
  
  handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    // console.log(this.webcamImage.imageAsDataUrl);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  resetAll():void{
    this.webcamImage = null!;
  }

  /* Using fetch */
  // async downloadImage(imageSrc: string) {
  //   const image = await fetch(imageSrc)
  //   const imageBlog = await image.blob()
  //   const imageURL = URL.createObjectURL(imageBlog)

  //   const link = document.createElement('a')
  //   link.href = imageURL
  //   link.download = 'image file name here'
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  // }
}
