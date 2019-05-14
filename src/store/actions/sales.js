import * as actionTypes from './actionsTypes';
import axios from '../../axios_db';

export const setMenu = (menu) => {
    return {
        type: actionTypes.SALES_SET_MENU,
        menu: menu
    };
};

export const fetchMenuFailed = () => {
    return {
        type: actionTypes.FETCH_MENU_FAILED
    };
};


export const loadMenu = () => {
    return dispatch => {
        axios.get('/menu.json')
            .then(response => {
                for (let fldName in response.data) {
                    dispatch(setMenu(response.data[fldName]));
                    break; //only one menu must be
                }
            })
            .catch(error => {

                dispatch(fetchMenuFailed());
            });
    };
};

export const setHeaderName = (headerName) => {
    return {
        type: actionTypes.SALES_SET_HEADERNAME,
        headerName: headerName
    }
}

export const setSize = (headerName, size) => {
    return {
        type: actionTypes.SALES_SET_SIZE,
        headerName: headerName,
        size: size
    }
}

export const addTransItem = (itemName, headerName, size, deltaQty) => {
    return {
        type: actionTypes.SALES_ADD_TRANSITEM,
        itemName: itemName,
        headerName: headerName, 
        size: size, 
        deltaQty: deltaQty
    }
}

export const addTransItemOneParm = (itemName) => {
    return {
        type: actionTypes.SALES_ADD_TRANSITEM_ONEPARM,
        itemName: itemName
    }
}


export const changeTransItem = (transItem, deltaQty) => {
    return {
        type: actionTypes.SALES_CHANGE_TRANSITEM,
        transItem: transItem,
        deltaQty: deltaQty
    }
}

export const clearTransaction = () => {
    return {
        type: actionTypes.SALES_CLEAR_TRANSACTION
    }
}

export const transactionPostOk = (response) => {
    return {
        type: actionTypes.SALES_TRANSACTION_POST_OK,
        response: response
    }
}

export const transactionPostFailed = () => {
    return {
        type: actionTypes.FETCH_TRANSACTION_POST_FAILED
    };
}

export const postTransaction = (transaction, total, customerName) => {
    return dispatch => {
        const order = {
            transaction: transaction, 
            total: total, 
            customerName: customerName
        };
        axios.post('/orders.json', order)
            .then(response => {
                dispatch(transactionPostOk(response));
            })
            .catch(error => {
                dispatch(transactionPostFailed());
            });
    };
}

export const setCustomerName = (customerName) => {
    return {
        type: actionTypes.SALES_SET_CUSTOMERNAME,
        customerName, customerName
    };
}

export const clearModalMessage = () => {
    return {
        type: actionTypes.SALES_CLEARMODALMESSAGE
    };
}