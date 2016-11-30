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
    `,
    providers: [ UserList  ]
})
export class AppComponent {


    private userListData;


    constructor (users: UserList ) {
        //TODO: consider moving this code from the constructor to a dedicated method

        //TODO: @Gilang, @Leo. This page number must be taken from user input later
        let pageNum = 1;

        //@Gilang, note the `` instead of '', that's to make the string interpolation with ${} work
        this.userListData = `Fetching page ${pageNum}` ;

        let observer = users.fetchUsers(pageNum);
        // observer.subscribe((data: any) => this.userListData = data);
    }
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
