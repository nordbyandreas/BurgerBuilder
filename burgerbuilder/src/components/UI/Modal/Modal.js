
import React, {Component} from 'react';
import classes from './Modal.module.css';
import Auxx from '../../../hoc/Auxx/Auxx';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(){
        console.log('[Modal] WillUpdate');
    }

    render(){


        return(
            <Auxx>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'}}
                    >
                    {this.props.children}
                </div>
        
            </Auxx>

        );
    }

} 


export default Modal;