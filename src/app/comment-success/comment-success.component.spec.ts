import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSuccessComponent } from './comment-success.component';

describe('CommentSuccessComponent', () => {
  let component: CommentSuccessComponent;
  let fixture: ComponentFixture<CommentSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
