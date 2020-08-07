import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  frstname: string; lstname: string; commentaire:string;
  sexe=[{id:0,name:'homme'},{id:1,name:'femme'}];

  constructor() { }

  ngOnInit(): void {
  }

  do(f){
    console.log(f.viewModel);
  }

  f(g){
    this.frstname = g.value.name.firstname;
    this.lstname = g.value.name.lastname;;
    this.commentaire = g.value.comment;
  }

}
