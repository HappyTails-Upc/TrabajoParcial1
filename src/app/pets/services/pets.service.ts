import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  basePath: string = 'http://localhost:3000/pets'

  httpOptions : {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  getPetsById_due(id_due: number): Observable<any> {
    const url = `${this.basePath}?id_due=${id_due}`;
    return this.http.get(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error:HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent){
      console.log(`An error occurred: ${error.error.message}`);
    }else{
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

}
