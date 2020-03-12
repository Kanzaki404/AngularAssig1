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
  
  
  constructor(private dataService:DataService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.newUser = this.dataService.checkUserExistence();
    if(this.newUser === false){
      this.userNoob = this.dataService.getUserName()
    }
    this.dataService.checkUserExistence()
    console.log(this.newUser)
  }

  del(){
     this.dataService.removeUser()
  }
  onSubmitName(name:string){
    
   
    
    if(name === ''){
      alert('setName')
    }else{
       this.dataService.userNameReg(name);
      this.userNameSet = true;
    this.inputBoxAndBtn.nativeElement.remove();
    }
  }

  
}