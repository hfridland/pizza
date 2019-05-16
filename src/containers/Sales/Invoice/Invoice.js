import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Invoice.module.css';
import InvoiceItem from '../../../components/InvoiceItem/InvoiceItem';
import * as actions from '../../../store/actions/index';
import axios from '../../../axios_db';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Modal from '../../../components/UI/Modal/Modal';


class Invoice extends Component {

    clearTransaction = () => {
        this.props.onClearTransaction();
    }

    handleChange = (event) => {
        this.props.onSetCustomerName(event.target.value);
    }

    postTransaction = () => {
        const dt = new Date();
        const sDate = dt.toISOString().split('T')[0];
        this.props.onPostTransaction(this.props.transaction, this.props.total, this.props.customerName, sDate);
    }

    closeModal = () => {
        this.props.clearModalMessage();
    }

    render() {
        const tblBody = this.props.transaction.map(transItem => {
            const key = transItem.headerName + ' ' + transItem.itemName + ' ' + transItem.size + ' ' + transItem.qty;
            return <InvoiceItem key={key} transItem={transItem} />
        });
        const btnPostDisabled = (this.props.transaction.length === 0) || (this.props.customerName === '');
        const modalDlg = this.props.modalMessage !== '' ? (
            <Modal
                show={true}
                modalClosed={ this.closeModal }>
                {this.props.modalMessage}
            </Modal>
        ) : null;

        return (
            <div className={classes.Invoice}>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                        </tr>
                        {tblBody}
                        <tr>
                            <td colSpan='3'>Total:</td>
                            <td className={classes.RightAlign}>${this.props.total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>

                <input type='text' placeholder='Your Name' value={this.props.customerName} onChange={ (event) => this.handleChange(event) } />
                <button onClick={this.clearTransaction} >Clear</button>
                <button disabled={btnPostDisabled} onClick={this.postTransaction} >Post</button>
                {modalDlg}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        customerName: state.sales.customerName,
        modalMessage: state.sales.modalMessage
    }    
}


const mapDispatchToProps = dispatch => {
    return {
        onClearTransaction: () => dispatch(actions.clearTransaction()),
        onPostTransaction: (transaction, total, customerName, date) => dispatch(actions.postTransaction(transaction, total, customerName, date)),
        onSetCustomerName: (customerName) => dispatch(actions.setCustomerName(customerName)),
        clearModalMessage: () => dispatch(actions.clearModalMessage())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Invoice, axios));
