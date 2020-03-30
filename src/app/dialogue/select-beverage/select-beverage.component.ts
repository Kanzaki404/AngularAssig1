import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
  @Output() bev = new EventEmitter<string>();
  drink:string;
  bevSelected:boolean = false;
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    
  }


  onOrder(order:string){ //send choosen beverage to be saved with the userName and hide the list.
    // this.dataService.combineUserWithDrink()
    this.dataService.beverageOrder(order);
    this.bevSelected = true;
    this.drink= order;
    this.bev.emit(order);
  }
}
