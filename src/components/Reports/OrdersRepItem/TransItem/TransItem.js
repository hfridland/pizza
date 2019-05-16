import React from 'react';

import classes from './TransItem.module.css';

const transItem = (props) => {
    return (
        <tr>
            <td>{props.transItem.headerText + ' ' + props.transItem.itemText + ' ' + props.transItem.size}</td>
            <td className={classes.Right}>{props.transItem.qty}</td>
            <td className={classes.Right}>${props.transItem.unitPrice.toFixed(2)}</td>
            <td className={classes.Right}>${props.transItem.total.toFixed(2)}</td>
        </tr>
    );
}

export default transItem;