// objects.ts

export interface Person {
    name: string;
    age: number;
    gender: string;
  }
  
  export function getPersonDetails(person: Person): string {
    return `${person.name} is ${person.age} years old and identifies as ${person.gender}.`;
  }
  
  export function mergeObjects(obj1: object, obj2: object): object {
    return { ...obj1, ...obj2 };
  }
  
  export function getPropertyCount(obj: object): number {
    return Object.keys(obj).length;
  }
  