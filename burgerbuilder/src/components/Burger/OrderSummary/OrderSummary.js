

import React from 'react';

import Auxx from '../../../hoc/Auxx';

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return (
                <li key={ingKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}:</span> {props.ingredients[ingKey]}
                </li>);
        });

    return(
        <Auxx>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Auxx>
    );

};


export default orderSummary;