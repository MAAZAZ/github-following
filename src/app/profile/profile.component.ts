import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username:string="";
  type:string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.username=this.route.snapshot.paramMap.get('username');
/*
    this.route.paramMap.subscribe(params=>{
      this.username = params.get('username');
    })
*/
    this.route.queryParamMap.subscribe(params=>{
      this.type=params.get('type');
    })

  }

  returnTo(){
    return this.router.navigate(['github'],{ queryParams : {page: 1, type:'user'}});
  }

}
