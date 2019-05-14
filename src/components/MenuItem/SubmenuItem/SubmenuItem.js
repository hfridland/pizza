import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './SubmenuItem.module.css';
import * as actions from '../../../store/actions/index';


class SubmenuItem extends Component {

    render() {
        const src = require('../../../assets/images/items/' +  this.props.data.image);

        return (
            <div className={classes.SubmenuItem} onClick={() => this.props.onSetHeaderName(this.props.data.name)}>
                <table><tbody><tr>
                    <td>
                        <img src={src} alt="item" width='50px'/>
                    </td>
                    <td>{this.props.data.text}</td>
                </tr></tbody></table>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetHeaderName: (itemName) => dispatch(actions.addTransItemOneParm(itemName))
    }
}


export default connect(null, mapDispatchToProps)(SubmenuItem);