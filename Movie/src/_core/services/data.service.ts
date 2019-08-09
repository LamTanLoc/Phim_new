import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap, catchError } from "rxjs/operators/";
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

let Api = "";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    Api = environment.urlApi;
  }


  get(uri: string): Observable<any> {

    return this.http.get(Api + "/" + uri).pipe(
      tap(
        () => {

        },
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
  }

  post(uri: string, data?: Object): Observable<any> {
    return this.http.post(Api + "/" + uri, data, httpOptions).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
  }

  handleError(err) {
    //handle Error
    return err;
  }


}
