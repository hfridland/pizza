import React from 'react';

import classes from './OrdersRepItem.module.css';
import TransItem from './TransItem/TransItem';

const ordersRepItem = (props) => {
    const orderRepItems = props.order.transaction !== undefined ? props.order.transaction.map((transItem, index) => (<TransItem key={index} transItem={transItem} />)) : null;
    return (
        <div className={classes.OrdersRepItem}>
            Date: {props.order.date}<br/>
            Customer: {props.order.customerName}
            <table>
                <tbody>
                    <tr>
                        <th>Name</th><th>Qty</th><th>Unit Price</th><th>Total</th>
                    </tr>
                    {orderRepItems}
                    <tr style={{textAlign: 'right'}}>
                        <td colSpan='3'><strong>Total:</strong></td>
                        <td>${props.order.total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ordersRepItem;