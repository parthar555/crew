import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ApiServices {
    constructor(private http: HttpClient) {}

    getCrewList(): Observable<any> {
        return this.http.get("/api");
    }

    getListOfPrduct(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/todos');
    }

    getProductDetials(id: number): Observable<any> {
        return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }

    saveUser(postData: any): Observable<any> {
        return this.http.post(`https://jsonplaceholder.typicode.com/todos`, postData)
    }
}