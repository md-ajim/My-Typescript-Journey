let isDeveloper: boolean = true;
console.log("Is Developer:", isDeveloper);


let age: number = 25;
console.log("Age:", age);


let name: string = "Ajim";
console.log("Name:", name);


let data: any = "Hello";
data = 123;
console.log("Data:", data);



let input: unknown = "Hi";
input = 123; // ঠিক আছে


if (typeof input === "string") {
  console.log(input.toUpperCase());
}