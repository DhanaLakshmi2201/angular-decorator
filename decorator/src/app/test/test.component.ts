import { EmitterVisitorContext } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
 
  @Input('data') name5:any;
  @Output()childEvent= new EventEmitter();

  visible=true;
  name="rose";
  message="hello";


  ngOnInit(): void {
  }

  outputEvent(){
    this.childEvent.emit('hi, how are you');
  }
}
