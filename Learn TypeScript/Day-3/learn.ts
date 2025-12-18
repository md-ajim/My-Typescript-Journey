// Type Annotation

let Name : string = 'Ajim';
let age : number = 28;
let debeloper : boolean = true;


// Type Inference


let address : string = 'Dhaka' // automatically string


// Unione Type


let status : 'loading' | 'success' | 'errors'

status = 'loading'

console.log(status, 'status')


// Aliases Type

type ViewMode = 'grid' | 'list'

let ViewMode : ViewMode = 'list'

ViewMode.length

console.log(ViewMode.length , 'View Mode')