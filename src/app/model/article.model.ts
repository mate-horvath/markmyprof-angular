export class Article {
    private _title: string;
    private _imgUrl: string;
    private _url: string;


    constructor(title: string, imgUrl: string, url: string) {
        this._title = title;
        this._imgUrl = imgUrl;
        this._url = url;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get imgUrl(): string {
        return this._imgUrl;
    }

    set imgUrl(value: string) {
        this._imgUrl = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}