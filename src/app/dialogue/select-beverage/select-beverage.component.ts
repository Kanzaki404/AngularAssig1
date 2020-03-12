import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {

  drink:string;
  bevSelected:boolean = false;
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    
  }


  onOrder(order:string){
    // this.dataService.combineUserWithDrink()
    this.dataService.beverageOrder(order);
    this.bevSelected = true;
    this.drink= order;
  }
}
