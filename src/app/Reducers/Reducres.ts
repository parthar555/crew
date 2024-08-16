import { Action } from "@ngrx/store";
import * as Actions from '../Actions/Actions';
import {ProductListModel} from '../Model/AppModel'

const defaultState: ProductListModel = {
    productList: []
}

export function Reducers(state: any = defaultState, action: Action) {
    switch(action.type) {
        case Actions.GET_PRODUCT:
            return {...state, prductList: (action as Actions.GetProductList).payload}
        default:
            return state;
        
    }
}