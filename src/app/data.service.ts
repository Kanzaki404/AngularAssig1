import { Injectable , EventEmitter} from "@angular/core";

@Injectable()

export class DataService {

    cowBoy = {

    name: "",
    lastName:"",
    beverage: ""
    }



    customerName:string;
    strObj:string;
    toggleList:boolean;
    // objStr:Object;
    checkUserExistence(){
     
       return (localStorage.getItem('1') !== null) ? false : true;
    }

    userNameReg(name:string,lastname:string){
        this.customerName =   this.cowBoy.lastName=lastname;
        this.cowBoy.name=name;

        localStorage.setItem('1',  this.customerName)
    }

    beverageOrder(bev:string){
        this.cowBoy.beverage = bev;
        const str = JSON.stringify(this.cowBoy);
        this.strObj = str;
        localStorage.setItem('1', str)
        //console.log(str)
    }

    getUserName(){
       const retStr = localStorage.getItem('1');
       this.cowBoy = JSON.parse(retStr);
      // console.log(this.cowBoy.name);
       return this.cowBoy.lastName;
    }

    getUsualBev(){
        this.toggleList = true;
        return this.cowBoy.beverage;
        
    }
    removeUser(){
        localStorage.clear()
        location.reload();
    }

}