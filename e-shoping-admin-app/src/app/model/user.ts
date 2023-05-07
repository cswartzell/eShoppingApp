import { Address } from "./Address";


// map the json file or backend json data 
export class User {
    constructor(
        public id: number,
        public username: string,
        public fullName: string,
        public Address: Address,
        // public address.street: string,
        // public address.city: string,
        // public address.state: string,
        // public address.country: string,
        // public address.pincode: string, 
        public emailid: string,
        public password: string,
        public img: string,
        public contact: string,
    ) {

    }
}


