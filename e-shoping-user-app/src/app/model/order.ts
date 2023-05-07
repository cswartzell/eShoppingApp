import { Product } from "./product";

// map the json file or backend json data 
export class Order {
    constructor(
        public orderDate: string,
        public orderStatus: string,
        public products: Product[], ////THIS IS AN ARRAY OF PRODUCTS
        // public products.qty: number,
        public totalItems: number,
        public shipmentCharges: number,
        public totalAmount: number,
        public userId: number,
        public name: string,
        public contact: string,
        public id: Number,

    ) {

    }
}