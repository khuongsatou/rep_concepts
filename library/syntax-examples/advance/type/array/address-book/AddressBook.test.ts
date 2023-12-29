import { Contact, AddressBook } from './AddressBook';

describe('AddressBook', () => {
  let addressBook: AddressBook;

  beforeEach(() => {
    addressBook = new AddressBook();
  });

  test('should add a contact', () => {
    const contact = new Contact('John Doe', '123-456-7890', '123 Main St');
    addressBook.addContact(contact);
    expect(addressBook.getContacts()).toContain(contact);
  });

  test('should search contacts by keyword', () => {
    const contact1 = new Contact('John Doe', '123-456-7890', '123 Main St');
    const contact2 = new Contact('Jane Doe', '987-654-3210', '456 Oak St');
    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    const searchResult = addressBook.searchContact('John');
    expect(searchResult).toContain(contact1);
    expect(searchResult).not.toContain(contact2);
  });

  test('should delete a contact', () => {
    const contact = new Contact('John Doe', '123-456-7890', '123 Main St');
    addressBook.addContact(contact);
    addressBook.deleteContact(contact);
    expect(addressBook.getContacts()).not.toContain(contact);
  });
});
