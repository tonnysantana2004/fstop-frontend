import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AxiosService} from "./shared/axios.service";

export const authGuard: CanActivateFn = async () => {

    const router = inject(Router);
    const token = localStorage.getItem('access_token');
    const axiosService = inject(AxiosService);

    if (!token) {
        await router.navigate(['/login']);
        return false;
    }

    try {
        // await new Promise(resolve => {setTimeout(resolve,3000)})
        // await axiosService.request("GET", "users", null)
        return true;
    } catch (error) {
        await router.navigate(['/login']);
        return false;
    }

};
