//Angular imports
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

//Sense custom imports
import {UserList} from './first.service';
import {UserComponent} from './user.component';


@Component({
    selector: 'app',
    template: `
      <h1>Random fake user data 👻  </h1>
      <p style="padding:12px;">From http://reqres.in</p>
      <pre>userListData: {{ userListData | json}}</pre>  
      <div>
        <a (click)="prevPage()"> < prev </a> {{_pageNum}} <a (click)="nextPage()"> next > </a>
      </div>
      
            <user first-name="Heather" last-name="Small"></user>
            <user first-name="Freddie" last-name="Mercury"></user>            
    `,
    providers: [UserList],
    directives:[UserComponent]
})
export class AppComponent {


    private userListData;
    private _pageNum = 1;

    constructor ( private users: UserList ) {

        // @Gilang:
        //
        // "private users: UserList" is basically the same as if we did the following:
        //
        //  ...
        //  private users: UserList;
        //
        //  constructor ( users: UserList ) {
        //        this.users = users;
        //  }
        //



        //TODO: @Gilang, @Leo. This page number must be taken from user input later
        let pageNum = this._pageNum;
        this.updatedUserList(pageNum);

    }

    updatedUserList(pageNum: number){
        //@Gilang, note the `` instead of '', that's to make the string interpolation with ${} work
        this.userListData = `Fetching page ${pageNum}` ;
        console.log(this.userListData);


        let observer = this.users.fetchUsers(pageNum);
        observer.subscribe((data: any) => this.userListData = data);
    }

    nextPage(){
        this._pageNum++;
        this.updatedUserList(this._pageNum);
    };

    prevPage(){
        this._pageNum--;
        this.updatedUserList(this._pageNum);
    };
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
