import { Component, ViewChild, AfterViewChecked } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EstateState } from 'src/app/estates/+state/estate.reducer';
import { Store } from '@ngrx/store';
import { estateQuery } from '../../estates/+state/estate.selectors';
import { Entity } from '../../estates/+state/estate.reducer';
import { LoadEstate } from '../../estates/+state/estate.actions';
import { Observable, Subscription } from 'rxjs';
import { TableDataSource } from './table-datasource';

@Component({
  selector: 'es-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewChecked {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  loaded$: Observable<boolean>;
  displayedColumns = ['name', 'id', 'estate-no', 'will', 'will-date', 'actions'];
  dataSource: TableDataSource<Entity>;
  dataSubscription: Subscription;

  constructor(private store: Store<EstateState>) {
    this.loaded$ = this.store.select(estateQuery.getLoaded);
  }

  ngAfterViewChecked() {
    this.loaded$.subscribe((loaded: boolean) => {
      if (loaded) {
        this.store.select(estateQuery.getAllEstate).subscribe(data => {
          this.dataSource = new TableDataSource<Entity>(data, this.paginator, this.sort);
        });
      } else {
        this.store.dispatch(new LoadEstate());
      }
    });
  }
}
