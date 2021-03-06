import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { clsValue } from '../models/clsValue.model';

// Alt + O take to html of current component, Alt + U to move back and forth

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.values = this.getValues();
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(
      response => {
        this.values = response;
      },
      error => {
        console.log(error);
      });
  }
}

