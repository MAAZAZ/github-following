import { CourseService } from './courses.service';
import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})

/*
    `
    <!--><h1>{{title}}</h1><-->
    <h1 [textContent]="title"></h1>
    <!--><img [src]="image" [alt]="title"><-->
    `
*/


export class CoursesComponent {
    
    isActive:boolean=false;
    margin:string="10px";
    title:string="hello world";
    courses: string[];
    image ="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    constructor(crs: CourseService){
        this.courses=crs.getCouses();
    }

    getTitle(){
        return this.title;
    }

    click($event):void{
        event.stopPropagation();
        alert("welcome Angular !!");
        //console.log($event);
    }

    test($event): void{
        console.log("propagation !!!");
    }

    key($event,data): void{
        event.stopPropagation();
        console.log("enter !",$event.target.value,data.value);
    }

}