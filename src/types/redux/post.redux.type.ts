import { SET_POSTS } from '../../redux/redux-types';

export type StateType = {
  posts: Post[];
};

export type ActionType = {
  type: typeof SET_POSTS;
  payload: Post[];
};

export type Post = {
  id: number;
  userName: string;
  location: string;
  content: {
    id: number;
    fileType: string;
    url: string;
  }[];
  likeCount: number;
  comment: string;
};
