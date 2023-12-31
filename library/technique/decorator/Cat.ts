function readonly(target?:any, key?:any, descriptor?:any):any {
    descriptor.writable = false;
    console.log("In File: Cat.ts, Line: 3",descriptor);
}


class Cat {
    @readonly
    meow() {
        return ' Says Meow!'
    }
}

var cat = new Cat()
// cat.meow = () => 'haha'
cat.meow() // kết quả vẫn là Say Meow!
console.log("In File: Cat.ts, Line: 16",cat.meow());
// TypeError: Cannot assign to read only property 'meow' of object '#<Example>'
