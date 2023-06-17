import {Injectable} from '@angular/core';

export interface Course {
    id: number;
    teacher: string;
    title: string;
    subject: string;
}

export interface KPI {
    experienceInYr: number;
    testGrade: number;
    courses: Array<Course & { done: boolean, completedAt?: Date }>
}

export interface Collaborator extends BaseUser {
    userType: 'collaborator';
    kpi?: KPI
}

export interface Manager extends BaseUser {
    userType: 'manager';
}


export interface BaseUser {
    email: string;
    name: string;
}

export type User = Manager | Collaborator;

export interface Company {
    icon: string;
    name: string;
    description: string;
    location: string;
    manager: User;
    collaborators: Array<Collaborator>
}

export interface TeamKPI {
    avgGrade: number;
    skills: Record<string, number>;
}

@Injectable({
    providedIn: 'root'
})
export class MockService {
    get user(): User {
        const userData = localStorage.getItem('userData');
        if (userData) {
            return JSON.parse(userData);
        }

        throw new Error('log first');
    }

    get company(): Company {
        let manager: Manager;
        try {
            const user = this.user;
            if (user.userType !== 'manager')
                throw new Error('log as manager')
            else
                manager = user;
        } catch (e) {
            manager = {
                name: 'João dos Santos',
                email: 'joão.santos@mail.com',
                userType: 'manager',
            }
        }

        return {
            name: 'ACME Industrias',
            manager,
            description: 'Simplificando a Indústria',
            location: 'Pernambuco',
            collaborators: this.collaborators,
            icon: 'assets/company-logo.png',
        }
    }

    public get courses(): Array<Course> {
        return [
            {
                id: 1,
                teacher: 'Professora Silva',
                title: 'Introdução à Indústria Têxtil',
                subject: 'Tecnologia Têxtil'
            },
            {
                id: 2,
                teacher: 'Professor Oliveira',
                title: 'Design de Moda',
                subject: 'Moda'
            },
            {
                id: 3,
                teacher: 'Professora Souza',
                title: 'Processos de Tingimento',
                subject: 'Tingimento Têxtil'
            }
        ];
    }

    public get collaborators(): Array<Collaborator> {
        return [
            {
                email: 'joao.martins@mail.com',
                name: 'João Martins',
                userType: 'collaborator',
            },
            {
                email: 'fernanda.silva@mail.com',
                name: 'Fernanda Silva',
                userType: 'collaborator',
                kpi:
                    {
                        experienceInYr: 3,
                        testGrade: 85,
                        courses: [
                            {
                                id: 1,
                                teacher: 'Professora Silva',
                                title: 'Introdução à Indústria Têxtil',
                                subject: 'Tecnologia Têxtil',
                                done: true,
                                completedAt: new Date()
                            },
                            {
                                id: 2,
                                teacher: 'Professor Oliveira',
                                title: 'Design de Moda',
                                subject: 'Moda',
                                done: false
                            },
                            {
                                id: 3,
                                teacher: 'Professora Souza',
                                title: 'Processos de Tingimento',
                                subject: 'Tingimento Têxtil',
                                done: true,
                                completedAt: new Date()
                            }
                        ]
                    }
            },
            {
                email: 'carlos.santos@mail.com',
                name: 'Carlos Santos',
                userType: 'collaborator',
                kpi:
                    {
                        experienceInYr: 5,
                        testGrade: 92,
                        courses: [
                            {
                                id: 1,
                                teacher: 'Professora Silva',
                                title: 'Introdução à Indústria Têxtil',
                                subject: 'Tecnologia Têxtil',
                                done: true,
                                completedAt: new Date()
                            },
                            {
                                id: 2,
                                teacher: 'Professor Oliveira',
                                title: 'Design de Moda',
                                subject: 'Moda',
                                done: true,
                                completedAt: new Date()
                            },
                            {
                                id: 3,
                                teacher: 'Professora Souza',
                                title: 'Processos de Tingimento',
                                subject: 'Tingimento Têxtil',
                                done: true,
                                completedAt: new Date()
                            }
                        ]
                    }
            },
            {
                email: 'ana.rodrigues@mail.com',
                name: 'Ana Rodrigues',
                userType: 'collaborator',
                kpi:
                    {
                        experienceInYr: 1,
                        testGrade: 62,
                        courses: [
                            {
                                id: 1,
                                teacher: 'Professora Silva',
                                title: 'Introdução à Indústria Têxtil',
                                subject: 'Tecnologia Têxtil',
                                done: false,
                            },
                            {
                                id: 2,
                                teacher: 'Professor Oliveira',
                                title: 'Design de Moda',
                                subject: 'Moda',
                                done: false,
                            },
                            {
                                id: 3,
                                teacher: 'Professora Souza',
                                title: 'Processos de Tingimento',
                                subject: 'Tingimento Têxtil',
                                done: false
                            }
                        ]
                    }
            }
        ];
    }


    public getTeamKpi(company: Company): TeamKPI {
        let sumGrade = 0;
        let totalWithKpis = 0;
        let skills: Record<string, number> = {
            'Gestão': 0,
            'Confecção': 1,
            'Costura': 2,
        }

        for (const c of company.collaborators) {
            if (c.kpi) {
                sumGrade += c.kpi.testGrade;
                ++totalWithKpis;

                c.kpi.courses.forEach(course => {
                    skills[course.subject] = (skills[course.subject] ?? 0) + 1;
                })
            }
        }

        return {
            avgGrade: sumGrade / (totalWithKpis || 1),
            skills,
        }
    }
}



