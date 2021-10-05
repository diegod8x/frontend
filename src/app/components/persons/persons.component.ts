import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/interfaces/person';
import { AppState, selectError, selectLoadingPersons, selectPersons } from 'src/app/store/reducers';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoadPersons } from 'src/app/store/actions/persons.actions';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'avatar', 'firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource<Person>();
  error$: Observable<string>;
  initValue: Person[] = [{ id: null, avatar: '', email: '', firstName: '', lastName: '' }];
  subscription: Subscription = new Subscription();
  loading: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.getData()

    this.store.pipe(select(selectPersons))
      .subscribe(persons => {
        this.initializeData(persons)
      })

    this.subscription.add(this.store.pipe(select(selectLoadingPersons)).subscribe(loading => {
      if (loading) {
        this.dataSource = new MatTableDataSource(this.initValue);
      }
      this.loading = loading;
    }));

    this.error$ = this.store.pipe(select(selectError));
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getData() {
    this.store.dispatch(new LoadPersons({ personsData: this.initValue }));
  }

  private initializeData(persons: Person[]): void {
    this.dataSource = new MatTableDataSource(persons);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
