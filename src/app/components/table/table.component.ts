import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EstateState } from 'src/app/estates/+state/estate.reducer';
import { Store } from '@ngrx/store';
import { estateQuery } from '../../estates/+state/estate.selectors';
import { Entity } from '../../estates/+state/estate.reducer';
import { LoadEstate } from '../../estates/+state/estate.actions';
import { Observable } from 'rxjs';
import { filter } from 'bluebird';

@Component({
  selector: 'es-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterContentInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  loaded$: Observable<boolean>;
  displayedColumns = ['name', 'id', 'estate-no', 'will', 'will-date', 'actions'];
  dataSource: MatTableDataSource<Entity>;
  filterValue = '';

  constructor(private store: Store<EstateState>) {
    this.loaded$ = this.store.select(estateQuery.getLoaded);
  }

  ngAfterContentInit() {
    this.store.dispatch(new LoadEstate());
    this.loaded$.subscribe((loaded: boolean) => {
      if (loaded) {
        this.store.select(estateQuery.getAllEstate).subscribe((data: Entity[]) => {
          this.dataSource = new MatTableDataSource<Entity>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      }
    });
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
