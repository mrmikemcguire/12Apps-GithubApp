import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';


@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    // styleUrls: ['./app.component.css']
})

export class ProfileComponent {

    user:any[ ];
    constructor(private _githubService : GithubService) {
        this._githubService.getUser().subscribe(user => {
          this.user = user;
        });
    }
}

