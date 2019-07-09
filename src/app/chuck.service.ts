import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "7f04eb43e9mshb95d61c303d1dddp1d1de3jsnbd88d376c703"
  })
}

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http: HttpClient) {
  }

  fetchCategories() {
    return this.http.get('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories', options)
  }

  fetchJokes(categoryName) {
    return this.http.get('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=' + categoryName, options)
  }
}
