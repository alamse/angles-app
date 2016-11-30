import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; // needed for RxJS operations, such as map()

@Injectable()
export class UserList {


    //  initial full query, we want to pass page number as a parameter,
    // hence I am turning it into BASE_QUERY for now
    // query = "http://reqres.in/api/users?page=2";

    //TODO: @Leo Find out how to make the BASE_QUERY readonly or const. Somehow

    private  BASE_QUERY: string = "http://reqres.in/api/users?page=";


    constructor (private http: Http) {
    }

    fetchUsers (page) {
        return new Observable(observer => {

            // Here we can inject cached data (from localStorage or memory)
            // So that our app could show at least something, while waiting for the server's response.
            observer.next({
                    id: -1,
                    first_name: "N/A",
                    last_name: "N/A",
                    avatar: "N/A",
                    whatever:"something"
            });


            let query = this.BASE_QUERY + page;

            let httpObservable = this.http.get(query)
                .map(res => res.json()); // @Gilang, try to remove the .data part ;-)

            // @Gilang, @Leo inside this subscribe we could save the result of the query
            // to a memoizer or local storage. Instead we just dump it to the console :-P
            httpObservable.subscribe(
                res => console.log(JSON.stringify(res))
            );

            // Push the result from the server to the observer,
            // In this case the observer is `let observer` in app.component.ts ;-)
            httpObservable.subscribe(res => observer.next(res));
        });
    }
}