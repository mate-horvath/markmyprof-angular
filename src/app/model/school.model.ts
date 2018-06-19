export class School {
    private name: string;
    private webSite: string;
    private rating: number;

    constructor(name: string, rating: number) {
        this.name = name;
        this.rating = rating;
    }

    getName():string{
        return this.name;
    }

    getRating(){
        return this.rating;
    }
}