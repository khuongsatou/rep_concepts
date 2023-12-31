// import "reflect-metadata";
// class Greeter {
//   @format("Hello, %s")
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     let formatString = getFormat(this, "greeting");
//     return formatString.replace("%s", this.greeting);
//   }
// }


// const formatMetadataKey = "HI";

// console.log("In File: PropertyDecorator.ts, Line: 18",formatMetadataKey);
// function format(formatString: string):any {
//     console.log("In File: PropertyDecorator.ts, Line: 17","HI",formatString);
//   return Reflect.metadata(formatMetadataKey, formatString);
// }
// function getFormat(target: any, propertyKey: string) {
//   return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }


// const greeter = new Greeter("Greeting");
// // console.log("In File: PropertyDecorator.ts, Line: 25",greeter.greet());
