import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import classes from './InvoiceItem.module.css';
import * as actions from '../../store/actions/index';

class InvoiceItem extends Component {

    changeQty = (deltaQty) => {
        this.props.onChangeTransItem(this.props.transItem, deltaQty);
    }

    render() {
        const transItem = this.props.transItem;
        return (
            <tr>
                <td>{transItem.headerText + ' ' + transItem.itemText + ' ' + transItem.size}</td>
                <td>
                    <Button variant="outline-dark" size="sm" onClick={() => this.changeQty(-1)}>-</Button>
                    <span className={classes.QtySpan}>{transItem.qty}</span>
                    <Button variant="outline-dark" size="sm" onClick={() => this.changeQty(1)}>+</Button>
                </td>
                <td className={classes.RightAlign}>${transItem.unitPrice.toFixed(2)}</td>
                <td className={classes.RightAlign}>${transItem.total.toFixed(2)}</td>
            </tr>
        );    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeTransItem: (transItem, deltaQty) => dispatch(actions.changeTransItem(transItem, deltaQty))
    }
}

export default connect(null, mapDispatchToProps)(InvoiceItem);