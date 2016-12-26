import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username: string;
    private client_id = 'eb0d867c2c6417fef689';  //found at github.settings.developer
    private client_secret = '584f79da48c222865b337f1c2b39783e71dd6fa3';

    constructor(private _http: Http){
        console.log("Github Service Ready...");
        this.username = 'mrmikemcguire';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username+'?client_id=' + this.client_id + '&client_secret='
            + this.client_secret).map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username+'/repos?client_id=' + this.client_id + '&client_secret='
          + this.client_secret).map(res => res.json());
  }
  updateUser(username: string){
      this.username = username;
  }
}

