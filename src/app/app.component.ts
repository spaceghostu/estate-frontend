import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppInit } from './app.actions';

@Component({
  selector: 'es-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<{}>) {

  }

  ngOnInit(): void {
    this.store.dispatch(new AppInit());
  }
}
