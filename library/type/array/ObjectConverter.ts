export class ObjectConverter {
    static objectToMap(obj: Record<string, any>): Map<string, any> {
        const map = new Map();
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                map.set(key, obj[key]);
            }
        }
        return map;
    }

    static mapToObject(map: Map<string, any>): Record<string, any> {
        const obj: Record<string, any> = {};
        for (const [key, value] of map) {
            obj[key] = value;
        }
        return obj;
    }
}

// Example Usage:

const myObject = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

const myMap = ObjectConverter.objectToMap(myObject);
console.log(myMap); // Output: Map { 'name' => 'John Doe', 'age' => 30, 'city' => 'New York' }

const convertedObject = ObjectConverter.mapToObject(myMap);
console.log(convertedObject); // Output: { name: 'John Doe', age: 30, city: 'New York' }
