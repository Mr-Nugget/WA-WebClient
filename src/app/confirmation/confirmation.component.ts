import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;
  isOk = true;

  constructor() { }

  ngOnInit(): void {
  }

}
