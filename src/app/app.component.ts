import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'ap-lc-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  message$: Observable<{ message: string }> = EMPTY;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.message$ = this.http.get<{ message: string }>('http://localhost:8080/message');
  }
}
