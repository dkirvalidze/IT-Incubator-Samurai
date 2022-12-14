import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import s from './Post.module.css';

type PostType = {
    message: string
}

export const Post = (props:any) => {
    return (
            <div className={s.item}>
                <img src="https://pyxis.nymag.com/v1/imgs/be0/824/ae3d33d1fb4175fad996144b433b801962-mr-bean.rvertical.w330.jpg" alt="avatar" />
                {props.message}
                <div>
                    Like
                </div>
            </div>
    );
}