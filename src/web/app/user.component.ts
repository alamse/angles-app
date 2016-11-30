//Angular imports
import { Component, Input } from '@angular/core';

// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { HTTP_PROVIDERS } from '@angular/http';

//Sense custom imports



@Component({
    selector: 'user',
    template: `
    <div class = "userModule" >
      <img [src]="profilePicture">
      <div>First name: {{firstName}}</div>
      <div>Last name: {{lastName}}</div>
    </div>`,
    styles: [ `.userModule {
               background: #eeffee; 
               margin:30px; 
               padding:10px;
               width: 460px;
               display: flex;
               flex-direction: column;
               align-items: center;               
               text-wrap: none;
             }
             
             .userModule img {
               width: 32px;
             }` ]
    // providers: [ UserList  ]
})



export class UserComponent {
    // @Input() private firstName: string;
    // @Input() private lastName: string;
    // @Input() private profilePicture: string;

    @Input('first-name') firstName: string;
    @Input('last-name') lastName: string;
    @Input('avatar-url') profilePicture: string;

    constructor () {
    //  myname:string;
    // constructor () {
        this.firstName = 'N/A 1';
        this.lastName = 'N/A 2';
    }
}