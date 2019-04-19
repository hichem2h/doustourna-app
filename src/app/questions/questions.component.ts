import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../database-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {


  item = { email: '', name: '', profession: '', question: '' };
  success = false;
  error = false;
  constructor(private api: DatabaseApiService) { }

  ngOnInit() {
    this.success = false;
    this.error = false;
  }

  onSubmit() {
    this.api.sendQuest(this.item).subscribe(
      suc => {
        console.log(suc);
        this.success = true;
        this.error = false;
      },
      err => {
        console.error(err);
        
        this.success = false;
        this.error = true;
      });
  }

}
