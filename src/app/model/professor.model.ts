export class Professor {

    constructor(private id: number, private  firstName: string, private lastName: string, private title: string, private webSite: string) {
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
}