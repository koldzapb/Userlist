import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class AppService {
    private url: string = "/assets/data.json";

    constructor(private http: Http) {
    };

    getUsers() {
        return this.http.get(this.url)
            .map((response: Response) => response.json());
    }
}