import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-success',
  templateUrl: './comment-success.component.html',
  styleUrls: ['./comment-success.component.css']
})
export class CommentSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnHome(){
    this.router.navigate(['/']);
  }
}
