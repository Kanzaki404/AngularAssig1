import { Component, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
  usualBeverage:string;
  usualChoice:boolean= false;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  theUsual(){
    this.usualBeverage = this.dataService.getUsualBev();
    this.usualChoice = true;

  }

}
