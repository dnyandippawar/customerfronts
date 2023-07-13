import { Component, OnInit } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';
import { producttype } from '../datatype';
@Component({
  selector: 'app-chooseitem',
  templateUrl: './chooseitem.component.html',
  styleUrls: ['./chooseitem.component.css']
})
export class ChooseitemComponent implements OnInit {
  hotelinfo: any;
  productlist: any;

  // selectproduct: producttype[] = [
  //   {
  //     id: 0,
  //     productimage: "",
  //     productname: "",
  //     productprice: 0,
  //     catagory: "",
  //     description: "",
  //   },
  // ];

  constructor(private service: FirstserviceService) {}

  displayedColumns = [
    'productimage',
    'productname',
    'productprice',
    'catagory',
    'description',
    'id',
  ];

  ngOnInit(): void {
    const id = 1;

    this.service.getproduct().subscribe((res) => {
   return   this.productlist = res;
    });

    this.service.gethotelinfo(id).subscribe(
      (res) => {
      return  this.hotelinfo = res;
      },
      (error) => {
        console.log("Sorry, data is not present in the database.", error);
      }
    );
  }

  addproduct(id: any) {
    this.service.setProducts(id);
    console.log("data :", id);

  }
}



