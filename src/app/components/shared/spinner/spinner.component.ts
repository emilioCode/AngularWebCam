import { Component, ViewEncapsulation } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  // template:`
  // <div class="app-spinner-screen" *ngIf="isLoading$ | async">
  //     <div class="app-spinner-inner">
  //         <div class="app-logo">
  //             <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  //         </div>
  //         <div class="app-spinner-label"></div><!--Some text(optional)-->
  //     </div>
  // </div>
  // `,
  styleUrls: ['./spinner.component.css']
  // encapsulation: ViewEncapsulation.None
})

export class SpinnerComponent {
  isLoading$ = this.spinnerService.isLoading$;
  
  constructor(private spinnerService: SpinnerService) { }
  
}
