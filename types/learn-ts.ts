let name: string = "John Doe";
console.log(name );

let age: number = 5;
console.log(age);

//Функції
type SumFn = (a:number, b:number, name?: string) => number;

const sum: SumFn = (a, b, name) => {
    if(name)
    console.log(name);
    return a + b;
}

console.log(sum(2,3));
console.log(sum(10,15));
console.log(sum(7,8, "Adding numbers"));

//Об'єкти
const car: {brand: string, model: string, year: number, price: number} = {
    brand: "BMW",
    model: "X5",
    year: 2018,
    price: 30000
}

console.log(car);

interface ICar{
    brand: string;
    model: string;
    year: number;
    price: number;
}

type Car = {
    brand: string;
    model: string;
    year: number;
    price?: number;
}

const car2: Car = {
    brand: "Toyota",
    model: "Camry",
    year: 2019,
    price: 14000
}
const car3: Car = {
    brand: "Honda",
    model: "Civic",
    year: 2020
}

// Типізація масивів
const arr: number[] = [32,54,82,78];

// | - оператор "або"
type SomeType = number | string | undefined | null;

let some: SomeType = 45;
some = "Hello";
some = undefined;
some = null;
console.log(some);

type SomeType2 = Car | null;

// літеральні типи
type MethodHTTP = "POST" | "PUT" | "PATCH" | "DELETE" | "GET";

const method1: MethodHTTP = "POST";
const method2: MethodHTTP = "GET";
console.log(method1, method2);

type NumberType = 1 | 2 | 3;
let num1: NumberType = 1;
num1 = 2;
num1 = 3;
console.log(num1);

// Кортежі
const person: [number, number, string]= [2, 15, "Bob"];

const arr3: [string, ...number[]] = ["Scores", 23,45,67,89];

const arr4: (number | boolean)[] = [1, true, 2, false];

let matrix: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let matrix2: [number[], number[], number[]] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// Дженерики

function message<T, U>(text: T, value?: U): void{
    console.log(text, value);
}

message("Hello");
message<number, null>(12345);
let car_i: ICar = {brand: "Audi", model: "A6", year: 2020, price: 40000};
message(car_i);
message("Age:", 30);

//Завдання
interface IBook{
    id: number;
    readonly title: string;
    readonly author: string;
    year: number;
    genre: "fiction" | "non-fiction" | "science" | "history";
    isAvailable: boolean;
};

interface IReader{
    id: number;
    readonly name: string;
    email: string;
    borrowedBooks: IBook[];
};
function borrowBook(reader: IReader, book: IBook): void{
    if(book.isAvailable){
        reader.borrowedBooks.push(book);
        book.isAvailable = false;
        console.log(`${reader.name} позичив книгу: "${book.title}".`);
    } else {
        console.log(`Вибачте, "${book.title}" наразі недоступна.`);
    }
}

function returnBook(reader: IReader, bookId: number): void{
    const bookIndex = reader.borrowedBooks.findIndex(book => book.id === bookId);
    if(bookIndex !== -1){
        const book = reader.borrowedBooks[bookIndex];
        book.isAvailable = true;
        reader.borrowedBooks.splice(bookIndex, 1);
        console.log(`${reader.name} повернув книгу: "${book.title}".`);
    } else {
        console.log(`${reader.name} не має цієї книги для повернення.`);
    }
}

const book1: IBook = {
    id: 1,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "fiction",
    isAvailable: true
};
const book2: IBook = {
    id: 2,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    year: 1988,
    genre: "science",
    isAvailable: true
};
const reader1: IReader = {
    id: 1,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    borrowedBooks: []
};

borrowBook(reader1, book1);
borrowBook(reader1, book2);
returnBook(reader1, 1);
returnBook(reader1, 2);