import React from 'react' ;
import { AppBar, Toolbar, IconButton,Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

import useStyles from "./styles.js"

import logo from '../../assets/commerce.png'

const Navbar = () => {
    const classes = useStyles();
  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                    Commerce.js
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}/>
                    <IconButton arial-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart>

                            </ShoppingCart>
                        </Badge>
                    </IconButton>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar