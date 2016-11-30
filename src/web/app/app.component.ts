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
      <div>
        <button disabled (click)="prevPage()"> < prev </button> 
        {{_pageNum}} <button (click)="nextPage()"> next > </button>
      </div>
      <div class="userArea">
          <div *ngFor="let user of userListData.data" >
                <user  
                avatar-url="{{user.avatar}}" 
                first-name="{{capitalizeFirstLetter(user.first_name)}}" 
                last-name="{{capitalizeFirstLetter(user.last_name)}}"></user>          
          </div>
       </div>
        <pre>userListData: {{ userListData | json}}</pre>
    `,
    styles: [`.userArea {
               background: #dadada; 
               height:380px; 
               padding:10px;
               width: 520px;
               display: flex;
               flex-direction: column;
               align-items: center;               
               text-wrap: none;
             }
             
             .userModule img {
               width: 32px;
             }`],

    providers: [UserList],
    directives: [UserComponent]
})
export class AppComponent {


    private userListData;
    private _pageNum = 1;

    constructor(private users: UserList) {

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

    updatedUserList(pageNum: number) {
        //@Gilang, note the `` instead of '', that's to make the string interpolation with ${} work
        this.userListData = `Fetching page ${pageNum}`;
        // console.log(this.userListData);


        let observer = this.users.fetchUsers(pageNum);
        observer.subscribe((data: any) => this.userListData = data);
    }

    nextPage(){
        if (this._pageNum < this.userListData.total_pages) {
            this._pageNum++;
        } else {
            console.log('end of the page')
        }
        this.updatedUserList(this._pageNum);
    };

    prevPage(){
        if (this._pageNum > 1) {
            this._pageNum--;
        } else {
            console.log('its already at the first one');
        }
        this.updatedUserList(this._pageNum);
    };

    //noinspection JSMethodCanBeStatic
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
