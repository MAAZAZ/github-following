import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  status:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  change(x){
     this.status=x;
  }

}
