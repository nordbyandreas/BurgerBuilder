

import React from 'react';
import Auxx from '../../hoc/Auxx';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = (props) => (

    <Auxx>
        <Toolbar></Toolbar>
        <main className={classes.Content}>
            {props.children}

        </main>
    </Auxx>

);

export default layout;