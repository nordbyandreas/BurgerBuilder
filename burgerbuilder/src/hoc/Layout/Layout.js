

import React, {Component} from 'react';
import Auxx from '../Auxx/Auxx';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component{

    state= {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render(){
        return(
            <Auxx>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}></SideDrawer>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <main className={classes.Content}>
                    {this.props.children}

                </main>
            </Auxx>
        );
       
    };
} 

export default Layout;