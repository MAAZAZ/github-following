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
    type:number=20;
    margin:string="10px";
    body ="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum."
    nbr: number = 19.5874;
    date=new Date(1999,9,10);
    title:string="hello world";
    courses: string[];
    image ="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    star:boolean=false;

    tet={id:1,person: {name: "maazaz" ,address: null, pays:undefined}};

    tabl = [{ id: 1, name: "maazaz" }, { id: 2, name: "zakaria" }, { id: 3, name: "enset" }, { id: 4, name:"media"}];

    constructor(crs: CourseService){
        this.courses=crs.getCouses();
        console.log(this.star);
    }

    clickStar(){
        this.star=!this.star;
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

    keyup(): void {
        event.stopPropagation();
        console.log("enter !", this.title);
    }

    changed(id){
        switch(id){
            case 0: this.type=0; break;
            case 2: this.type = 2; break;
            case 1: this.type = 1; break;
            default: this.type=4; break;
        }
    }

    add(){
        this.tabl.push({id:5,name:"added"});
    }

    trackCourses(index, course){
        return course ? course.id : undefined;
    }

}