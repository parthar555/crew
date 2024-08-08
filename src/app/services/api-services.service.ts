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
}