import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import { WebCamImageService } from 'src/app/services/web-cam-image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private imagesService: WebCamImageService) { }

  ngOnInit(): void {
  }
  saved: boolean = false;

  // latest snapshot
  public webcamImage: WebcamImage = null!;
  showWebcam: boolean = false;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  triggerSnapshot(): void {
    this.trigger.next();
    this.saved = false;
  }
  
  handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    // console.log(this.webcamImage.imageAsDataUrl);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  resetAll(): void {
    this.webcamImage = null!;
  }

  saveData(): void {
    const response = this.imagesService.pushData({
       _imageAsBase64: this.webcamImage.imageAsBase64,
       _imageAsDataUrl: this.webcamImage.imageAsDataUrl,
      _imageData: this.webcamImage.imageData
    });

    if(!response) {
      alert('the picture does not save in the localStorage. Please try again');
      return;
    }
    this.saved = true;
  }

}
