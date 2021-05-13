import { Component, OnInit } from '@angular/core';
import { ICredential } from '@app/shared';
import { Store } from '@ngrx/store';
import * as fromLogin from '@login/state';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private _store: Store<fromLogin.LoginState>) {}

    ngOnInit(): void {}

    onSubmitCredentials(credentials: ICredential): void {
        this._store.dispatch(fromLogin.authenticateUser({ credentials }));
    }
}
