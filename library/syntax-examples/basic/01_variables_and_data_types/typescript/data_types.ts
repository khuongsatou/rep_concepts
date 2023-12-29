// data_types.ts

// Number
export const numberVar: number = 42;

// String
export const stringVar: string = "TypeScript";

// Boolean
export const booleanVar: boolean = true;

// Array
export const numberArray: number[] = [1, 2, 3];
export const stringArray: string[] = ["a", "b", "c"];

// Object
export const person: { name: string; age: number } = {
  name: "John",
  age: 30,
};

// Tuple
export const tupleVar: [string, number] = ["example", 42];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

export const colorVar: Color = Color.Red;

// Any (Dynamic Type)
export const dynamicVar: any = "dynamic value";
