import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Func } from './../model/function';

@Injectable({
  providedIn: 'root'
})

export class FunctionService {

  functions : Func[];
  constructor(private http: HttpClient) {
    
    this.functions = [
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"},
      {name:"Develop",val: "Development",desc : "Dev activities",year: "2019"}
    ];

  }

/*   getFunctions() {
      return this.http.get('/showcase/resources/data/cars-small.json')
                  .toPromise()
                  .then(res => <Function[]> res.data)
                  .then(data => { return data; });
  } */

  getFunctions() {
    return this.functions;
  }

}
