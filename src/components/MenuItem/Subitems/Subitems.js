import React from 'react';

import classes from './Subitems.module.css';
import SizePanel from './SizePanel/SizePanel';
import SubmenuItems from '../../../containers/Sales/Menu/SubmenuItems/SubmenuItems';


const subitems = (props) => {
    const display = props.show ? 'block' : 'none';
    return (
        <div style={{display: display}} className={classes.Subitems}>
            <SizePanel data={props.data.sizeDescr} name={props.data.header.name} />
            <SubmenuItems data={props.data.items} hdrName={props.data.header.name} />
        </div>
    );
}

export default subitems;