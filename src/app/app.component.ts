import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
username = '';

constructor(){
}



ngOnInit(): void {
}
myButton(){
this.username = "";
}
}
