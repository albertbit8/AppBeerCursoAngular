import { Injectable } from '@angular/core';
import { ICerveja } from 'src/models/cerveja';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs//operators'

@Injectable({
  providedIn: 'root'
})
export class CervejasApiService {
  private cervejasUrl = 'http://localhost:3000/api/beers'
  private cervejaUrl = 'http://localhost:3000/api/beer'
  

  constructor(private http: HttpClient) { }

  getCervejas() {
    return this.http.get<ICerveja[]>(this.cervejasUrl)
  }

  getCerveja(id: number) {
    return this.http.get<ICerveja>(this.cervejaUrl + `/${id}`)
  }

  postCerveja(cerveja: any) {
    console.log(cerveja)
    return this.http.post(this.cervejaUrl, cerveja).subscribe(dados => console.log(dados))
  }


}
