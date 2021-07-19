import { removeSummaryDuplicates } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decorator';
  name='This is Interpolition';
  name1=true;
  event=" ";
  twoway=" ";
  display="true";
  isShow="false";
  names=["tom","ramya","ammu","pattu"]
  color="red";
  name5="Input Decorator";
  message=" ";
  @ViewChild(TestComponent)child:any;

  
  onclick(){
    this.event="on Click Concept"
  }
  viewchild(){
  this.child.visible=!this.child.visible;
  }
}
