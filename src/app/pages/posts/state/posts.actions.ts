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

export const addPost = createAction(
    PostsActions.ADD_POST,
    props<{ post: IPost }>()
);

export const addPostSuccess = createAction(
    PostsActions.ADD_POST_SUCCESS,
    props<{ post: IPost }>()
);

export const addPostError = createAction(
    PostsActions.ADD_POST_ERROR,
    props<{ errorMessage: string }>()
);
