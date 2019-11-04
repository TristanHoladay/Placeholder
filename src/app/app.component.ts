import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './interfaces/itodo';
import { MatTableDataSource, MatTable, MatFormField, MatSortModule, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'PlaceHolder';
  Control = new FormControl;
  displayedColumns: string[] = ['Title', 'Id', 'UserId', 'Completed'];
  dataSource: MatTableDataSource<ITodo>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private _service: PlaceholderService
  ) {}

  ngOnInit() {
    this._service.getTodos().subscribe(data => {
      this.dataSource = new MatTableDataSource<ITodo>(data);
      
    });
    
  }

  ngAfterViewInit() {
    //test comment for testing pull request
    this.dataSource.sort = this.sort;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
