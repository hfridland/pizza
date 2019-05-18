import React, { Component } from 'react';
import { Button, ButtonToolbar, Table, Form, FormControl } from 'react-bootstrap';

import classes from './SalesRep.module.css';
import SalesRepItem from '../../../components/Reports/SalesRepItem/SalesRepItem';


class SalesRep extends Component {

    state = {
        repObj: {},
        repArr: []
    }

    componentWillMount() {
        this.makeSalesRep(this.props.orders);
    }

    makeSalesRep = (orders) => {
        const repObj = orders.reduce((obj, order) => {
            return order.transaction.reduce((obj, transItem) => {
                const propName = transItem.headerName + '_' + transItem.itemName + '_' + transItem.size;
                if (obj[propName] === undefined) {
                    obj[propName] = {
                        text: transItem.headerText + ' ' + transItem.itemText + ' ' + transItem.size,
                        qty: transItem.qty,
                        unitPrice: transItem.unitPrice
                    }
                } else {
                    obj[propName].qty += transItem.qty;
                }
                return obj;
            }, obj);
        }, {});

        const repArr = [];
        for(const prop in repObj) {
            repArr.push(prop);
        }
        repArr.sort();

        this.setState({
            repObj: repObj,
            repArr: repArr
        });
        //console.log('repObj', repObj);
        //console.log('repArr', repArr);
    }

    render() {
        let total = 0;
        const report = this.state.repArr.map((repItemName, index) => {
            const repItem = this.state.repObj[repItemName];
            repItem.total = repItem.qty * repItem.unitPrice;
            total += repItem.total;
            return <SalesRepItem key={index} repItem={repItem} />;
        });

        return (
            <div className={classes.SalesRep}>
                <h1>Sales Report</h1>
                <Table striped bordered hover size="sm" responsive="sm">
                    <tbody>
                        <tr>
                            <th>Name</th><th>Qty</th><th>Unit Price</th><th>Total</th>
                        </tr>
                        {report}
                        <tr style={{textAlign: 'right'}}>
                            <td colSpan='3'><strong>Total:</strong></td>
                            <td className={classes.RightAlign}>${total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default SalesRep;