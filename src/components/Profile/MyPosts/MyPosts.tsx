import React from "react";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";
export const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Delete post</button>
            <div className="s.posts">
            <Post />
            </div>
        </div>
    );
}