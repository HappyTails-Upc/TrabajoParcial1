import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basePath: string = 'http://localhost:3000/users'

  httpOptions : {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  currentUser!: User;

  constructor(private http: HttpClient) { }

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

  signIn(user: User){
    return this.http
      .post(`${this.basePath}/sign-in`,user)
      .pipe(retry(2),catchError(this.handleError));
  }

}
