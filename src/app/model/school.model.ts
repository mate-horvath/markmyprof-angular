export class School {
    private name: string;
    private webSite: string;
    private rating: number;
    private  phoneNumber: string;


    constructor(name: string, webSite: string, rating: number, phoneNumber: string) {
        this.name = name;
        this.webSite = webSite;
        this.rating = rating;
        this.phoneNumber = phoneNumber;
    }

    getName():string{
        return this.name;
    }

    getRating(){
        return this.rating;
    }
}