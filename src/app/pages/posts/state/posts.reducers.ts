import { createReducer, on } from '@ngrx/store';
import { initialPostsState } from './posts.state';
import * as postsActions from './posts.actions';

export const postsFeatureKey = 'postsState';

export const postsReducer = createReducer(
    initialPostsState,
    on(postsActions.loadPosts, (postsState) => {
        return { ...postsState };
    }),
    on(postsActions.loadPostsSuccess, (postsState, { posts }) => {
        return { ...postsState, posts };
    }),
    on(postsActions.addPostSuccess, (postsState, { post }) => {
        return { ...postsState, posts: [...postsState.posts, post] };
    }),

    on(postsActions.deletePostSuccess, (postsState, { postId }) => {
        return { ...postsState, posts: [...postsState.posts.filter(post => post.id !== postId)] };
    }),
    on(postsActions.updatePostSuccess, (postsState, { post }) => {
        const posts = postsState.posts.map(value => {
            return value.id === post.id ? post : value;
        });
        return { ...postsState, posts: [...posts] };
    })
);
