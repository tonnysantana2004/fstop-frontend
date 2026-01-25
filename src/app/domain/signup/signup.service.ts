import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {SignupResponse} from "./signup.response.type";

@Injectable({
    providedIn: 'root',
})

export class SignupService {

    constructor(private httpClient: HttpClient) {}

    signup(name: string, password: string) {
        return this.httpClient.post<SignupResponse>("/signup", {
            name,
            password
        }).pipe(
            tap(
                (value) => {
                    sessionStorage.setItem("auth-token", value.token),
                    sessionStorage.setItem("user-id", value.userId)
                }
            )
        )
    }

}
