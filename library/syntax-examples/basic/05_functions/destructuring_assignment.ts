// destructuring_assignment.ts
interface Person {
    name: string;
    age: number;
    address: {
      city: string;
      country: string;
    };
  }
  
  function getAddress({ address: { city, country } }: Person): string {
    return `I live in ${city}, ${country}.`;
  }
  
  export { getAddress };
  