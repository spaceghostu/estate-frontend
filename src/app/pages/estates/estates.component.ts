import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EstateState } from 'src/app/estates/+state/estate.reducer';
import { Store } from '@ngrx/store';
import { LoadEstate } from '../../estates/+state/estate.actions';

@Component({
  selector: 'es-estates',
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.scss']
})
export class EstatesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
