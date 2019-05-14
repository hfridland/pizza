import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Sales.module.css';
//import menuData from '../../assets/data/menu';
import Menu from './Menu/Menu';
import Invoice from './Invoice/Invoice';
import axios from '../../axios_db';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

export class Sales extends Component {
    state = {
        menu: null//menuData
    }

    componentDidMount() {
        this.props.onLoadMenu();
    }

    componentWillMount() {
        /*axios.get('/menu.json')
            .then(response => {
                for(let fldName in response.data) {
                    console.log('Menu', response.data[fldName])
                }

                console.log('Ok', response)
            })
            .catch(error => {
                console.log('Error', error)
            });*/

        //this.saveMenu();
    }

    /*saveMenu = () => {
        axios.post('/menu.json', menuData)
            .then(response => {
                console.log('Ok', response)
            })
            .catch(error => {
                console.log('Error', error)
            });
    }*/

    render() {
        if (this.props.menu === null)
            return null;
        return (
            <div className={classes.Sales}>
                <h1>Pizza Sales</h1>
                <Menu data={this.props.menu} />
                <Invoice transaction={this.props.transaction} total={this.props.total} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        menu: state.sales.menu,
        transaction: state.sales.transaction,
        total: state.sales.total
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadMenu: () => dispatch(actions.loadMenu())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Sales, axios));


