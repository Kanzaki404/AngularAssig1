import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css'],
  
})


export class DialogueComponent implements OnInit {

@ViewChild('inputBoxBtn') inputBoxAndBtn:ElementRef;
userNoob:string;
newUser:boolean;
userNameSet:boolean = false;
beverage:string;
usualChoice:boolean = false;
usualBeverage:string;
selected:boolean = false;
  
  constructor(private dataService:DataService, private renderer: Renderer2) { }

  ngOnInit(): void {// check if user has visited the saloon
    this.newUser = this.dataService.checkUserExistence();
    if(this.newUser === false){
      this.userNoob = this.dataService.getUserName()
    }
  }

  del(){ // you never met him
     this.dataService.removeUser()
  }
  onSubmitName(name:string,lastName:string){ //submit the name to be saved in local storage and as well check if user left the input empty

    if(name === '' || lastName ===''){
      alert('Provide name and Last name')
    }else{
       this.dataService.userNameReg(name, lastName);
      this.userNameSet = true;
    this.inputBoxAndBtn.nativeElement.remove();
    }
  }

  getBev(beverage:string){
    this.beverage = beverage;
    this.selected = true
  }

  getUsual(usual:string){
    this.usualBeverage = usual
    this.usualChoice = true
  }

  
}