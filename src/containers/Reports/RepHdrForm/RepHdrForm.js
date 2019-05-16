import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RepHdrForm.module.css';
import { updateObject } from '../../../shared/utility';
import * as actions from '../../../store/actions/index';

class RepHdrForm extends Component {

    state = {
        dateFrom: '',
        dateTo: ''
    }

    componentWillMount() {

        const dtFrom = new Date((new Date()).setDate(0));
        const sDateFrom = dtFrom.toISOString().split('T')[0];

        const dtTo = new Date();
        const sDateTo = dtTo.toISOString().split('T')[0];
        this.setState({ 
            dateFrom: sDateFrom,
            dateTo: sDateTo
        });
    }

    logoutHandler = () => {
        this.props.onLogout();
    }

    inputChangedHandler = (event, controlName) => {
        const state = updateObject(this.state, {[controlName]: event.target.value});

        this.setState(state);
    }

    render() {
        const repDisabled = (new Date(this.state.dateFrom).toString() === 'Invalid Date') || (new Date(this.state.dateTo).toString() === 'Invalid Date');
        const error = this.props.error !== '' ? <span className={classes.Error}>Error: {this.props.error}</span> : null;
        return (
            <div className={classes.RepHdrForm}>
                <label>
                    Date From:
                    <input type='date' placeholder='Date From' value={this.state.dateFrom} onChange={(event) => this.inputChangedHandler(event, 'dateFrom')} />
                </label>
                <label>
                    Date To:
                    <input type='date' placeholder='Date To' value={this.state.dateTo} onChange={(event) => this.inputChangedHandler(event, 'dateTo')} />
                </label>
                <button disabled={repDisabled} onClick={() => this.props.onTransactionsReport(this.state.dateFrom, this.state.dateTo, 'orders')}>Orders Report</button>
                <button disabled={repDisabled} onClick={() => this.props.onTransactionsReport(this.state.dateFrom, this.state.dateTo, 'sales')}>Sales Report</button>
                {error}
                <button className={classes.BtnLogout} onClick={this.logoutHandler} >Logout</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.rep.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepHdrForm);