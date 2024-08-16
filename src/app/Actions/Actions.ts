import { Action } from "@ngrx/store";

export const GET_PRODUCT = '[Get] Product';

export class GetProductList implements Action {
    public readonly type = GET_PRODUCT;
    constructor(public payload: any) {}
}

export type All = GetProductList;