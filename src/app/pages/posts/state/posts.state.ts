import { IPost } from 'src/app/shared';

export interface PostsState {
    posts: Array<IPost>;
}

export const initialPostsState: PostsState = {
    posts: []
};
