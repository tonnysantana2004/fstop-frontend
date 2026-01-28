import {Injectable} from '@angular/core';
import axios from "axios";

@Injectable({
    providedIn: 'root',
})

export class AxiosService {

    constructor() {
        axios.defaults.baseURL = "http://localhost:8080/";
        axios.defaults.headers.post["Content-Type"] = "application/json";


        let token = localStorage.getItem('access_token');

        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }

    }

    request(method: string, url: string, data: any): Promise<any> {
        return axios({
            method: method,
            url: url,
            data: data
        })
    }

}
