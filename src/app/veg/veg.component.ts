import { Component, OnInit } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {
  
  // product=[];
  constructor( private list: FirstserviceService, private http:HttpClient ) {
 

  }

  ngOnInit(): void {
   

  }

}
