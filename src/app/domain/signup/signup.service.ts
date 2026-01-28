import {Injectable} from '@angular/core';
import {AxiosService} from "../../shared/axios.service";

@Injectable({
    providedIn: 'root',
})

export class SignupService {

    constructor(private axiosService: AxiosService) {}

    signupRequestToBackend(data: object) {

        this.axiosService.request("POST", "/register", data)
            .then(response => {
                localStorage.setItem("access_token", response.data.data[0].token)
                localStorage.setItem("user_id", response.data.data[0].user.id)
            });

    }

}
