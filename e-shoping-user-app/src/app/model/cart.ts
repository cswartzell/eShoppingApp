// This is identical to the product model object. I dont see why
// The cart isnt just an array of product objects, but I guess maybe you 
// Want to add aditional things like "date added to cart/wishlist..."

export class Cart {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public price: number,
        public discountPercentage: number,
        public rating: number,
        public stock: number,
        public brand: string,
        public category: string,
        public thumbnail: string,
        public images: string[],
        public qty: number
    ) {

    }
}
