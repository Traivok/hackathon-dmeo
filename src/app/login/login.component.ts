import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MockService} from "../mock.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private readonly formBuilder: FormBuilder,
                private readonly router: Router,
                private readonly service: MockService,) {
        this.loginForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            userType: ['', Validators.required]
        });
    }

    ngOnInit() {
        // Retrieve userData from storage and autofill the form
        try {
            this.loginForm.setValue(this.service.user);
        } catch (e) {
        }
    }

    submit() {
        if (this.loginForm.invalid)
            return;

        const value = this.loginForm.value;

        // Save form data to storage
        localStorage.setItem('userData', JSON.stringify(value));

        // Change route based on userType
        const userType = value.userType;

        if (userType === 'manager') {
            this.router.navigate(['/manager', value.email, 'kpis', 'team']);
        } else if (userType === 'collaborator') {
            this.router.navigate(['/collaborator']);
        }
    }

}
