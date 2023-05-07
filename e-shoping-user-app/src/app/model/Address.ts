// map the json file or backend json data 
export class Address {
    constructor(
        public street: string,
        public city: string,
        public state: string,
        public country: string,
        public zipcode: number
    ) {

    }
}
