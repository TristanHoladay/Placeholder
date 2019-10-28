import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from '../interfaces/itodo';


@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private _url: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this._url);
  }
}
