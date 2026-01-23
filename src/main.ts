import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';


document.fonts.ready.then(() => {
    bootstrapApplication(App, appConfig)
        .catch((err) => console.error(err));
});