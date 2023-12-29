import { Contact, AddressBook } from './AddressBookMapSet';

describe('AddressBook', () => {
    let addressBook: AddressBook;
    let contact1: Contact;
    let contact2: Contact;

    beforeEach(() => {
        addressBook = new AddressBook();
        contact1 = new Contact('John Doe', '123-456-7890');
        contact2 = new Contact('Jane Smith', '987-654-3210');
    });

    test('should add a contact to the address book', () => {
        addressBook.addContact(contact1);
        expect(addressBook['contacts'].size).toBe(1);
    });

    test('should not add a duplicate contact to the address book', () => {
        addressBook.addContact(contact1);
        addressBook.addContact(contact1);
        expect(addressBook['contacts'].size).toBe(1);
    });

    test('should delete a contact from the address book', () => {
        addressBook.addContact(contact1);
        addressBook.addContact(contact2);
        addressBook.deleteContact('John Doe');
        expect(addressBook['contacts'].size).toBe(1);
    });

    test('should not throw error when deleting a non-existing contact', () => {
        expect(() => addressBook.deleteContact('Non Existing')).not.toThrow();
    });

    test('should display contacts in the address book', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        addressBook.addContact(contact1);
        addressBook.addContact(contact2);
        addressBook.displayContacts();
        expect(consoleSpy).toHaveBeenCalledTimes(7); // Header + 2 contacts
        consoleSpy.mockRestore();
    });
});
