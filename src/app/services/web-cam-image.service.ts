import { Injectable } from '@angular/core';
import { WebCamImageItem } from '../models/interfaces';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class WebCamImageService {

  constructor(private commonService: CommonService) { }

  private webCamImages!: WebCamImageItem[];

  loadData =(): WebCamImageItem[]=> {
    return this.commonService.localStorage.get('images')
  }

  pushData = (webcamImage: WebCamImageItem) => {
    try {
      this.webCamImages = this.commonService.localStorage.get('images')? this.commonService.localStorage.get('images'): [];
      this.webCamImages.push(webcamImage);
      this.commonService.localStorage.set('images', this.webCamImages);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  pushDataArray = (webcamImage: WebCamImageItem[]) => {
    try {
      // this.webCamImages = this.commonService.localStorage.get('images')? this.commonService.localStorage.get('images'): [];
      // this.webCamImages.push(webcamImage);
      this.commonService.localStorage.set('images', this.webCamImages);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  deleteImageAt = (index: number) => {
    this.webCamImages = this.commonService.localStorage.get('images')? this.commonService.localStorage.get('images'): [];
    try {
      if(this.webCamImages.length > 0){
        this.webCamImages.splice(index,1);
        if(this.webCamImages.length == 0){
          this.commonService.localStorage.delete('images');
        }else{
          this.pushDataArray(this.webCamImages);
        }
        console.log('operation: success');
      }else{
        console.log('the list is empty.');
      }
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }

  }

}
