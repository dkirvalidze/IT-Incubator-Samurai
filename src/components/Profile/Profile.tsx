import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import s from'./Profile.module.css'
export const Profile = () => {
    return (
        <div className={s.content}>
            <img src={"https://i.pinimg.com/736x/b9/12/c1/b912c1aa2759236fad22995a0648391c.jpg"} alt={"head"} />
            <div>
                Avatar + Description
            </div>
            <MyPosts />
        </div>
    );
}