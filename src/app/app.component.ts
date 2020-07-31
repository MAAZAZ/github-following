import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Application';
  post={
    'title':'google',
    'isFavorid': true
  }

  receiveMessage(event){
    console.log("hello world");
    this.title=event.title;
  }

}
