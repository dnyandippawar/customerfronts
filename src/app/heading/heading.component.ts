import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ThemePalette} from '@angular/material/core'

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {

  colorControl = new FormControl('primary' as ThemePalette);
  selectlogin:boolean=false;
  customer:boolean = false;
  owner:boolean = false;
  searchvalue:any = "";
  
  owners(){
  this.owner = true;
  }
  customers(){
  this.customer = true;
  }
  search(searchvalue:any){
  this.searchvalue = searchvalue;
  console.log(searchvalue);
  }
}
