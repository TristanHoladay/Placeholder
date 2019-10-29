import { Component } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './interfaces/itodo';
import { MatTableDataSource, MatTable} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlaceHolder';
  TODOS: any[];
  displayedColumns: string[] = ['Title', 'Id', 'UserId', 'Completed'];
  dataSource = new MatTableDataSource(this.TODOS);

  constructor(
    private _service: PlaceholderService
  ) {}

  getTodos() {
    this._service.getTodos().subscribe(data => {
      this.TODOS = data; 
    });
  }
}
