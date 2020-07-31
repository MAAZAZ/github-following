import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  //inputs: ['favorite']
})
export class CourseComponent implements OnInit {

  @Input('x') 
  isSelected:boolean;

  hell:string="Hello Angular, Your ";
  @Output('y') message=new EventEmitter<string>();

  constructor() {
    this.isSelected=false;
  }

  ngOnInit(): void {
  }

  sendMessage(){
    let obj:any={title:this.hell};
    this.message.emit(obj);
  }

}
