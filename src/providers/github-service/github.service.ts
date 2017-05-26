import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';

import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

import { USER_LIST } from '../../mocks/user.mocks';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';

/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GitHubServiceProvider {

  private baseUrl: String = "https://api.github.com/users";
  private reposUrl: String = "repos";

  constructor(private http: Http) {
    console.log('Hello GitHubServiceProvider Provider');
  }

  /*
    Recupera os valores mockados de um usuário pelo seu nome.
    Retorna um Observable de User.  
  */
  mockGetUserInfo(userName: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === userName)[0]);
  }

  /*
    Recupera os repositórios de um determinado usuário por nome.
    Retorna um Observable de uma lista de repositórios
  */
  mockGetRepositoryInfo(userName: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repo => repo.owner.name === userName))
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.handleError);
  }

  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.handleError);
  }

  private logData(resp: Response) {
    console.log(resp);
  }

  private extractData(resp: Response) {
    return resp.json();
  }

  private handleError(resp: Response | any) {
    return Observable.throw(resp.json() || 'Server error');
  }

}
