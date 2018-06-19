export class Professor {
    private firstName: string;
    private lastName: string;
    private title: string;
    private website: string;
    private subjectList: string[];
    private rating: number;


    constructor(firstName: string, lastName: string, title: string, rating: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.rating = rating;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getTitle(): string {
        return this.title;
    }

    getRating(): number {
        return this.rating;
    }
}