import { Product } from "./Product";

// map the json file or backend json data 
export class Order {
    constructor(
        public id?: number,
        public orderDate?: Date,
        public orderStatus?: string,
        public products?: Array<OrderItems[]>, ////THIS IS AN ARRAY OF PRODUCTS
        public totalItems?: number,
        public shipmentCharges?: number,
        public totalAmount?: number,
        public paymentStatus?: string,
        public paymentMethod?: string,
        public userId?: number,
        public name?: string,
        public email?: string,
        public contact?: string,
    ) {

    }
}

export class OrderItems {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public price?: number,
        public discountPercentage?: number,
        public rating?: number,
        public stock?: number,
        public brand?: string,
        public category?: string,
        public thumbnail?: string,
        public images?: string[],
        public qty?: number
    ) {

    }
}
