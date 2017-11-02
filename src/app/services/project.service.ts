import { Injectable } from '@angular/core';
import { IProject } from '../components/search-list/iproject';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectService {
  private _projectUrl:string = 'api/projects/projects.json';

  constructor( private _http: Http ) { }

  getProjects() : Observable<IProject[]> {
    return this._http.get(this._projectUrl)
                      .map( (response:Response) => <IProject[]> response.json())
                      //.do( data => console.log("Data--", JSON.stringify(data)) )
                      .catch( this.handleError);
                      
  }

  private handleError(error:Response) {
      console.log("Error", error);
      return Observable.throw(error.json().error || 'server error');
  }
}
