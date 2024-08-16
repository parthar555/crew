export interface CreaModel {
    name?: string
    agency?:string
    image?: string
    wikipedia?:string
    launches?: []
    status: string
    id: string
}

export interface ProductModel {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface ProductListModel {
    productList: ProductModel[]
}