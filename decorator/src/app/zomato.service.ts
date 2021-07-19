import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZomatoService {

  constructor() { }
  drinks:any="maaza"
  fruit:any="apple"
  receive:any;

  orderDrinks(){
    return this.drinks;
  }
  orderFruits(){
    return this.fruit;
  }
  sendItems(data:any){
    this.receive=data;
    console.log("value",data);
  }
}
