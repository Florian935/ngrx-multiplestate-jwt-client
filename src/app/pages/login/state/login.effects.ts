import { AuthenticationService } from '@core/index';
import { switchMap, map, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as loginActions from '@login/state/login.actions';
import { IJwt, IUser } from '@app/shared';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {

    constructor(
        private _actions$: Actions,
        private _authenticationService: AuthenticationService,
        private _router: Router
    ) { }

    authenticateUser$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(loginActions.authenticateUser),
            switchMap(({ credentials }) => {
                return this._authenticationService.authenticate(credentials).pipe(
                    map((jwt: IJwt) => {
                        const user: IUser = this.buildUser(credentials.login);
                        this.setPropertiesInLocalStorage(user, jwt);
                        return loginActions.authenticateUserSuccess({ user, jwt, redirect: true });
                    })
                );
            })
        );
    }
    );

    redirectOnSuccessLogin$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(loginActions.authenticateUserSuccess),
            tap(({ redirect }) => {
                if (redirect) {
                    this._router.navigate(['/']);
                }
            })
        );
    }, { dispatch: false }
    );

    private buildUser(username: string): IUser {
        return { username };
    }

    private setPropertiesInLocalStorage(user: IUser, jwt: IJwt): void {
        this._authenticationService.setUser(user);
        this._authenticationService.setToken(jwt);
    }
}


