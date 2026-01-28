import {Component, inject, OnInit, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet} from "@angular/router";
import {Preloader} from "./components/preloader/preloader";
import {filter, single} from "rxjs";

@Component({
    selector: 'app-root',
    imports: [FormsModule, RouterOutlet, Preloader],
    templateUrl: './app.html'
})

export class App implements OnInit{
    protected readonly title = signal('fstop');

    public loading = signal(true);
    private router = inject(Router);

    ngOnInit() {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    this.loading.set(true);
                }
                if (event instanceof NavigationEnd) {
                    this.loading.set(false);
                }
                if (event instanceof NavigationCancel) {
                    this.loading.set(false);
                    //  Redirect to another route
                }
                if (event instanceof NavigationError) {
                    this.loading.set(false);
                    //  Redirect to another route
                }
            });
    }
}