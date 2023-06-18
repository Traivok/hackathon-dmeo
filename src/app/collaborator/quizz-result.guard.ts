import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const quizzGuard: CanActivateFn = (route, state) => {
    const quizzResult = localStorage.getItem('quizzResult');
    const router = inject(Router);

    if (!quizzResult) {
        router.navigate(['/quizz']);
        return false;
    }

    return true;
};
