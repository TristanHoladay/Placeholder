import { Component } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './interfaces/itodo';
import { MatTableDataSource, MatTable, MatFormField, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlaceHolder';
  Control = new FormControl;
  displayedColumns: string[] = ['Title', 'Id', 'UserId', 'Completed'];
  dataSource: MatTableDataSource<any[]>;

  constructor(
    private _service: PlaceholderService
  ) {}

  getTodos() {
    this._service.getTodos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
