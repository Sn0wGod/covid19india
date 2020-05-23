import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import styles from './NavBar.module.css'

const useStyles = makeStyles((theme) => ({
    appbar: {
        alignItems: 'center',
        marginBottom:'50px'
      },
    

    
  }));

function NavBar({data}) {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" color='secondary' className={`${classes.appbar}`}>
                <Toolbar>
                    <Typography variant="h5">
                       Covid19India
                    </Typography>
                </Toolbar>
            </AppBar>
            <h5 className={styles.ftwo}>Last Updated :- {new Date(data.datas.lastRefreshed).toDateString()}</h5>
         
           
        </div>
    )
}

export default NavBar
