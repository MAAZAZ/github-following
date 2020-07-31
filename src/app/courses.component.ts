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
    body ="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum."
    nbr: number = 19.5874;
    date=new Date(1999,9,10);
    title:string="hello world";
    courses: string[];
    image ="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    star:boolean=false;

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

}