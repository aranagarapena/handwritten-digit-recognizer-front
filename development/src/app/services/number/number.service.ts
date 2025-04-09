import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment  } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  private baseUrl =  `${environment.URL_BACKEND}`;
  private storeNumberApiUrl = `${environment.URL_API_NUMBER_ADD}`;

  constructor(private http: HttpClient) { }

  // método para insertar un número dibujado a mano en el servidor
  addNumber(payload: any): Observable<any> {

    return this.http.post(this.baseUrl + this.storeNumberApiUrl, payload).pipe(
      catchError(this.handleError)
    );

  }

    /*
    - Metodo para el manejro de los errores que nos devuelve la API
  */
    private handleError(apiError: HttpErrorResponse) {
      if (apiError.error instanceof ErrorEvent) {
        // Client-side errors
        return throwError(() => `Error: ${apiError.error.message}`);
      } else {
        // Server-side errors -  TODO: revisar cómo se sacan los valores si hay más d eun error
        if (apiError.status === 422 && apiError.error.errors) {
          const errors = apiError.error.errors;
          var errorMessages : any = [];
  
          for (const propiedad in errors) {
            if (Object.prototype.hasOwnProperty.call(errors, propiedad)) {
              const elemento = errors[propiedad];
              errorMessages.push(elemento); 
            }
          }
          // return valores;
        // return throwError(() => `Error Code: ${apiError.status}\nMessages: ${errorMessages}`);
        return throwError(() => ({
          errorCode: apiError.status,
          messages: errorMessages
        }));
      }
      return throwError(() => ({
        errorCode: apiError.status,
        messages: errorMessages
      }));    }
    }

}
