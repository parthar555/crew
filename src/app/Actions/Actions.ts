import { Action } from "@ngrx/store";

export const GET_PRODUCT = '[Get] Product';
export const GET_PRODUCT_DETAILS = '[Get] Product Details';

export class GetProductList implements Action {
    public readonly type = GET_PRODUCT;
    constructor(public payload: any) {}
}

export class GetProductDetails implements Action {
    public readonly type = GET_PRODUCT_DETAILS
    constructor(public payload: any) {}
}

export type All = GetProductList | GetProductDetails;