import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu_Option } from '../components/shared/interfaces/menu-options';
import { MenuOptionsService } from '../components/shared/services/menu-options.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // buttons: Menu_Option[] = [];
  buttons$!: Observable<Menu_Option[]> 

  constructor(private menuService: MenuOptionsService) { }

  ngOnInit(): void {
    this.getOptionButtons();
  }

  getOptionButtons(): void{
    // this.menuService.getMenuOptions().subscribe( res => {
    //   this.buttons = res;
    // })
    this.buttons$ = this.menuService.getMenuOptions();
  }

}
