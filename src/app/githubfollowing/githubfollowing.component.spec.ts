import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubfollowingComponent } from './githubfollowing.component';

describe('GithubfollowingComponent', () => {
  let component: GithubfollowingComponent;
  let fixture: ComponentFixture<GithubfollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubfollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubfollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
