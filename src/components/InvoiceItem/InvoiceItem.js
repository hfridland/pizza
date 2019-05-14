import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './InvoiceItem.module.css';
import * as actions from '../../store/actions/index';

class InvoiceItem extends Component {

    changeQty = (deltaQty) => {
        console.log(this.props.transItem);
        this.props.onChangeTransItem(this.props.transItem, deltaQty);
    }

    render() {
        const transItem = this.props.transItem;
        return (
            <tr>
                <td>{transItem.headerText + ' ' + transItem.itemText + ' ' + transItem.size}</td>
                <td>
                    <button onClick={() => this.changeQty(-1)}>-</button>
                    {transItem.qty}
                    <button onClick={() => this.changeQty(1)}>+</button>
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