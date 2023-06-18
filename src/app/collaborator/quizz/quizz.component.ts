import {Component} from '@angular/core';
import {Router} from "@angular/router";

export interface Question {
    question: string;
    answers: Array<string>;
    weight: number;
    correctAnswerIndex: number;
}

@Component({
    selector: 'app-quizz',
    templateUrl: './quizz.component.html',
    styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent {
    answers: Record<number, number> = {};
    questions: Question[] = [
        {
            question: 'Qual tipo de ponto é amplamente utilizado para unir duas peças de tecido ao longo de uma borda reta?',
            answers: ['a) Ponto decorativo', 'b) Ponto invisível', 'c) Ponto reto', 'd) Ponto overlock'],
            weight: 1,
            correctAnswerIndex: 2,
        },
        {
            question: 'Qual tipo de ponto é frequentemente usado para criar costuras elásticas em roupas esportivas?',
            answers: ['a) Ponto decorativo', 'b) Ponto invisível', 'c) Ponto reto', 'd) Ponto zigzag'],
            weight: 2,
            correctAnswerIndex: 3,
        },
        {
            question: 'Qual tipo de ponto é ideal para unir tecidos finos e delicados, sem deixar marcas visíveis do lado direito?',
            answers: ['a) Ponto decorativo', 'b) Ponto invisível', 'c) Ponto reto', 'd) Ponto overlock'],
            weight: 3,
            correctAnswerIndex: 1,
        },
        {
            question: 'Qual tipo de ponto é usado para fazer bainhas em tecidos leves e transparentes, proporcionando um acabamento limpo e discreto?',
            answers: ['a) Ponto decorativo', 'b) Ponto invisível', 'c) Ponto reto', 'd) Ponto overlock'],
            weight: 4,
            correctAnswerIndex: 1,
        },
        {
            question: 'Qual tipo de ponto é utilizado para fixar botões em uma peça de roupa?',
            answers: ['a) Ponto decorativo', 'b) Ponto invisível', 'c) Ponto reto', 'd) Ponto overlock'],
            weight: 1,
            correctAnswerIndex: 2,
        }
    ];

    constructor(private router: Router) {}

    hasUnansweredQuestions(): boolean {
        return Object.keys(this.answers).length !== this.questions.length;
    }

    submit() {
        let grade = 0;
        let weights = 0;

        for (const index in this.answers) {
            const answer = this.answers[index];

            const q = this.questions[index]

            weights += q.weight;
            if (q.correctAnswerIndex === answer) {
                grade += q.weight;
            }
        }

        localStorage.setItem('quizzResult', (grade / weights).toString());
        this.router.navigate(['..', 'collaborator']);
    }
}
