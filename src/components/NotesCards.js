import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { DeleteOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { green, pink, blue, yellow } from "@material-ui/core/colors"

const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category === "reminders") {
                return "1px solid blue"
            }
        }
    },
    avatar: {
        backgroundColor: (note) => {
            if (note.category === "work") {
                return yellow[700]
            }
            if (note.category === "money") {
                return green[500]
            }
            if (note.category === "work") {
                return pink[500]
            }
            return blue[500]
        }
    },
})

const NotesCards = ({ note, handleDelete }) => {
    const { title, details, category, id } = note;
    const classes = useStyles(note);

    return (
        <Card elevation={1}>
           <CardHeader 
             avatar = {
                <Avatar className={classes.avatar}>
                    {category[0].toUpperCase()}
                </Avatar>
             }
             action= {
              <IconButton onClick={() => handleDelete(id)}>
                <DeleteOutlined />
              </IconButton>
            }
            title= {title}
            subheader= {category}
            />
            <CardContent>
                <Typography variant= "body2" color="textSecondary">
                    {details}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NotesCards;
