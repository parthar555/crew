import { Action } from "@ngrx/store";
import * as Actions from '../Actions/Actions';
import {StateModel} from '../Model/AppModel'

const defaultState: StateModel = {
    productList: [],
    productDetails: {}
}

export function Reducers(state: any = defaultState, action: Action) {
    switch(action.type) {
        case Actions.GET_PRODUCT:
            return {...state, productList: (action as Actions.GetProductList).payload}
        case Actions.GET_PRODUCT_DETAILS:
            return {...state, productDetails: (action as Actions.GetProductDetails).payload}
        default:
            return state;
        
    }
}