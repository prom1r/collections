import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export const Likes = (props) => {

    const countLike = () => {
        return !props.likeCount.length ? props.likeCountFirst.length : props.likeCount.length
    }
    return (
        <>
            <IconButton sx={{
                paddingLeft:'0px',
                paddingTop:'20px'
            }}
                onClick={props.setLike}>
                {props.like ? <ThumbUpAltIcon/> : <ThumbUpAltOutlinedIcon/>} &nbsp;
                {countLike()}
            </IconButton>
        </>
    )
}


