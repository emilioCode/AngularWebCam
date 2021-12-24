import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebCamImageItem } from 'src/app/models/interfaces';
import { WebCamImageService } from 'src/app/services/web-cam-image.service';

@Component({
  selector: 'app-mat-grid-tile',
  templateUrl: './mat-grid-tile.component.html',
  styleUrls: ['./mat-grid-tile.component.css']
})
export class MatGridTileComponent implements OnInit {
  @Input() images: WebCamImageItem[] = [];
  @Input() cols: string = '';  
  @Input() rowHeight: string = '';  
  @Input() colspan: string = '';  
  @Input() rowspan: string = '';  
  @Input() background: string = ''; 
   
  @Output() remove = new EventEmitter<number>();
  @Output() download = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  removeAt(index: number){
    this.remove.emit(index);
  }

  openNewTab(url:any){
    this.download.emit(url);
  }
}
