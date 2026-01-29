import {CanActivateFn} from '@angular/router';

export const preloaderGuard: CanActivateFn = async (route, state) => {
    await new Promise(resolve => {
        setTimeout(resolve, 1800)
    })
    return true;
};
