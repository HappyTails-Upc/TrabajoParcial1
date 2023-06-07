import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Service} from "../model/service";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  basePath: string = 'http://localhost:3000/services'

  httpOptions : {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  getAllServices ():Observable<Service>{
    return this.http.get<Service>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
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
