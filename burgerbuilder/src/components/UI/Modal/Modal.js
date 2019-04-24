
import React from 'react';
import classes from './Modal.module.css';
import Auxx from '../../../hoc/Auxx';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => (

    <Auxx>
        <BackDrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{tranform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'}}
            >
            {props.children}
        </div>

    </Auxx>

);


export default modal;