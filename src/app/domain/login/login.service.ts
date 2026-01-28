import {Injectable} from '@angular/core';
import {AxiosService} from "../../shared/axios.service";

@Injectable({
    providedIn: 'root',
})

export class LoginService {

    constructor(private axiosService: AxiosService) {
    }

    loginRequestToBackend(data: object) {

        this.axiosService.request("POST", "/login", data)
            .then(response => {
                localStorage.setItem("access_token", response.data.data[0].token)
                localStorage.setItem("user_id", response.data.data[0].user.id)
            })
            .catch((error) => {
                console.log("Um erro ocorreu")
            });

    }

}
