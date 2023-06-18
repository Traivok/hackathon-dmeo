import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'skillmatch';

    constructor(public router: Router) {}

    exit() {
        localStorage.removeItem('quizzResult');
        this.router.navigate(['/login'])
    }
}
