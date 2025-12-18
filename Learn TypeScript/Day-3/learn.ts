// Type Annotation

let Name : string = 'Ajim';
let age : number = 28;
let debeloper : boolean = true;


// Type Inference


let address : string = 'Dhaka' // automatically string


// Unione Type


let statuss : 'loading' | 'success' | 'errors'

statuss = 'loading'

console.log(statuss, 'status')


// Aliases Type

type ViewMode = 'grid' | 'list'

let viewMode_variable : ViewMode = 'list'

viewMode_variable.length

console.log(viewMode_variable.length , 'View Mode')


// Interface Type


interface User {
    name : string, 
    age : number,
    isDeveloper : boolean,
}
const user : User = {
    name : 'Ajim',
    age : 28,
    isDeveloper : true
}

console.log(`My name is ${user.name}`)


// Optional Properties


interface UserOptional {

    name : string,
    age? : number
}


const user_optional : UserOptional = {
    name : 'Ajim'
}
console.log(user_optional , 'user_optional')


// Readonly 


const user_readonly : Readonly<User> = {
    name : 'Ajim',
    age : 28,
    isDeveloper : false

}

user_readonly.name 

console.log(user_readonly, 'user_readonly' )