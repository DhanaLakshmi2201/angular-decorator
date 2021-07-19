import { Component, OnInit } from '@angular/core';
import { ZomatoService } from '../zomato.service';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent{

  constructor(private food:ZomatoService){}
  fruit(){
    let my=this.food.orderFruits();
    console.log(my);
  }
  drink(){
    let my1=this.food.orderDrinks();
    console.log(my1);
  }

  send(){
    this.food.sendItems("call me");
  }
}