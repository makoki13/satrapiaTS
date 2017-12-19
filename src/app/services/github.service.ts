import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {

  constructor(private http:Http) { }

  getRepositories(userName:String){
    return this.http.get('https://api.github.com/users'+userName+'/repos')
    .map(res=>res.json()).catch(this.showError)
  }

  private showError(error:Response){
    alert("error:"+error.json());
    return error.json();
  }

}
