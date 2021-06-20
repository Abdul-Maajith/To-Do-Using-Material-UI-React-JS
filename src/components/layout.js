import { makeStyles } from '@material-ui/core';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Typography } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import { format } from "date-fns";
import Avatar from "@material-ui/core/Avatar"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return { 
    page: {
        background: "#f9f9f9",
        width: "100%",
        padding: theme.spacing(3), //base-spacing =>3*8 =24
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    root: {
        display: "flex",
    },
    active: {
        background: "#f4f4f4",
    },  
    title: {
        padding: theme.spacing(2),
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    // Mixins brings the classes associated with the toolbar components including height
    date: {
        flexGrow: 1, // It takes up all the possible horizantal spaces, and pushes other element to the last.
    },
    avatar: {
        marginLeft: theme.spacing(2)
    }
    }
})

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="primary" />,
    path: "/",
  },
  {
    text: "Create Notes",
    icon: <AddCircleOutlineOutlined color="primary" />,
    path: "/create",
  }
]

const Layout = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    return (
        <div className={classes.root}>
            {/* App-Bar */}
 
            <AppBar
              className={classes.appbar}
              elevation={0}
            >
                <ToolBar>
                    <Typography className={classes.date}>
                       Today is the {format(new Date(), "do MMMM Y") }
                    </Typography>
                    <Typography>
                        Maajee
                    </Typography>
                    <Avatar className={classes.avatar}/>
                </ToolBar>
            </AppBar>

            {/* Side-Bar */}

            <Drawer
              className= {classes.drawer}
              variant="permanent"
              anchor="left"
              classes={{ paper: classes.drawerPaper }}
            >
               <div>
                  <Typography variant="h5" className={classes.title}>
                      Pro-Notes
                  </Typography>
               </div>

               {/* Links And Lists */}
               <List>
                 {menuItems.map((item) => (
                    <ListItem
                      key={item.text}
                      button
                      onClick={() => history.push(item.path)}
                      className={location.pathname == item.path ? classes.active : null}
                    >
                      <ListItemIcon>
                          {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text}/>
                    </ListItem>
                 ))}
               </List>

            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout;
