import { AuthenticationService } from '@core/index';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as loginActions from '@login/state';
import { concatMap, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { IJwt, IUser, Nullable } from '@app/shared';

@Injectable()
export class AppEffects {

    constructor(
        private _actions$: Actions,
        private _authenticationService: AuthenticationService) {}

    tryAutoConnect$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(loginActions.tryAutoConnect),
            tap(console.log),
            concatMap(unusedAction => {
                const user: IUser = this.buildUser(this._authenticationService.getUsername());
                const jwt: IJwt = this.buildJwt(this._authenticationService.getToken());
                return user.username && jwt.token
                    ? of(loginActions.authenticateUserSuccess({ user, jwt, redirect: false }))
                    : EMPTY;
            })
        );
    });

    private buildUser(username: Nullable<string>): IUser {
        return { username };
    }

    private buildJwt(token: Nullable<string>): IJwt {
        return { token };
    }
}
