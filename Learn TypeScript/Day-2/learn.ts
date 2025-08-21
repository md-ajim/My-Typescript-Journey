
//Type annotation means stating the type of the variable in advance.


let value: string = 'Hello, TypeScript!';

let variableName: string = value;

//Basic Data Types of TypeScript

let age : number = 20
let Name : string = 'Ajim'
let isDeveloper : boolean = true


//Any (can take any type)

let data : any = 'Hello'
data = 123

let arr: any[] = [1, 'Hello', true, { key: 'value' }];
arr.push(42);
arr.push('World');
arr.push(false);
arr.push({ newKey: 'newValue' }); 

//But using any too much reduces the benefits of TypeScript.
//Unknown (safe any)

let input: unknown = 'Hi';
input = 42;
// console.log(input.toUpperCase()); ❌ Error (because not sure if input is string or not)

//👉 We can type-check and then use:


if(typeof input === 'number'){
    console.log(input , 'input')
}


// null & undefine 

let nullValue : null = null
let undefineValue : undefined = undefined


