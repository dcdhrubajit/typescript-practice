class Person {
    name: string;
    age: number;
    greet(){
        console.log("Hello there");
    }
}

class Programmer extends Person {
    greet(){
        console.log("Hello world");
    }
}
let p1: Person=new Programmer();
p1.greet();

