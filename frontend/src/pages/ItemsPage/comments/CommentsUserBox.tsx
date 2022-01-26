import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import formatRelative from "date-fns/formatRelative";

export const CommentsUserBox = (props) => {
    const { user, commentsItem, date } = props.comment
    const newDate = new Date(date);
    const resultDate = formatRelative(newDate, new Date());

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={user.avatar}/>
                </ListItemAvatar>
                <ListItemText
                    primary={user.nickname}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                fontSize='15pt'
                                color="text.primary"
                            >
                                {commentsItem}
                            </Typography>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {resultDate}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
        </List>
    );
}
