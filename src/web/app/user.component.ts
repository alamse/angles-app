import { Component, Input } from '@angular/core';

@Component({
    selector: 'user',
    template: `
    <div class = "userModule" >
      <img [src]="profilePicture">
      <div>First name: <b>{{firstName}}</b></div>
      <div>Last name: <b>{{lastName}}</b></div>
    </div>`,
    styles: [ `.userModule {
               background: #fafafa; 
               margin:10px; 
               padding:10px;
               width: 460px;
               display: flex;
               flex-direction: column;
               align-items: center;               
               text-wrap: none;
             }
             
             b{
                color:#770000;
             }
             
             .userModule img {
               width: 32px;
             }` ]
    // providers: [ UserList  ]
})



export class UserComponent {
    // TODO: check if we can make the @Input fields private
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