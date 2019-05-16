import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Reports.module.css';
import LoginForm from './LoginForm/LoginForm';
import RepHdrForm from './RepHdrForm/RepHdrForm';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import OrdersRep from './OrdersRep/OrdersRep';
import SalesRep from './SalesRep/SalesRep';

export class Reports extends Component {

    state = {
        repType: ''
    }

    transactionsReport = (dateFrom, dateTo, repType) => {
        this.props.onFetchOrders(this.props.token, dateFrom, dateTo);
        this.setState({repType: repType});
    }

    render() {
        let spinner = null;
        if (this.props.loadingAuth || this.props.loadingRep) {
            spinner = <Spinner />
        }
        const form = this.props.isAuthenticated ? <RepHdrForm onTransactionsReport={this.transactionsReport} /> : <LoginForm />;

        let report = null;
        if (!(this.props.loadingAuth || this.props.loadingRep) && (this.props.orders.length > 0)) {
            switch (this.state.repType) {
                case 'orders':
                    report = <OrdersRep orders={this.props.orders} />;
                    break;
                case 'sales':
                    report = <SalesRep orders={this.props.orders} />;
                    break;
                default:
                    break;
            }
        }

        return (
            <div className={classes.Reports}>
                <h1>Pizza Reports</h1>
                {form}
                {spinner}
                {report}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loadingAuth: state.auth.loading,
        loadingRep: state.rep.loading,
        isAuthenticated: state.auth.token !== null,
        token: state.auth.token,
        orders: state.rep.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, dateFrom, dateTo) => dispatch(actions.fetchOrders(token, dateFrom, dateTo))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Reports);