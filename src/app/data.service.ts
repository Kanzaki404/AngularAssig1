import { Injectable , EventEmitter} from "@angular/core";

@Injectable()

export class DataService {

    cowBoy = { //user info storage

    name: "",
    lastName:"",
    beverage: ""
    }

    //Key '1' is used because we have only one user and adding another person is only possible after :right to be forgoten 

    customerName:string;
    strObj:string;
    toggleList:boolean;
    // objStr:Object;
    checkUserExistence(){ //check if anyuser exist in local storage
     
       return (localStorage.getItem('1') !== null) ? false : true;
    }

    userNameReg(name:string,lastname:string){ //set name and lastname in local storage
        this.customerName =   this.cowBoy.lastName=lastname;
        this.cowBoy.name=name;

        localStorage.setItem('1',  this.customerName)
    }

    beverageOrder(bev:string){ //add beverage into cowboy object to complete the user info and overwrite it with previous item with same key
        this.cowBoy.beverage = bev;
        const str = JSON.stringify(this.cowBoy);
        this.strObj = str;
        localStorage.setItem('1', str)
        //console.log(str)
    }

    getUserName(){ //getting user Last name for display in the dialogue and what not
       const retStr = localStorage.getItem('1');
       this.cowBoy = JSON.parse(retStr);
      // console.log(this.cowBoy.name);
       return this.cowBoy.lastName;
    }

    getUsualBev(){ // returns the saved beverage and toggle is used for extra fanciness
        this.toggleList = true;
        return this.cowBoy.beverage;
        
    }
    removeUser(){ // clears the local storage and refreshed the page for a fresh start Howdy!!!
        localStorage.clear()
        location.reload();
    }

}