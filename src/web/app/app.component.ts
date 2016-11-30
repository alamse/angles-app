import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import {UserList} from './first.service';

@Component({
    selector: 'app',
    template: `
      <h1>Random fake user data 👻  </h1>
      <p style="padding:12px;">From http://reqres.in</p>
      <pre>userListData: {{ userListData | json}}</pre>  
      <div>
        <a (click)="prevPage()"> < prev </a> {{_pageNum}} <a (click)="nextPage()"> next > </a>
      </div>
    `,
    providers: [ UserList  ]
})
export class AppComponent {


    private userListData;
    private _pageNum = 1;

    constructor ( private users: UserList ) {
        //TODO: consider moving this code from the constructor to a dedicated method

        //TODO: @Gilang, @Leo. This page number must be taken from user input later
        let pageNum = this._pageNum;
        this.fetchUsers(pageNum);

    }

    fetchUsers(pageNum: number){
        //@Gilang, note the `` instead of '', that's to make the string interpolation with ${} work
        this.userListData = `Fetching page ${pageNum}` ;
        console.log(this.userListData);

        let observer = this.users.fetchUsers(pageNum)alr
        observer.subscribe((data: any) => this.userListData = data);
    }

    nextPage(){
        this._pageNum++;
        this.fetchUsers(this._pageNum);
    };

    prevPage(){
        this._pageNum--;
        this.fetchUsers(this._pageNum);
    };
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
