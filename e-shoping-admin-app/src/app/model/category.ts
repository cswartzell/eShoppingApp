// map the json file or backend json data 
export class Category {
    constructor(
        public id: number,
        public categoryName: string,
        public categoryDescription: string,
        public categoryImageUrl: string,
        public active: boolean,
        public addedOn: string
    ) {

    }
}