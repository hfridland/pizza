import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    orders: [],
    loading: false,
    error: ''
}

const fetchOrderStart = (state, action) => {
    return updateObject(state, { loading: true });
}

const fetchOrderSuccess = (state, action) => {
    return updateObject(state, { 
        orders: action.orders,
        loading: false
    });
}

const fetchOrderFail = (state, action) => {
    return updateObject(state, { 
        loading: false,
        error: action.error.response.statusText
    });
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS_START:
            return fetchOrderStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrderSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL:
            return fetchOrderFail(state, action);
        default:
            return state;
    }
}

export default reducer;