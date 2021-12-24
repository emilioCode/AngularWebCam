import { Component, OnInit } from '@angular/core';
import { WebCamImageItem } from 'src/app/components/shared/interfaces/index';
import { WebCamImageService } from 'src/app/components/shared/services/web-cam-image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  webCamImages: WebCamImageItem[] = [];
  
  constructor(private imagesService: WebCamImageService) { }

  ngOnInit(): void {
    this.loadData();
  }
  
  loadData(){
    this.webCamImages = this.imagesService.loadData();
  }

  removeItem = (index: number) => {
    const response = this.imagesService.deleteImageAt(index);
    if(response) this.loadData();
  }

  async download(imageSrc:any){
      /* Using fetch */
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = `picture_${new Date()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }
}
