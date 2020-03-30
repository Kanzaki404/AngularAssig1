import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
  usualBeverage:string;
  usualChoice:boolean= false;
  @Output() toggle = new EventEmitter<boolean>();
  @Output() usual = new EventEmitter<string>();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  theUsual(){ //if user selects usual get last beverage to be displayed and remove button by toggle
    this.usualBeverage = this.dataService.getUsualBev();
    this.usualChoice = true;
    this.toggle.emit(this.usualChoice)
    this.usual.emit(this.usualBeverage)

  }

}
