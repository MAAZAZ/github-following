import { HttpClient } from '@angular/common/http';
import { FollowingService } from './../github/following.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubfollowing',
  templateUrl: './githubfollowing.component.html',
  styleUrls: ['./githubfollowing.component.css']
})
export class GithubfollowingComponent implements OnInit {

  comptes:any;

  constructor(private followingService: FollowingService) { }

  ngOnInit(): void {
    this.followingService.getData().subscribe(response => {
      this.comptes=response;
      //console.log(response);
    });
  }
  
}
