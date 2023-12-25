// Một ứng dụng quản lý danh bạ có thể sử dụng array để lưu trữ thông tin về liên lạc như tên, số điện thoại, địa chỉ, và các thông tin khác.
export class Contact {
    constructor(public name: string, public phoneNumber: string, public address: string) {}
}

export class AddressBook {
    private contacts: Contact[] = [];

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    getContacts(): Contact[] {
        return this.contacts;
    }

    searchContact(keyword: string): Contact[] {
        return this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(keyword.toLowerCase()) ||
            contact.phoneNumber.includes(keyword) ||
            contact.address.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    deleteContact(contact: Contact): void {
        const index = this.contacts.indexOf(contact);
        if (index !== -1) {
            this.contacts.splice(index, 1);
        }
    }
}

// Example Usage:

const addressBook = new AddressBook();

const contact1 = new Contact("John Doe", "123-456-7890", "123 Main St");
const contact2 = new Contact("Jane Doe", "987-654-3210", "456 Oak St");

addressBook.addContact(contact1);
addressBook.addContact(contact2);

console.log("All Contacts:");
console.log(addressBook.getContacts());

const searchResult = addressBook.searchContact("John");
console.log("Search Result:");
console.log(searchResult);

addressBook.deleteContact(contact1);

console.log("Contacts after deletion:");
console.log(addressBook.getContacts());
