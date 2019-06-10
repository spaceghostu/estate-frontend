import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { ToggleSidebar } from '../../app.actions';

@Component({
  selector: 'es-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  toggleSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
