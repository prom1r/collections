import React, { useState, useEffect } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CommentsUserBox } from "./CommentsUserBox";
import { getCommentsItem } from "../../../api/commentService";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import formatRelative from "date-fns/formatRelative";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxWidth: "250px",
  boxShadow: "0px 0px 0px 0px",
}));

export const CommentsContainer = (props) => {
  const [scroll, setScroll] = useState("paper");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsItem(props.itemId).then((result) => {
      setComments(result);
    });
    const interval = setInterval(() => {
      getCommentsItem(props.itemId).then((result) => {
        setComments(result);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <DialogTitle
        sx={{
          textAlign: "left",
        }}
        id="scroll-dialog-title"
      >
        COMMENTS
      </DialogTitle>
      <DialogContent dividers={scroll === "paper"}>
        <DialogContentText height="300px" id="scroll-dialog-description">
          {comments.map((comment) => (
            <Item key={comment._id}>
              <CommentsUserBox comment={comment} />
            </Item>
          ))}
        </DialogContentText>
      </DialogContent>
    </>
  );
};
