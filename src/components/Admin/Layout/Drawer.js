import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawerItemList: {
        paddingLeft: '2rem',
    },
    drawerItem: {
        cursor: 'pointer',
    },
}));

export default function AdminDrawer({ children }) {
    const router = useRouter();
    const classes = useStyles();

    const { page = '1', subPage = '1' } = router.query;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        미디어스톡 어드민
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <Link href={{ pathname: '/admin', query: { page: '1' } }}>
                            <ListItem>
                                <ListItemText className={classes.drawerItem}>1 Page</ListItemText>
                            </ListItem>
                        </Link>
                        <Collapse component="li" in={page === '1'} timeout="auto" unmountOnExit>
                            <List className={classes.drawerItemList}>
                                <Link
                                    href={{
                                        pathname: '/admin',
                                        query: { page: '1', subPage: '1' },
                                    }}
                                >
                                    <ListItem className={classes.drawerItem}>
                                        <ListItemText>1 subpage</ListItemText>
                                    </ListItem>
                                </Link>
                            </List>
                        </Collapse>
                        <Divider />
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                {children}
            </main>
        </div>
    );
}
