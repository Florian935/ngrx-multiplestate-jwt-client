import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPosts from '@posts/state/posts.reducers';
import { PostsState } from './posts.state';

export const selectPostsState = createFeatureSelector<PostsState>(fromPosts.postsFeatureKey);

const _selectPosts = (postsState: PostsState) => postsState.posts;

export const selectPosts = createSelector(
    selectPostsState,
    _selectPosts
);
