import React from 'react';

import classes from './SalesRepItem.module.css';

const salesRepItem = (props) => {
    return (
        <tr>
            <td>{props.repItem.text}</td>
            <td className={classes.Right}>{props.repItem.qty}</td>
            <td className={classes.Right}>${props.repItem.unitPrice.toFixed(2)}</td>
            <td className={classes.Right}>${props.repItem.total.toFixed(2)}</td>
        </tr>
    );
}

export default salesRepItem;