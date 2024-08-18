import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductListModel } from "../Model/AppModel";

export const gtState = createFeatureSelector<any>('state');

export const getAllProductState = createSelector(gtState, (state) => {
    return state.productList;
})

export const getProductDetailsState = createSelector(gtState, (state) => {
    return state.productDetails;
})
