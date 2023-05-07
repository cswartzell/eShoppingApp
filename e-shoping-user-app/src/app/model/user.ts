import { Address } from "./Address";


// map the json file or backend json data 
export class User {
    constructor(
        public id: number,
        public username: string,
        public fullName: string,
        public Address: Address,
        public emailid: string,
        public password: string,
        public img: string,
        public contact: string,
    ) {

    }
}


