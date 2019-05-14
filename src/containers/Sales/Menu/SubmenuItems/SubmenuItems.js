import React from 'react';

import SubmenuItem from '../../../../components/MenuItem/SubmenuItem/SubmenuItem';

const submenuItems = (props) => {
    const content = props.data.map(item => <SubmenuItem key={item.name} data={item} />);
    return (
        <div>
            {content}
        </div>
    );
}

export default submenuItems;

