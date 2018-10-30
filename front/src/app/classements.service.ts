import { Injectable } from '@angular/core';
import { Classements } from './classements';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from '../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CATCH_ERROR_VAR } from '../../node_modules/@angular/compiler/src/output/output_ast';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

// Bonjour Quentin ça va ? //

export class ClassementsService {

  private classUrl = 'https://localhost:3000/api/classements';


  /** GET heroes from the server */
  getClassements (): Observable<Classements[]> {

  return this.http.get<Classements[]>(this.classUrl);
  }

  constructor(private http: HttpClient) {}
}
