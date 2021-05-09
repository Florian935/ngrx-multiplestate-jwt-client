import { createAction, props } from '@ngrx/store';
import { IPost } from 'src/app/shared';
import { PostsActions } from './posts-actions.enum';

export const loadPosts = createAction(
    PostsActions.LOAD_POSTS
);

export const loadPostsSuccess = createAction(
    PostsActions.LOAD_POSTS_SUCCESS,
    props<{ posts: Array<IPost> }>()
);

export const loadPostsError = createAction(
    PostsActions.LOAD_POSTS_ERROR,
    props<{ errorMessage: string }>()
);

