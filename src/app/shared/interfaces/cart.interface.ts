export interface Cart{
    items:CartItem[];
    subTotal:number;
    taxes:number;
    total:number;
}

export interface CartItem{
    id:number;
    type:string;
    quantity:number;
    name:string;
    price:number;
    itemTotal:number;
}