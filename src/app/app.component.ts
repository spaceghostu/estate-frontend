import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppInit, ToggleSidebar } from './app.actions';
import { Observable } from 'rxjs';
import { AppState } from './app.reducer';
import { $sidebarOpen } from './app.selectors';

@Component({
  selector: 'es-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.opened$ = store.pipe(select($sidebarOpen));
  }

  ngOnInit(): void {
    this.store.dispatch(new AppInit());
  }

}
