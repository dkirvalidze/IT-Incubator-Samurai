import React from "react";
import s from'./Profile.module.css'
export const Profile = () => {
    return (
        <div className={s.content}>
            <img src={"https://cdn.techjuice.pk/wp-content/uploads/2019/01/react.jpeg"} alt={"head"} />
            <div>
                Avatar + Description
            </div>
            <div>
                My posts
            </div>
            <div className={s.item}>
                New posts
            </div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    );
}