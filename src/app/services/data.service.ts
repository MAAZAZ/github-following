import { BadInput } from '../common/bad-input';
import { NotFoundErr } from '../common/notfound';
import { AppErr } from '../common/app-err';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(protected url: string, protected http: HttpClient) {

    }

    getAll() {
        return this.http.get(this.url)
        .pipe(catchError(this.handleError));
    }

    create(resource) {
        return this.http.post(this.url, resource).pipe(
            catchError(this.handleError));
    }

    update(resource) {
        return this.http.put(this.url + '/' + resource.id, resource);
    }

    delete(resource) {
        return this.http.delete(this.url + '/' + resource).pipe(
            catchError((error: Response) => {
                return this.handleError(error);
            }
            ));
    }

    private handleError(error: Response) {

        if (error.status === 404) {
            return throwError(new NotFoundErr);
        }
        if (error.status === 400) {
            return throwError(new BadInput);
        }

        return throwError(new AppErr);
    }

}
