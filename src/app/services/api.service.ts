import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from '../models/data';
import { dataMock } from '../mock/dataMock';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getData(): Observable<Data[]> {
    return of(dataMock)
  }

}
