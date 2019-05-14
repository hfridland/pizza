import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Menu.module.css';
import MenuItem from '../../../components/MenuItem/MenuItem';
import * as actions from '../../../store/actions/index';

class Menu extends Component {

    componentWillMount() {
        const headerName = this.props.menu[0].header.name;
        this.props.onSetHeaderName(headerName);
    }

    switchViewSubitemsIdx = (headerName) => {
        if (this.props.headerName === headerName) {
            return;
        }
        this.props.onSetHeaderName(headerName);
    }

    render() {
        const content = this.props.data.map(item => {
            return (<MenuItem key={item.header.name} data={item} showSubItems={item.header.name === this.props.headerName} clicked={() => this.switchViewSubitemsIdx(item.header.name)} />);
        });
        return (
            <div className={classes.Menu}>
                {content}
            </div>
        );    
    }
}

const mapStateToProps = state => {
    return {
        menu: state.sales.menu,
        headerName: state.sales.headerName
    }    
}


const mapDispatchToProps = dispatch => {
    return {
        onSetHeaderName: (headerName) => dispatch(actions.setHeaderName(headerName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);