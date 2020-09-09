import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  tripId: number;
  commentForm = new FormGroup({
    content : new FormControl('', Validators.required)
  })

  constructor(private activatedRoute: ActivatedRoute, private cookieService: CookieService, private commentService: CommentService, private router: Router) { }

  ngOnInit(): void {
    this.tripId = parseInt(this.activatedRoute.snapshot.paramMap.get("tripId"));
  }

  commentSubmit(){
    var content = this.commentForm.value['content'];
    var date = new Date();
    var userId = this.cookieService.get("userId");
    var username = this.cookieService.get("firstname") + " " + this.cookieService.get("lastname");

    var comment = {
      content: content,
      date: date,
      userId : userId,
      username : username,
      tripId: this.tripId
    };

    this.commentService.addComment(comment)
      .then(()=>{
        this.router.navigate(['/commentSuccess']);
      })
      .catch((err)=> {
        console.error(err);
        this.router.navigate(['/']);
      });
  }
}
