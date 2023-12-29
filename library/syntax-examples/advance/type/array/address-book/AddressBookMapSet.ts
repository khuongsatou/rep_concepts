export class Contact {
    constructor(public name: string, public phoneNumber: string) {}

    toString(): string {
        return `${this.name}: ${this.phoneNumber}`;
    }
}

export class AddressBook {
    private contacts: Map<string, Contact> = new Map();

    addContact(contact: Contact): void {
        if (!this.contacts.has(contact.name)) {
            this.contacts.set(contact.name, contact);
            console.log(`Contact "${contact.name}" added to the address book.`);
        } else {
            console.log(`Contact "${contact.name}" already exists in the address book.`);
        }
    }

    deleteContact(contactName: string): void {
        if (this.contacts.has(contactName)) {
            this.contacts.delete(contactName);
            console.log(`Contact "${contactName}" deleted from the address book.`);
        } else {
            console.log(`Contact "${contactName}" does not exist in the address book.`);
        }
    }

    displayContacts(): void {
        console.log('Address Book:');
        console.log('-------------------------');
        this.contacts.forEach(contact => {
            console.log(contact.toString());
        });
        console.log('-------------------------');
    }
}

// Example Usage:

const addressBook = new AddressBook();

const contact1 = new Contact('John Doe', '123-456-7890');
const contact2 = new Contact('Jane Smith', '987-654-3210');
const contact3 = new Contact('John Doe', '111-222-3333');

addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);

addressBook.displayContacts();

addressBook.deleteContact('Jane Smith');

addressBook.displayContacts();
