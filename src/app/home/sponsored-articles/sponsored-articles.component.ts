import {Component, OnInit} from '@angular/core';
import {Article} from "../../model/article.model";

@Component({
    selector: 'app-sponsored-articles',
    templateUrl: './sponsored-articles.component.html',
    styleUrls: ['./sponsored-articles.component.css']
})
export class SponsoredArticlesComponent implements OnInit {
    private articlesList: Article[] = [];

    constructor() {
        this.articlesList.push(new Article("Milyen ne legyen egy önéletrajz?",
            "https://image.freepik.com/free-vector/professional-curriculum-vitae-template_23-2147732294.jpg",
            "https://www.felvi.hu/diploman_tul/allaskereses/oneletrajz_tippek/milyen_ne_legyen_az_oneletrajz"));
        this.articlesList.push(new Article("Kis cég vagy multi - melyiket válasszam?",
            "http://www.dextra.co.il/image/users/205048/ftp/my_files/international-1.jpg?id=9700408",
            "https://www.felvi.hu/diploman_tul/allaskereses/elso_lepesek/kis_ceg_vagy_multi"));
        this.articlesList.push(new Article("Ha nagy leszek, vlogger leszek! ",
            "https://s10393.pcdn.co/wp-content/uploads/2015/03/vlogger-blog-pic.jpg",
            "https://www.profession.hu/cikk/20180614/ha-nagy-leszek-vlogger-leszek/7861"));
        this.articlesList.push(new Article("Így kaphatjuk meg a legjobb bért",
            "https://go.gerillaoneletrajz.hu/wp-content/uploads/2016/06/2-Bertargyalas-utmutato-300x300.png",
            "https://www.profession.hu/cikk/20180612/igy-kaphatjuk-meg-a-legjobb-bert/7858"));


    }

    ngOnInit() {
    }

    getArticles() {
        let returnList: Article[] = [];
        let maxIndex = this.articlesList.length;
        for (let i = 0; i < maxIndex; i++) {
            let nextIndex = SponsoredArticlesComponent.getNextRandomIndex(maxIndex);
            while (returnList.includes(this.articlesList[nextIndex])) {
                nextIndex = SponsoredArticlesComponent.getNextRandomIndex(maxIndex);
            }
            returnList.push(this.articlesList[nextIndex]);
        }
        return returnList;

    }

    private static getNextRandomIndex(maxIndex: number) {
        return Math.floor(Math.random() * (maxIndex));
    }

}
