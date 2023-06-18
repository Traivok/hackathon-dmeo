import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course, MockService} from "../mock.service";

@Component({
    selector: 'app-certificate',
    templateUrl: './certificate.component.html',
    styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
    course!: Course;

    constructor(private route: ActivatedRoute,
                private service: MockService) {
    }

    ngOnInit() {
        // Access the id parameter
        const id = this.route.snapshot.paramMap.get('id');
        const course = this.service.courses.find(c => c.id.toString() === id);
        if (course !== undefined) this.course = course;

    }

}
