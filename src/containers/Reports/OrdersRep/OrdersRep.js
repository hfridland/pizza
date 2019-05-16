import React from 'react';

import OrdersRepItem from '../../../components/Reports/OrdersRepItem/OrdersRepItem';

const transRep = (props) => {
    const repItems = props.orders.map((order, index) => (
        <OrdersRepItem key={index} order={order} />
    ));
    const total = props.orders.reduce((s, order) => s += order.total, 0);
    return (
        <div>
            <h1>Orders Report</h1>
            {repItems}
            <h1>Total: ${total.toFixed(2)}</h1>
        </div>
    );
}

export default transRep;