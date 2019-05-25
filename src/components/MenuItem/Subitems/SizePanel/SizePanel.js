import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import * as actions from '../../../../store/actions/index';

class SizePanel extends Component {
    state = {
        size: this.props.data[0]
    }

    componentWillMount() {
        const size = this.props.data[0]; //this.props.menu[0].sizeDescr[0];
        this.props.onSetSize(this.props.name, size);
    }

    /*
    handleChange = (event) => {
        this.setState({ size: event.target.value });
        this.props.onSetSize(this.props.name, event.target.value);
    }
    */
    handleChange = (value, event) => {
       this.setState({ size: value });
       this.props.onSetSize(this.props.name, value);
    };

    render() {
        const content =  this.props.data.map((item, index) => (
            /*
            <label key={index}>
                <input
                    type='radio'
                    name={this.props.name}
                    value={item}
                    checked={(this.state.size === item)}
                    onChange={ (event) => this.handleChange(event)}
                     />
                {item}
            </label>
            */
           <ToggleButton key={index} value={item} size="sm">{item}</ToggleButton>
        ));
        return (
            /*
            <div className={classes.SizePanel}>
                <label><strong>Size: </strong></label>
                {content}
            </div>
            */
           <ToggleButtonGroup type="radio" className="sizes" 
               name={this.props.name} 
               defaultValue={this.state.size}
               onChange={this.handleChange}>
             {content}
           </ToggleButtonGroup>
        );    
    }
}

const mapStateToProps = state => {
    return {
        menu: state.sales.menu
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        onSetSize: (headerName, size) => dispatch(actions.setSize(headerName, size))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SizePanel);