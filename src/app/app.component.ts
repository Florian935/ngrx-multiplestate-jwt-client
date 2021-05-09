import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as fromApp from './state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title$: Observable<string> = this._store.pipe(select(fromApp.selectTitle));

    constructor(private _store: Store<fromApp.AppState>) {}

    ngOnInit(): void {
        this._store.dispatch(fromApp.initTitle());
    }
}
