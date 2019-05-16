import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    menu: null,
    headerName: '',
    sizes: {},
    transaction: [],
    total: 0,
    customerName: '',
    modalMessage: ''
}

const recalcTransaction = (state, transaction) => {
    let total = transaction.reduce((s, transItem) => {
        transItem.total = transItem.qty * transItem.unitPrice;
        return s + transItem.total;
    }, 0);
    state.total = total;
}

const addTransItemHandler = (state, itemName, headerName, size, deltaQty) => {
    const header = state.menu.find(aHeader => aHeader.header.name === headerName);
    const item = header.items.find(item => item.name === itemName);

    const transaction = state.transaction.slice();
    let transItem = transaction.find(transItem => ((transItem.headerName === headerName) && (transItem.size === size) && (transItem.itemName === itemName)));
    if (transItem !== undefined) {
        transItem.qty += deltaQty;
    } else {
        transItem = {
            headerName: headerName,
            headerText: header.header.text,
            size: size,
            itemName: itemName,
            itemText: item.text,
            unitPrice: item.price[size],
            qty: deltaQty
        };
        transaction.push(transItem);
    }
    recalcTransaction(state, transaction);
    return updateObject(state, { transaction: transaction });
}

const setMenu = (state, action) => {
    return updateObject(state, {
        menu: action.menu
    });
}

const fetchMenuFailed = (state, action) => {
    return updateObject(state, { error: true });
}

const setHeaderName = (state, action) => {
    return updateObject(state, { headerName: action.headerName });
}

const setSize = (state, action) => {
    state.sizes[action.headerName] = action.size;
    return updateObject(state, { 
        sizes: { ...state.sizes }
    });
}

const addTransItem = (state, action) => {
    return addTransItemHandler(state, action.itemName, action.headerName, action.size/*state.sizes[action.headerName]*/, action.deltaQty);
}

const addTransItemOneParm = (state, action) => {
    return addTransItemHandler(state, action.itemName, state.headerName, state.sizes[state.headerName], 1);
}

const changeTransItem = (state, action) => {
    const transaction = state.transaction.slice();
    let transItem = transaction.find(transItem => ((transItem.headerName === action.transItem.headerName) && (transItem.size === action.transItem.size) && (transItem.itemName === action.transItem.itemName)));
    if (transItem === undefined) {
        return state;
    }
    transItem.qty += action.deltaQty;
    if (transItem.qty === 0) {
        const ind = transaction.findIndex(curTransItem => curTransItem === transItem);
        transaction.splice(ind, 1);
    }
    recalcTransaction(state, transaction);
    return updateObject(state, { transaction: transaction });
}

const clearTransaction = (state, action) => {
    return updateObject(state, { 
        transaction: [],
        total: 0,
        customerName: ''
    });
}

const transactionPostOk = (state, action) => {
    const customerName = state.customerName;
    return updateObject(state, { 
        transaction: [],
        total: 0,
        customerName: '',
        modalMessage: 'Dear ' + customerName + ', Your Order Posted'
    });
}

const setCustomerName = (state, action) => {
    return updateObject(state, { 
        customerName: action.customerName
    });
}

const clearModalMessage = (state, action) => {
    return updateObject(state, { 
        modalMessage: ''
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SALES_SET_MENU:
            return setMenu(state, action);
        case actionTypes.FETCH_MENU_FAILED:
            return fetchMenuFailed(state, action);
        case actionTypes.SALES_SET_HEADERNAME:
            return setHeaderName(state, action);
        case actionTypes.SALES_SET_SIZE:
            return setSize(state, action);
        case actionTypes.SALES_ADD_TRANSITEM:
            return addTransItem(state, action);
        case actionTypes.SALES_ADD_TRANSITEM_ONEPARM:
            return addTransItemOneParm(state, action);
        case actionTypes.SALES_CHANGE_TRANSITEM:
            return changeTransItem(state, action);
        case actionTypes.SALES_CLEAR_TRANSACTION:
            return clearTransaction(state, action);
        case actionTypes.SALES_TRANSACTION_POST_OK:
            return transactionPostOk(state, action);
        case actionTypes.SALES_SET_CUSTOMERNAME:
            return setCustomerName(state, action);
        case actionTypes.SALES_CLEARMODALMESSAGE:
            return clearModalMessage(state, action);
        default:
            return state;
    }
}

export default reducer;