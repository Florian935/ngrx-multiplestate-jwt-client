import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/shared';

const API_BASE_URL = environment.API_BASE_URL;

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private _http: HttpClient) {
    }

    getAll(): Observable<Array<IPost>> {
        return this._http.get<Array<IPost>>(`${API_BASE_URL}/posts`);
    }
}
