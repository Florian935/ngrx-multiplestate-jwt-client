import { IPost } from 'src/app/shared';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '@core/http/post.service';
import * as postsActions from './posts.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class PostsEffects {

    constructor(
        private _postService: PostService,
        private _actions$: Actions) { }

    loadPosts$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(postsActions.loadPosts),
            switchMap(action => {
                return this._postService.getAll().pipe(
                    map((posts: Array<IPost>) => postsActions.loadPostsSuccess({ posts }))
                );
            })
        );
    });

    addPost$ = createEffect(() => {
        return this._actions$.pipe(ofType(postsActions.addPost),
            switchMap(({ post }) => {
                return this._postService.insert(post).pipe(
                    map((post: IPost) => {
                        return postsActions.addPostSuccess({ post });
                    })
                );
            }));
    });
}
