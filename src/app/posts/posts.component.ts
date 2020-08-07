import { BadInput } from './../common/bad-input';
import { NotFoundErr } from './../common/notfound';
import { AppErr } from './../common/app-err';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any;
  post={
    id:0,
    title:'',
    body:'',
    userId:''
  };

  status:boolean=true;


  constructor(private postsService:PostsService) { 
    
  }

  ngOnInit(): void {
    this.postsService.getAll().subscribe(response=>{
      this.posts=response;
    });
  }


  add(f){
    //console.log(f.form.value.title, f.form.value.body);
    this.post.title = f.form.value.title;
    this.post.body = f.form.value.body;
    this.postsService.create(this.post)
    .subscribe(
      response => {
        //console.log(JSON.stringify(response));
        this.post.id = response['id'];
        this.posts.push(this.post);
      }
      , (error: AppErr) => {
        if (error instanceof BadInput)
          alert('Données saisi incorrect!');
        else
          alert('problème inatendu');
      });
  }

  edit(p){
    this.post=p;
    //console.log(this.post.id);
    this.status=false;
  }

  update(){
    this.postsService.update(this.post).subscribe(
      response => {
        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: ''
        };
        this.status = true;
      }
    );
  }

  delete(f){
    this.postsService.delete(f.id).subscribe(
      response => { 
       let i=this.posts.indexOf(f);
       this.posts.splice(i,1);
       alert(typeof(response));
      //console.log(response);
      }
    ,(error:AppErr)=>{
      if(error instanceof NotFoundErr)
        alert('element does not existe!');
      else
        alert('problème inatendu');
    });
  }

}
