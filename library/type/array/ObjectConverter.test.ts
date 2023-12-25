import { ObjectConverter } from './ObjectConverter';

describe('ObjectConverter', () => {
    test('should convert object to map', () => {
        const myObject = {
            name: 'John Doe',
            age: 30,
            city: 'New York'
        };
        const myMap = ObjectConverter.objectToMap(myObject);
        const myMapCheck = new Map();
        myMapCheck.set('name','John Doe');
        myMapCheck.set('age',30);
        myMapCheck.set('city','New York');
        expect(myMap).toEqual(myMapCheck);
    });

    test('should convert map to object', () => {
        const myMap = new Map();
        myMap.set('name','John Doe');
        myMap.set('age', 30);
        myMap.set('city','New York');
        const convertedObject = ObjectConverter.mapToObject(myMap);
        expect(convertedObject).toEqual({
            name: 'John Doe',
            age: 30,
            city: 'New York'
        });
    });
});
