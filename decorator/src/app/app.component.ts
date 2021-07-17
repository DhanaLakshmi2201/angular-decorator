import { removeSummaryDuplicates } from '@angular/compiler';
import { Component } from '@angular/core';

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
  
  onclick(){
    this.event="on Click Concept"
  }
}
