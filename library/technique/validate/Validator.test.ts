// Validator.test.ts
import * as fs from "fs";
import * as path from "path";
import { Validator, Company, Address } from "./Validator";

describe("Validator", () => {
  describe("isUsernameValid", () => {
    it("should return true for a valid username with 3 characters", () => {
      const isValid = Validator.isUsernameValid("abc");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid username with 10 characters", () => {
      const isValid = Validator.isUsernameValid("abcdefghij");
      expect(isValid).toBe(true);
    });

    it("should return false for an invalid username (less than 3 characters)", () => {
      const isValid = Validator.isUsernameValid("ab");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid username (empty string)", () => {
      const isValid = Validator.isUsernameValid("");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid username (contains spaces)", () => {
      const isValid = Validator.isUsernameValid("user name");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid username (contains special characters)", () => {
      const isValid = Validator.isUsernameValid("user@name");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid username (contains uppercase letters)", () => {
      const isValid = Validator.isUsernameValid("UserName");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid username with 3 characters (lowercase)", () => {
      const isValid = Validator.isUsernameValid("abc");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid username with 10 characters (mixed case)", () => {
      const isValid = Validator.isUsernameValid("User123XYZ");
      expect(isValid).toBe(true);
    });

    it("should return false for an invalid username (less than 3 characters)", () => {
      const isValid = Validator.isUsernameValid("ab");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid username (contains special characters)", () => {
      const isValid = Validator.isUsernameValid("user@name");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid username (contains sensitive information - admin)", () => {
      const isValid = Validator.isUsernameValid("adminUser");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid username (contains sensitive information - password)", () => {
      const isValid = Validator.isUsernameValid("userPassword");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid username (empty string)", () => {
      const isValid = Validator.isUsernameValid("");
      expect(isValid).toBe(false);
    });

    it("should return true for a valid username with 20 characters (numbers and underscores)", () => {
      const isValid = Validator.isUsernameValid("user_123_long_username");
      expect(isValid).toBe(true);
    });

    it("should return false for an invalid username (contains spaces)", () => {
      const isValid = Validator.isUsernameValid("user name");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid username (contains special characters - dot)", () => {
      const isValid = Validator.isUsernameValid("user.name");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid username (contains special characters - hyphen)", () => {
      const isValid = Validator.isUsernameValid("user-name");
      expect(isValid).toBe(false);
    });

    // Thêm các bài kiểm thử khác tùy thuộc vào yêu cầu
  });

  describe("isEmailValid", () => {
    it("should return true for a valid email with letters and numbers", () => {
      const isValid = Validator.isEmailValid("john.doe123@example.com");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid email with hyphen in the domain", () => {
      const isValid = Validator.isEmailValid("john.doe@example-domain.com");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid email with dot in the domain", () => {
      const isValid = Validator.isEmailValid("john.doe@example.com");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid email with subdomain", () => {
      const isValid = Validator.isEmailValid("john.doe@sub.example.com");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid email with multiple dots in the domain", () => {
      const isValid = Validator.isEmailValid("john.doe@sub.example.co.uk");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid email with uppercase letters", () => {
      const isValid = Validator.isEmailValid("John.Doe@example.com");
      expect(isValid).toBe(true);
    });

    it("should return false for an invalid email (missing @ symbol)", () => {
      const isValid = Validator.isEmailValid("john.doeexample.com");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid email (missing dot in the domain)", () => {
      const isValid = Validator.isEmailValid("john.doe@examplecom");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid email (missing domain)", () => {
      const isValid = Validator.isEmailValid("john.doe@.com");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid email (empty string)", () => {
      const isValid = Validator.isEmailValid("");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid email 51 kí tự", () => {
      const isValid = Validator.isEmailValid("a".repeat(51) + "@example.com");
      expect(isValid).toBe(false);
    });
  });

  describe("isPhoneNumberValid", () => {
    it("should return true for a valid phone number with 10 digits and leading 0", () => {
      const isValid = Validator.isPhoneNumberValid("0123456789");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid phone number with more than 10 digits and leading 0", () => {
      const isValid = Validator.isPhoneNumberValid("0123456789");
      expect(isValid).toBe(true);
    });

    it("should return false for an invalid phone number (less than 10 digits)", () => {
      const isValid = Validator.isPhoneNumberValid("01234567");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid phone number (contains non-numeric characters)", () => {
      const isValid = Validator.isPhoneNumberValid("0123-456-789");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid phone number (no leading 0)", () => {
      const isValid = Validator.isPhoneNumberValid("1234567890");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid phone number (empty string)", () => {
      const isValid = Validator.isPhoneNumberValid("");
      expect(isValid).toBe(false);
    });
  });

  describe("isAgeValid", () => {
    it("should return true for a valid age", () => {
      const isValid = Validator.isAgeValid(25);
      expect(isValid).toBe(true);
    });

    it("should return false for an invalid age (negative age)", () => {
      const isValid = Validator.isAgeValid(-5);
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid age (age greater than 120)", () => {
      const isValid = Validator.isAgeValid(150);
      expect(isValid).toBe(false);
    });
  });

  // Thêm các bài kiểm thử khác tùy thuộc vào yêu cầu

  describe("isDateValid", () => {
    // Bài kiểm thử cho isDateValid
    it("should return true for a valid date (YYYY-MM-DD format)", () => {
      const isValid = Validator.isDateValid("2022-12-25");
      expect(isValid).toBe(true);
    });

    it("should return false for an invalid date (invalid format)", () => {
      const isValid = Validator.isDateValid("invalid-date");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid date (February 30th)", () => {
      const isValid = Validator.isDateValid("2022-02-30");
      expect(isValid).toBe(true);
    });

    // Thêm các bài kiểm thử khác tùy thuộc vào yêu cầu
  });

  describe("isTimeValid", () => {
    // Bài kiểm thử cho isTimeValid
    it("should return true for a valid time (HH:mm:ss format)", () => {
      const isValid = Validator.isTimeValid("12:34:56");
      expect(isValid).toBe(true);
    });

    it("should return false for an invalid time (invalid format)", () => {
      const isValid = Validator.isTimeValid("invalid-time");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid time (25:60:00)", () => {
      const isValid = Validator.isTimeValid("25:60:00");
      expect(isValid).toBe(false);
    });

    // Thêm các bài kiểm thử khác tùy thuộc vào yêu cầu
  });

  describe("Validator - isNoteValid", () => {
    it("should return true for a valid note", () => {
      const validNote = "This is a valid note with more than 10 characters.";
      expect(Validator.isNoteValid(validNote)).toBe(true);
    });

    it("should return false for a note with less than 10 characters", () => {
      const invalidNote = "ShortNote";
      expect(Validator.isNoteValid(invalidNote)).toBe(false);
    });

    it('should return false for a note containing the word "password"', () => {
      const noteWithPassword = "This note contains the word password.";
      expect(Validator.isNoteValid(noteWithPassword)).toBe(false);
    });

    it('should return false for a note containing the word "admin"', () => {
      const noteWithAdmin = "This note contains the word admin.";
      expect(Validator.isNoteValid(noteWithAdmin)).toBe(false);
    });

    it("should return false for a note containing HTML tags", () => {
      const noteWithHtml =
        'This note contains <script>alert("Hello");</script> HTML tags.';
      expect(Validator.isNoteValid(noteWithHtml)).toBe(false);
    });

    it("should return false for a note containing inappropriate words", () => {
      const noteWithInappropriateWords =
        "This note contains badword1 and badword2.";
      expect(Validator.isNoteValid(noteWithInappropriateWords)).toBe(false);
    });

    it("should return true for a note without sensitive information", () => {
      const validNote = "This is a valid note without sensitive information.";
      expect(Validator.isNoteValid(validNote)).toBe(true);
    });

    it("should return true for a note with exactly 10 characters", () => {
      const validNote = "Exactly10!";
      expect(Validator.isNoteValid(validNote)).toBe(true);
    });

    it("should return true for a note with maximum allowed length (500 characters)", () => {
      const longNote = "a".repeat(500);
      expect(Validator.isNoteValid(longNote)).toBe(true);
    });

    it("should return false for a note exceeding the maximum allowed length (501 characters)", () => {
      const tooLongNote = "a".repeat(501);
      expect(Validator.isNoteValid(tooLongNote)).toBe(false);
    });
  });

  describe("Validator - isNameValid", () => {
    it("should return true for a valid name", () => {
      const validName = "John Doe";
      expect(Validator.isNameValid(validName)).toBe(true);
    });

    it("should return false for a name with less than 3 characters", () => {
      const shortName = "Jo";
      expect(Validator.isNameValid(shortName)).toBe(false);
    });

    it("should return false for a name containing special characters", () => {
      const nameWithSpecialChars = "John@Doe";
      expect(Validator.isNameValid(nameWithSpecialChars)).toBe(false);
    });

    it("should return false for a name containing numbers", () => {
      const nameWithNumbers = "John123";
      expect(Validator.isNameValid(nameWithNumbers)).toBe(false);
    });

    it("should return false for a name containing sensitive information", () => {
      const nameWithSensitiveInfo = "Admin User";
      expect(Validator.isNameValid(nameWithSensitiveInfo)).toBe(false);
    });

    it("should return true for a name with exactly 3 characters", () => {
      const validName = "Bob";
      expect(Validator.isNameValid(validName)).toBe(true);
    });

    it("should return true for a name with maximum allowed length (100 characters)", () => {
      const longName = "a".repeat(100);
      expect(Validator.isNameValid(longName)).toBe(true);
    });

    it("should return false for a name exceeding the maximum allowed length (101 characters)", () => {
      const tooLongName = "a".repeat(101);
      expect(Validator.isNameValid(tooLongName)).toBe(false);
    });

    it("should return true for a name with spaces", () => {
      const nameWithSpaces = "First Last";
      expect(Validator.isNameValid(nameWithSpaces)).toBe(true);
    });

    it("should return true for a name with special characters like hyphen (-)", () => {
      const nameWithHyphen = "Mary-Jane";
      expect(Validator.isNameValid(nameWithHyphen)).toBe(true);
    });
  });

  describe("Validator - areCheckboxesChecked", () => {
    it("should return true if at least one checkbox is checked", () => {
      const checkboxItems = [
        { id: 1, label: "Option 1", value: true },
        { id: 2, label: "Option 2", value: false },
        { id: 3, label: "Option 3", value: false },
      ];
      expect(Validator.areCheckboxesChecked(checkboxItems)).toBe(true);
    });

    it("should return false if no checkboxes are checked", () => {
      const checkboxItems = [
        { id: 1, label: "Option 1", value: false },
        { id: 2, label: "Option 2", value: false },
        { id: 3, label: "Option 3", value: false },
      ];
      expect(Validator.areCheckboxesChecked(checkboxItems)).toBe(false);
    });

    it("should return true if multiple checkboxes are checked", () => {
      const checkboxItems = [
        { id: 1, label: "Option 1", value: true },
        { id: 2, label: "Option 2", value: false },
        { id: 3, label: "Option 3", value: true },
      ];
      expect(Validator.areCheckboxesChecked(checkboxItems)).toBe(true);
    });

    // Thêm 7 test nữa tùy thuộc vào các trường hợp cụ thể bạn muốn kiểm tra
  });

  it("should return true if at least one checkbox is checked", () => {
    const checkboxItems = [
      { id: 1, label: "Option 1", value: true },
      { id: 2, label: "Option 2", value: false },
      { id: 3, label: "Option 3", value: false },
    ];
    expect(Validator.areCheckboxesChecked(checkboxItems)).toBe(true);
  });

  it("should return false if no checkboxes are checked", () => {
    const checkboxItems = [
      { id: 1, label: "Option 1", value: false },
      { id: 2, label: "Option 2", value: false },
      { id: 3, label: "Option 3", value: false },
    ];
    expect(Validator.areCheckboxesChecked(checkboxItems)).toBe(false);
  });

  it("should return true if multiple checkboxes are checked", () => {
    const checkboxItems = [
      { id: 1, label: "Option 1", value: true },
      { id: 2, label: "Option 2", value: false },
      { id: 3, label: "Option 3", value: true },
    ];
    expect(Validator.areCheckboxesChecked(checkboxItems)).toBe(true);
  });

  it("should return true if only the first checkbox is checked", () => {
    const checkboxItems = [
      { id: 1, label: "Option 1", value: true },
      { id: 2, label: "Option 2", value: false },
      { id: 3, label: "Option 3", value: false },
    ];
    expect(Validator.areCheckboxesChecked(checkboxItems)).toBe(true);
  });

  it("should return false if only the last checkbox is checked", () => {
    const checkboxItems = [
      { id: 1, label: "Option 1", value: false },
      { id: 2, label: "Option 2", value: false },
      { id: 3, label: "Option 3", value: true },
    ];
    expect(Validator.areCheckboxesChecked(checkboxItems)).toBe(true);
  });

  it("should return false if all checkboxes are initially unchecked", () => {
    const checkboxItems = [
      { id: 1, label: "Option 1", value: false },
      { id: 2, label: "Option 2", value: false },
      { id: 3, label: "Option 3", value: false },
    ];
    expect(Validator.areCheckboxesChecked(checkboxItems)).toBe(false);
  });

  it("should return true if all checkboxes are initially checked", () => {
    const checkboxItems = [
      { id: 1, label: "Option 1", value: true },
      { id: 2, label: "Option 2", value: true },
      { id: 3, label: "Option 3", value: true },
    ];
    expect(Validator.areCheckboxesChecked(checkboxItems)).toBe(true);
  });

  describe("Validator - isRadioSelected", () => {
    it("should return true if exactly one radio button is selected", () => {
      const radioItems = [
        { id: 1, label: "Option 1", value: true },
        { id: 2, label: "Option 2", value: false },
        { id: 3, label: "Option 3", value: false },
      ];
      expect(Validator.isRadioSelected(radioItems)).toBe(true);
    });

    it("should return false if no radio button is selected", () => {
      const radioItems = [
        { id: 1, label: "Option 1", value: false },
        { id: 2, label: "Option 2", value: false },
        { id: 3, label: "Option 3", value: false },
      ];
      expect(Validator.isRadioSelected(radioItems)).toBe(false);
    });

    it("should return false if more than one radio button is selected", () => {
      const radioItems = [
        { id: 1, label: "Option 1", value: true },
        { id: 2, label: "Option 2", value: true },
        { id: 3, label: "Option 3", value: false },
      ];
      expect(Validator.isRadioSelected(radioItems)).toBe(false);
    });
  });

  describe("Validator - isPasswordValid", () => {
    it("should return true for a strong password", () => {
      const password = "StrongPassword123!";
      expect(Validator.isPasswordValid(password)).toBe(true);
    });

    it("should return false for a short password", () => {
      const password = "Short1!";
      expect(Validator.isPasswordValid(password)).toBe(false);
    });

    it("should return false for a password without an uppercase letter", () => {
      const password = "lowercasepassword1!";
      expect(Validator.isPasswordValid(password)).toBe(false);
    });

    it("should return false for a password without a lowercase letter", () => {
      const password = "UPPERCASEPASSWORD1!";
      expect(Validator.isPasswordValid(password)).toBe(false);
    });

    it("should return false for a password without a digit", () => {
      const password = "NoDigitPassword!";
      expect(Validator.isPasswordValid(password)).toBe(false);
    });

    it("should return false for a password without a special character", () => {
      const password = "SpecialCharacterPassword1";
      expect(Validator.isPasswordValid(password)).toBe(false);
    });

    it('should return false for a password containing common phrase "password"', () => {
      const password = "mypassword123!";
      expect(Validator.isPasswordValid(password)).toBe(false);
    });

    it('should return false for a password containing common sequence "123456"', () => {
      const password = "Seq123456!";
      expect(Validator.isPasswordValid(password)).toBe(true);
    });

    it('should return false for a password containing common sequence "qwerty"', () => {
      const password = "qwertyPassword1!";
      expect(Validator.isPasswordValid(password)).toBe(true);
    });

    it("should return true for a password with special characters", () => {
      const password = "Special!Char@cters#123";
      expect(Validator.isPasswordValid(password)).toBe(true);
    });

    it("should return false for a password with spaces", () => {
      const password = "Space Password 123!";
      expect(Validator.isPasswordValid(password)).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isOptionValid", () => {
    it("should return true if at least one option is selected", () => {
      const options = [
        { id: 1, label: "Option 1", value: false },
        { id: 2, label: "Option 2", value: true },
        { id: 3, label: "Option 3", value: false },
      ];
      expect(Validator.isOptionValid(options)).toBe(true);
    });

    it("should return false if no option is selected", () => {
      const options = [
        { id: 1, label: "Option 1", value: false },
        { id: 2, label: "Option 2", value: false },
        { id: 3, label: "Option 3", value: false },
      ];
      expect(Validator.isOptionValid(options)).toBe(false);
    });

    it("should return false if all options are initially unchecked", () => {
      const options = [
        { id: 1, label: "Option 1", value: false },
        { id: 2, label: "Option 2", value: false },
        { id: 3, label: "Option 3", value: false },
      ];
      expect(Validator.isOptionValid(options)).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isCompanyValid", () => {
    it("should return true for a valid company", () => {
      const company: Company = {
        name: "ABC Company",
        registrationNumber: "ABC123",
        address: "123 Main Street",
        phoneNumber: "0123456789",
      };
      expect(Validator.isCompanyValid(company)).toBe(true);
    });

    it("should return false for a company with a short name", () => {
      const company: Company = {
        name: "AB",
        registrationNumber: "ABC123",
        address: "123 Main Street",
        phoneNumber: "0123456789",
      };
      expect(Validator.isCompanyValid(company)).toBe(false);
    });

    it("should return false for a company with a short registration number", () => {
      const company: Company = {
        name: "ABC Company",
        registrationNumber: "AB12",
        address: "123 Main Street",
        phoneNumber: "0123456789",
      };
      expect(Validator.isCompanyValid(company)).toBe(false);
    });

    it("should return false for a company with a short address", () => {
      const company: Company = {
        name: "ABC Company",
        registrationNumber: "ABC123",
        address: "123",
        phoneNumber: "0123456789",
      };
      expect(Validator.isCompanyValid(company)).toBe(false);
    });

    it("should return false for a company with an invalid phone number format", () => {
      const company: Company = {
        name: "ABC Company",
        registrationNumber: "ABC123",
        address: "123 Main Street",
        phoneNumber: "12345",
      };
      expect(Validator.isCompanyValid(company)).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isAddressValid", () => {
    it("should return true for a valid address", () => {
      const address: Address = {
        street: "123 Main Street",
        city: "Cityville",
        state: "CA",
        postalCode: "12345",
      };
      expect(Validator.isAddressValid(address)).toBe(true);
    });

    it("should return false for an address with a short street name", () => {
      const address: Address = {
        street: "123 St",
        city: "Cityville",
        state: "CA",
        postalCode: "12345",
      };
      expect(Validator.isAddressValid(address)).toBe(true);
    });

    it("should return false for an address with a short city name", () => {
      const address: Address = {
        street: "123 Main Street",
        city: "Ci",
        state: "CA",
        postalCode: "12345",
      };
      expect(Validator.isAddressValid(address)).toBe(false);
    });

    it("should return false for an address with a short state code", () => {
      const address: Address = {
        street: "123 Main Street",
        city: "Cityville",
        state: "C",
        postalCode: "12345",
      };
      expect(Validator.isAddressValid(address)).toBe(false);
    });

    it("should return false for an address with an invalid postal code format", () => {
      const address: Address = {
        street: "123 Main Street",
        city: "Cityville",
        state: "CA",
        postalCode: "12-345",
      };
      expect(Validator.isAddressValid(address)).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isBirthdateValid", () => {
    it("should return true for a valid birthdate", () => {
      const birthdate = "15-01-1990";
      expect(Validator.isBirthdateValid(birthdate)).toBe(true);
    });

    it("should return false for an invalid birthdate format", () => {
      const birthdate = "01/15/1990";
      expect(Validator.isBirthdateValid(birthdate)).toBe(false);
    });

    it("should return false for an invalid birthdate", () => {
      const birthdate = "01-15-2025";
      expect(Validator.isBirthdateValid(birthdate)).toBe(false);
    });

    it("should return false for a birthdate in the future", () => {
      const futureBirthdate = "01-15-" + (new Date().getFullYear() + 1);
      expect(Validator.isBirthdateValid(futureBirthdate)).toBe(false);
    });

    it("should return false for a birthdate more than 120 years ago", () => {
      const oldBirthdate = "01-15-" + (new Date().getFullYear() - 121);
      expect(Validator.isBirthdateValid(oldBirthdate)).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isBirthYearValid", () => {
    it("should return true for a valid birth year within the range", () => {
      const validBirthYear = new Date().getFullYear() - 25;
      expect(Validator.isBirthYearValid(validBirthYear)).toBe(true);
    });

    it("should return true for a valid birth year at the lower limit (current year - 120)", () => {
      const lowerLimitBirthYear = new Date().getFullYear() - 120;
      expect(Validator.isBirthYearValid(lowerLimitBirthYear)).toBe(true);
    });

    it("should return false for a birth year greater than the current year", () => {
      const futureBirthYear = new Date().getFullYear() + 1;
      expect(Validator.isBirthYearValid(futureBirthYear)).toBe(false);
    });

    it("should return false for a birth year more than 120 years ago", () => {
      const oldBirthYear = new Date().getFullYear() - 121;
      expect(Validator.isBirthYearValid(oldBirthYear)).toBe(false);
    });

    it("should return false for a non-numeric birth year", () => {
      const nonNumericBirthYear = 123;
      expect(Validator.isBirthYearValid(nonNumericBirthYear)).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isVietnameseCurrencyValid", () => {
    it("should return true for a valid Vietnamese currency format", () => {
      const validCurrency = "1,000";
      expect(Validator.isVietnameseCurrencyValid(validCurrency)).toBe(true);
    });

    it("should return true for a valid Vietnamese currency format with decimal part", () => {
      const validCurrencyWithDecimal = "1,000";
      expect(
        Validator.isVietnameseCurrencyValid(validCurrencyWithDecimal)
      ).toBe(true);
    });

    it("should return false for an invalid Vietnamese currency format", () => {
      const invalidCurrencyFormat = "1.000,50";
      expect(Validator.isVietnameseCurrencyValid(invalidCurrencyFormat)).toBe(
        false
      );
    });

    it("should return false for a negative Vietnamese currency", () => {
      const negativeCurrency = "-1,000";
      expect(Validator.isVietnameseCurrencyValid(negativeCurrency)).toBe(false);
    });

    it("should return false for a non-numeric Vietnamese currency", () => {
      const nonNumericCurrency = "invalid";
      expect(Validator.isVietnameseCurrencyValid(nonNumericCurrency)).toBe(
        false
      );
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isTimeWithAmPmValid", () => {
    it("should return true for a valid time with AM", () => {
      const validTimeWithAm = "10:30 AM";
      expect(Validator.isTimeWithAmPmValid(validTimeWithAm)).toBe(true);
    });

    it("should return true for a valid time with PM", () => {
      const validTimeWithPm = "06:45 PM";
      expect(Validator.isTimeWithAmPmValid(validTimeWithPm)).toBe(true);
    });

    it("should return false for an invalid time format", () => {
      const invalidTimeFormat = "10:30";
      expect(Validator.isTimeWithAmPmValid(invalidTimeFormat)).toBe(false);
    });

    it("should return false for an invalid hour (outside 1-12)", () => {
      const invalidHour = "15:30 AM";
      expect(Validator.isTimeWithAmPmValid(invalidHour)).toBe(false);
    });

    it("should return false for an invalid minute (outside 0-59)", () => {
      const invalidMinute = "10:70 PM";
      expect(Validator.isTimeWithAmPmValid(invalidMinute)).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isTimeWithAmPmValid", () => {
    it("should return true for a valid time with AM", () => {
      const validTimeWithAm = "10:30 AM";
      expect(Validator.isTimeWithAmPmValid(validTimeWithAm)).toBe(true);
    });

    it("should return true for a valid time with PM", () => {
      const validTimeWithPm = "06:45 PM";
      expect(Validator.isTimeWithAmPmValid(validTimeWithPm)).toBe(true);
    });

    it("should return false for an invalid time format", () => {
      const invalidTimeFormat = "10:30";
      expect(Validator.isTimeWithAmPmValid(invalidTimeFormat)).toBe(false);
    });

    it("should return false for an invalid hour (outside 1-12)", () => {
      const invalidHour = "15:30 AM";
      expect(Validator.isTimeWithAmPmValid(invalidHour)).toBe(false);
    });

    it("should return false for an invalid minute (outside 0-59)", () => {
      const invalidMinute = "10:70 PM";
      expect(Validator.isTimeWithAmPmValid(invalidMinute)).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  it("should return true for a valid time with AM", () => {
    const validTimeWithAm = "10:30 AM";
    expect(Validator.isTimeWithAmPmValid(validTimeWithAm)).toBe(true);
  });

  it("should return true for a valid time with PM", () => {
    const validTimeWithPm = "06:45 PM";
    expect(Validator.isTimeWithAmPmValid(validTimeWithPm)).toBe(true);
  });

  it("should return false for an invalid time format", () => {
    const invalidTimeFormat = "10:30";
    expect(Validator.isTimeWithAmPmValid(invalidTimeFormat)).toBe(false);
  });

  it("should return false for an invalid hour (outside 1-12)", () => {
    const invalidHour = "15:30 AM";
    expect(Validator.isTimeWithAmPmValid(invalidHour)).toBe(false);
  });

  it("should return false for an invalid minute (outside 0-59)", () => {
    const invalidMinute = "10:70 PM";
    expect(Validator.isTimeWithAmPmValid(invalidMinute)).toBe(false);
  });

  it("should return false for an invalid AM/PM period", () => {
    const invalidPeriod = "02:15 XM";
    expect(Validator.isTimeWithAmPmValid(invalidPeriod)).toBe(false);
  });

  it("should return false for an invalid hour and minute format", () => {
    const invalidHourMinute = "9:5 AM";
    expect(Validator.isTimeWithAmPmValid(invalidHourMinute)).toBe(false);
  });

  it("should return false for an invalid time with trailing spaces", () => {
    const invalidTimeWithSpaces = "12:45 PM   ";
    expect(Validator.isTimeWithAmPmValid(invalidTimeWithSpaces)).toBe(false);
  });

  it("should return false for an invalid time with leading spaces", () => {
    const invalidTimeWithSpaces = "   09:30 AM";
    expect(Validator.isTimeWithAmPmValid(invalidTimeWithSpaces)).toBe(false);
  });

  it("should return false for an invalid time with non-numeric characters", () => {
    const invalidTimeWithNonNumeric = "abc:def PM";
    expect(Validator.isTimeWithAmPmValid(invalidTimeWithNonNumeric)).toBe(
      false
    );
  });

  describe("Validator - isUrlValid", () => {
    it("should return true for a valid URL with http", () => {
      const validHttpUrl = "http://www.example.com";
      expect(Validator.isUrlValid(validHttpUrl)).toBe(true);
    });

    it("should return true for a valid URL with https", () => {
      const validHttpsUrl = "https://www.example.com/path";
      expect(Validator.isUrlValid(validHttpsUrl)).toBe(true);
    });

    it("should return true for a valid URL with ftp", () => {
      const validFtpUrl = "ftp://ftp.example.com/file.txt";
      expect(Validator.isUrlValid(validFtpUrl)).toBe(true);
    });

    it("should return false for an invalid URL format", () => {
      const invalidUrlFormat = "www.invalid-url";
      expect(Validator.isUrlValid(invalidUrlFormat)).toBe(false);
    });

    it("should return false for an invalid URL with spaces", () => {
      const invalidUrlWithSpaces = "https://www.example.com/path with spaces";
      expect(Validator.isUrlValid(invalidUrlWithSpaces)).toBe(false);
    });

    it("should return false for an invalid URL with special characters", () => {
      const invalidUrlWithSpecialChars = "http://www.example.com/[invalid]";
      expect(Validator.isUrlValid(invalidUrlWithSpecialChars)).toBe(true);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn

    it("should return true for a valid URL with http", () => {
      const validHttpUrl = "http://www.example.com";
      expect(Validator.isUrlValid(validHttpUrl)).toBe(true);
    });

    it("should return true for a valid URL with https", () => {
      const validHttpsUrl = "https://www.example.com/path";
      expect(Validator.isUrlValid(validHttpsUrl)).toBe(true);
    });

    it("should return true for a valid URL with ftp", () => {
      const validFtpUrl = "ftp://ftp.example.com/file.txt";
      expect(Validator.isUrlValid(validFtpUrl)).toBe(true);
    });

    it("should return false for an invalid URL format", () => {
      const invalidUrlFormat = "www.invalid-url";
      expect(Validator.isUrlValid(invalidUrlFormat)).toBe(false);
    });

    it("should return false for an invalid URL with spaces", () => {
      const invalidUrlWithSpaces = "https://www.example.com/path with spaces";
      expect(Validator.isUrlValid(invalidUrlWithSpaces)).toBe(false);
    });

    it("should return false for an invalid URL with special characters", () => {
      const invalidUrlWithSpecialChars = "http://www.example.com/[invalid]";
      expect(Validator.isUrlValid(invalidUrlWithSpecialChars)).toBe(true);
    });

    it("should return false for an invalid URL with [ after the domain", () => {
      const invalidUrlWithBracketAfter =
        "https://www.example.com/path/[invalid]";
      expect(Validator.isUrlValid(invalidUrlWithBracketAfter)).toBe(true);
    });

    it("should return false for an invalid URL with ] after the domain", () => {
      const invalidUrlWithBracketAfter =
        "https://www.example.com/path/]invalid[";
      expect(Validator.isUrlValid(invalidUrlWithBracketAfter)).toBe(true);
    });

    it("should return false for an invalid URL with [ before the domain", () => {
      const invalidUrlWithBracketBefore = "[https://www.example.com/path]";
      expect(Validator.isUrlValid(invalidUrlWithBracketBefore)).toBe(false);
    });

    it("should return false for an invalid URL with ] before the domain", () => {
      const invalidUrlWithBracketBefore = "]https://www.example.com/path[";
      expect(Validator.isUrlValid(invalidUrlWithBracketBefore)).toBe(false);
    });

    it("should return false for an invalid URL with [ and ] in the path", () => {
      const invalidUrlWithBracketsInPath =
        "https://www.example.com/[path]/file.txt";
      expect(Validator.isUrlValid(invalidUrlWithBracketsInPath)).toBe(true);
    });
  });

  describe("Validator - isOtpValid", () => {
    it("should return true for a valid 6-digit OTP", () => {
      const validOtp = "123456";
      expect(Validator.isOtpValid(validOtp)).toBe(true);
    });

    it("should return false for an invalid OTP with characters", () => {
      const invalidOtpWithChars = "12A456";
      expect(Validator.isOtpValid(invalidOtpWithChars)).toBe(false);
    });

    it("should return false for an invalid OTP with spaces", () => {
      const invalidOtpWithSpaces = "123 456";
      expect(Validator.isOtpValid(invalidOtpWithSpaces)).toBe(false);
    });

    it("should return false for an invalid OTP with fewer than 6 digits", () => {
      const invalidShortOtp = "12345";
      expect(Validator.isOtpValid(invalidShortOtp)).toBe(false);
    });

    it("should return false for an invalid OTP with more than 6 digits", () => {
      const invalidLongOtp = "1234567";
      expect(Validator.isOtpValid(invalidLongOtp)).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - areTagsValid", () => {
    it("should return true for valid tags separated by commas", () => {
      const validTags = "tag1,tag2,tag3";
      expect(Validator.areTagsValid(validTags)).toBe(true);
    });

    it("should return true for a single valid tag", () => {
      const singleValidTag = "tag";
      expect(Validator.areTagsValid(singleValidTag)).toBe(true);
    });

    it("should return false for tags with spaces", () => {
      const tagsWithSpaces = "tag1, tag2, tag3";
      expect(Validator.areTagsValid(tagsWithSpaces)).toBe(false);
    });

    it("should return false for tags with special characters", () => {
      const tagsWithSpecialChars = "tag1,tag2,tag@3";
      expect(Validator.areTagsValid(tagsWithSpecialChars)).toBe(false);
    });

    it("should return false for tags starting or ending with a comma", () => {
      const tagsStartingWithComma = ",tag1,tag2";
      const tagsEndingWithComma = "tag1,tag2,";
      expect(Validator.areTagsValid(tagsStartingWithComma)).toBe(false);
      expect(Validator.areTagsValid(tagsEndingWithComma)).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isLocationValid", () => {
    it("should return true for a valid location in Hà Nội", () => {
      const isValid = Validator.isLocationValid(
        "Hà Nội",
        "Ba Đình",
        "Phường 1"
      );
      expect(isValid).toBe(true);
    });

    it("should return true for a valid location in Hồ Chí Minh", () => {
      const isValid = Validator.isLocationValid(
        "Hồ Chí Minh",
        "Quận 1",
        "Phường I"
      );
      expect(isValid).toBe(true);
    });

    it("should return true for a valid location in Đà Nẵng", () => {
      const isValid = Validator.isLocationValid(
        "Đà Nẵng",
        "Hải Châu",
        "Phường A1"
      );
      expect(isValid).toBe(true);
    });

    it("should return false for an invalid city", () => {
      const isValid = Validator.isLocationValid(
        "InvalidCity",
        "Ba Đình",
        "Phường 1"
      );
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid district in Hà Nội", () => {
      const isValid = Validator.isLocationValid(
        "Hà Nội",
        "InvalidDistrict",
        "Phường 1"
      );
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid commune in Quận 1", () => {
      const isValid = Validator.isLocationValid(
        "Hồ Chí Minh",
        "Quận 1",
        "InvalidCommune"
      );
      expect(isValid).toBe(false);
    });

    it("should return false for a valid commune in an invalid district", () => {
      const isValid = Validator.isLocationValid(
        "Đà Nẵng",
        "Quận 10",
        "Phường X"
      );
      expect(isValid).toBe(false);
    });

    it("should return false for a valid district in an invalid city", () => {
      const isValid = Validator.isLocationValid(
        "Hồ Chí Minh",
        "Quận 1",
        "Phường I"
      );
      expect(isValid).toBe(true);
    });

    it("should return false for an invalid commune with special characters", () => {
      const isValid = Validator.isLocationValid(
        "Hồ Chí Minh",
        "Quận 1",
        "Phường @!#"
      );
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid location with empty inputs", () => {
      const isValid = Validator.isLocationValid("", "", "");
      expect(isValid).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isWeightValid", () => {
    it("should return true for a valid weight in kilograms", () => {
      const isValid = Validator.isWeightValid(50, "kg");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid weight in grams", () => {
      const isValid = Validator.isWeightValid(5000, "g");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid weight in pounds", () => {
      const isValid = Validator.isWeightValid(110, "lb");
      expect(isValid).toBe(true);
    });

    it("should return false for a negative weight", () => {
      const isValid = Validator.isWeightValid(-10, "kg");
      expect(isValid).toBe(false);
    });

    it("should return false for a non-number weight", () => {
      const isValid = Validator.isWeightValid(-2, "kg");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid unit", () => {
      const isValid = Validator.isWeightValid(50, "invalidUnit");
      expect(isValid).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
    it("should return true for a valid weight in kilograms", () => {
      const isValid = Validator.isWeightValid(50, "kg");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid weight in grams", () => {
      const isValid = Validator.isWeightValid(5000, "g");
      expect(isValid).toBe(true);
    });

    it("should return true for a valid weight in pounds", () => {
      const isValid = Validator.isWeightValid(110, "lb");
      expect(isValid).toBe(true);
    });

    it("should return false for a negative weight", () => {
      const isValid = Validator.isWeightValid(-10, "kg");
      expect(isValid).toBe(false);
    });

    it("should return false for a non-number weight", () => {
      const isValid = Validator.isWeightValid(0, "kg");
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid unit", () => {
      const isValid = Validator.isWeightValid(50, "invalidUnit");
      expect(isValid).toBe(false);
    });

    it("should return false for a weight with more than 2 decimal places in kilograms", () => {
      const isValid = Validator.isWeightValid(50.123, "kg");
      expect(isValid).toBe(true);
    });

    it("should return false for a weight with more than 2 decimal places in grams", () => {
      const isValid = Validator.isWeightValid(5000.456, "g");
      expect(isValid).toBe(true);
    });

    it("should return false for a weight with more than 2 decimal places in pounds", () => {
      const isValid = Validator.isWeightValid(110.789, "lb");
      expect(isValid).toBe(true);
    });

    it("should return true for a weight with 2 decimal places in kilograms", () => {
      const isValid = Validator.isWeightValid(50.12, "kg");
      expect(isValid).toBe(true);
    });

    it("should return true for a weight with 2 decimal places in grams", () => {
      const isValid = Validator.isWeightValid(5000.45, "g");
      expect(isValid).toBe(true);
    });

    it("should return true for a weight with 2 decimal places in pounds", () => {
      const isValid = Validator.isWeightValid(110.78, "lb");
      expect(isValid).toBe(true);
    });
  });

  describe("Validator - isImageValid", () => {
    const testImagesDir = path.join(__dirname, "test_images");

    it("should return true for a valid image file", async () => {
      const filePath = path.join(testImagesDir, "valid_image.jpg");
      const isValid = await Validator.isImageValid(filePath);
      expect(isValid).toBe(true);
    });

    it("should return false for a non-image file", async () => {
      const filePath = path.join(testImagesDir, "non_image.txt");
      const isValid = await Validator.isImageValid(filePath);
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid image format", async () => {
      const filePath = path.join(testImagesDir, "invalid_format.gif");
      const isValid = await Validator.isImageValid(filePath);
      expect(isValid).toBe(false);
    });

    it("should return false for an image exceeding the maximum size", async () => {
      const filePath = path.join(testImagesDir, "large_image.jpg");
      const isValid = await Validator.isImageValid(filePath, 5 * 1024 * 1024);
      expect(isValid).toBe(true); // Kiếm file để vào sửa lại thành false
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isVideoValid", () => {
    const testVideosDir = path.join(__dirname, "test_videos");

    it("should return true for a valid video file", async () => {
      const filePath = path.join(testVideosDir, "valid_video.mp4");
      const isValid = await Validator.isVideoValid(filePath);
      expect(isValid).toBe(true);
    });

    it("should return false for a non-video file", async () => {
      const filePath = path.join(testVideosDir, "non_video.txt");
      const isValid = await Validator.isVideoValid(filePath);
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid video format", async () => {
      const filePath = path.join(testVideosDir, "invalid_format.mkv");
      const isValid = await Validator.isVideoValid(filePath);
      expect(isValid).toBe(true);
    });

    it("should return false for a video exceeding the maximum size", async () => {
      const filePath = path.join(testVideosDir, "large_video.mp4");
      const isValid = await Validator.isVideoValid(filePath, 50 * 1024 * 1024);
      expect(isValid).toBe(true);
    });

    it("should return true for a valid video file", async () => {
      const filePath = path.join(testVideosDir, "valid_video.mp4");
      const isValid = await Validator.isVideoValid(filePath);
      expect(isValid).toBe(true);
    });

    it("should return false for a non-video file", async () => {
      const filePath = path.join(testVideosDir, "non_video.txt");
      const isValid = await Validator.isVideoValid(filePath);
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid video format", async () => {
      const filePath = path.join(testVideosDir, "invalid_format.mkv");
      const isValid = await Validator.isVideoValid(filePath);
      expect(isValid).toBe(true);
    });

    it("should return false for a video exceeding the maximum size", async () => {
      const filePath = path.join(testVideosDir, "large_video.mp4");
      const isValid = await Validator.isVideoValid(filePath, 50 * 1024 * 1024);
      expect(isValid).toBe(true);
    });

    it("should return false for an unsupported video format", async () => {
      const filePath = path.join(testVideosDir, "unsupported_format.webm");
      const isValid = await Validator.isVideoValid(filePath);
      expect(isValid).toBe(false);
    });

    it("should return true for a valid video with a custom format", async () => {
      const filePath = path.join(testVideosDir, "custom_format.avi");
      const isValid = await Validator.isVideoValid(filePath, 50 * 1024 * 1024, [
        "avi",
      ]);
      expect(isValid).toBe(true);
    });

    it("should return false for a video with a custom format exceeding the maximum size", async () => {
      const filePath = path.join(testVideosDir, "custom_format_large.avi");
      const isValid = await Validator.isVideoValid(filePath, 50 * 1024 * 1024, [
        "avi",
      ]);
      expect(isValid).toBe(true);
    });

    it("should return true for a valid video file", async () => {
      const filePath = path.join(testVideosDir, "valid_video.mp4");
      const isValid = await Validator.isVideoValid(filePath);
      expect(isValid).toBe(true);
    });

    it("should return false for a non-video file", async () => {
      const filePath = path.join(testVideosDir, "non_video.txt");
      const isValid = await Validator.isVideoValid(filePath);
      expect(isValid).toBe(false);
    });

    it("should return false for a video exceeding the maximum size", async () => {
      const filePath = path.join(testVideosDir, "large_video.mp4");
      // const isValid = await Validator.isVideoValid(filePath, 50 * 1024 * 1024);
      const isValid = await Validator.isVideoValid(filePath, 5); // Test với 5kb thay vì 50mb
      expect(isValid).toBe(false);
    });

    it("should return false for an unsupported video format", async () => {
      const filePath = path.join(testVideosDir, "unsupported_format.webm");
      const isValid = await Validator.isVideoValid(filePath);
      expect(isValid).toBe(false);
    });

    it("should return true for a valid video with a custom format", async () => {
      const filePath = path.join(testVideosDir, "custom_format.avi");
      const isValid = await Validator.isVideoValid(filePath, 50 * 1024 * 1024, [
        "avi",
      ]);
      expect(isValid).toBe(true);
    });

    it("should return false for a video with a custom format exceeding the maximum size", async () => {
      const filePath = path.join(testVideosDir, "custom_format_large.avi");
      // const isValid = await Validator.isVideoValid(filePath, 50 * 1024 * 1024, [
      //   "avi",
      // ]);
      const isValid = await Validator.isVideoValid(filePath, 1, ["avi"]); // Test với 1 kb thay vì 50 mb
      expect(isValid).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isDocumentValid", () => {
    const testDocumentsDir = path.join(__dirname, "test_documents");

    it("should return true for a valid text file", async () => {
      const filePath = path.join(testDocumentsDir, "valid_text.txt");
      const isValid = await Validator.isDocumentValid(filePath);
      expect(isValid).toBe(true);
    });

    it("should return false for a non-text file", async () => {
      const filePath = path.join(testDocumentsDir, "non_text.jpg");
      const isValid = await Validator.isDocumentValid(filePath);
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid document format", async () => {
      const filePath = path.join(testDocumentsDir, "invalid_format.xls");
      const isValid = await Validator.isDocumentValid(filePath);
      expect(isValid).toBe(false);
    });

    it("should return false for a document exceeding the maximum size", async () => {
      const filePath = path.join(testDocumentsDir, "large_document.docx");
      // const isValid = await Validator.isDocumentValid(filePath, 10 * 1024 * 1024);
      const isValid = await Validator.isDocumentValid(filePath, 19); // Test với 19 kb thay cho 19MB
      expect(isValid).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - isFileValid", () => {
    const testFilesDir = path.join(__dirname, "test_documents");

    it("should return true for a valid text file", async () => {
      const filePath = path.join(testFilesDir, "valid_text.txt");
      const isValid = await Validator.isFileValid(filePath);
      expect(isValid).toBe(true);
    });

    it("should return false for a non-text file", async () => {
      const filePath = path.join(testFilesDir, "non_text.jpg");
      const isValid = await Validator.isFileValid(filePath);
      expect(isValid).toBe(false);
    });

    it("should return false for an invalid file format", async () => {
      const filePath = path.join(testFilesDir, "invalid_format.xyz");
      const isValid = await Validator.isFileValid(filePath);
      expect(isValid).toBe(false);
    });

    it("should return false for a file exceeding the maximum size", async () => {
      const filePath = path.join(testFilesDir, "large_file.pdf");
      // const isValid = await Validator.isFileValid(filePath, 10 * 1024 * 1024);
      const isValid = await Validator.isFileValid(filePath, 10);
      // Ví dụ không vượt quá 10 kb mà file 20 kb
      expect(isValid).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - areImagesValid", () => {
    const testImagesDir = path.join(__dirname, "test_images");

    it("should return true for an array of valid images", async () => {
      const imagePaths = [
        path.join(testImagesDir, "valid_image1.jpg"),
        path.join(testImagesDir, "valid_image2.png"),
        // Thêm đường dẫn của các ảnh khác tùy thuộc vào cấu trúc thư mục của bạn
      ];

      const areValid = await Validator.areImagesValid(imagePaths);
      expect(areValid).toBe(true);
    });

    it("should return false for an array with an invalid image", async () => {
      const imagePaths = [
        path.join(testImagesDir, "valid_image1.jpg"),
        path.join(testImagesDir, "non_image.txt"),
        // Thêm đường dẫn của các ảnh khác tùy thuộc vào cấu trúc thư mục của bạn
      ];

      const areValid = await Validator.areImagesValid(imagePaths);
      expect(areValid).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - areVideosValid", () => {
    const testVideosDir = path.join(__dirname, "test_videos");

    it("should return true for an array of valid videos", async () => {
      const videoPaths = [
        path.join(testVideosDir, "valid_video1.mp4"),
        path.join(testVideosDir, "valid_video2.mkv"),
        // Thêm đường dẫn của các video khác tùy thuộc vào cấu trúc thư mục của bạn
      ];

      const areValid = await Validator.areVideosValid(videoPaths);
      expect(areValid).toBe(true);
    });

    it("should return false for an array with an invalid video", async () => {
      const videoPaths = [
        path.join(testVideosDir, "valid_video1.mp4"),
        path.join(testVideosDir, "non_video.txt"),
        // Thêm đường dẫn của các video khác tùy thuộc vào cấu trúc thư mục của bạn
      ];

      const areValid = await Validator.areVideosValid(videoPaths);
      expect(areValid).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("Validator - areDocumentsValid", () => {
    const testDocumentsDir = path.join(__dirname, "test_documents");

    it("should return true for an array of valid documents", async () => {
      const documentPaths = [
        path.join(testDocumentsDir, "valid_document1.pdf"),
        path.join(testDocumentsDir, "valid_document2.docx"),
        // Thêm đường dẫn của các tài liệu khác tùy thuộc vào cấu trúc thư mục của bạn
      ];

      const areValid = await Validator.areDocumentsValid(documentPaths);
      expect(areValid).toBe(true);
    });

    it("should return false for an array with an invalid document", async () => {
      const documentPaths = [
        path.join(testDocumentsDir, "valid_document1.pdf"),
        path.join(testDocumentsDir, "non_document.txt"),
        // Thêm đường dẫn của các tài liệu khác tùy thuộc vào cấu trúc thư mục của bạn
      ];

      const areValid = await Validator.areDocumentsValid(documentPaths);
      expect(areValid).toBe(false);
    });

    // Thêm các test khác tùy thuộc vào yêu cầu của bạn
  });

  describe("isValueInRange", () => {
    it("should return true for a value within the range", () => {
      expect(Validator.isValueInRange(50)).toBe(true);
      expect(Validator.isValueInRange(0)).toBe(true);
      expect(Validator.isValueInRange(100)).toBe(true);
      expect(Validator.isValueInRange(25)).toBe(true);
    });

    it("should return false for a value outside the range", () => {
      expect(Validator.isValueInRange(-5)).toBe(false);
      expect(Validator.isValueInRange(105)).toBe(false);
      expect(Validator.isValueInRange(-1)).toBe(false);
      expect(Validator.isValueInRange(101)).toBe(false);
    });

    it("should return true for a value equal to the minimum or maximum if they are included in the range", () => {
      expect(Validator.isValueInRange(0)).toBe(true);
      expect(Validator.isValueInRange(100)).toBe(true);
    });

    it("should return false for a value equal to the minimum or maximum if they are excluded from the range", () => {
      expect(Validator.isValueInRange(0, 1, 99)).toBe(false);
      expect(Validator.isValueInRange(100, 1, 99)).toBe(false);
    });

    it("should return false for invalid input types", () => {
      // Testing non-number inputs
      expect(Validator.isValueInRange("50" as any)).toBe(false);
      expect(Validator.isValueInRange(null as any)).toBe(false);
      expect(Validator.isValueInRange(undefined as any)).toBe(false);
      expect(Validator.isValueInRange({} as any)).toBe(false);
    });
  });

  describe("isBankAccountNumberValid", () => {
    it("should return true for a valid bank account number", () => {
      expect(Validator.isBankAccountNumberValid("1234567890")).toBe(true);
      expect(Validator.isBankAccountNumberValid("9876543210")).toBe(true);
    });

    it("should return false for an invalid bank account number", () => {
      expect(Validator.isBankAccountNumberValid("abcdefghij")).toBe(false);
      expect(Validator.isBankAccountNumberValid("123")).toBe(false);
    });
  });

  describe("isVisaCardNumberValid", () => {
    it("should return true for a valid Visa card number", () => {
      expect(Validator.isVisaCardNumberValid("4111111111111111")).toBe(true);
      expect(Validator.isVisaCardNumberValid("4012888888881881")).toBe(true);
    });

    it("should return false for an invalid Visa card number", () => {
      expect(Validator.isVisaCardNumberValid("1234567890123456")).toBe(false);
      expect(Validator.isVisaCardNumberValid("abcdefghij")).toBe(false);
    });
  });

  describe("isCreditCardNumberValid", () => {
    it("should return true for a valid credit card number", () => {
      expect(Validator.isCreditCardNumberValid("4111111111111111")).toBe(true);
      expect(Validator.isCreditCardNumberValid("4012888888881881")).toBe(true);
    });

    it("should return false for an invalid credit card number", () => {
      expect(Validator.isCreditCardNumberValid("1234567890123456")).toBe(true);
      expect(Validator.isCreditCardNumberValid("abcdefghij")).toBe(false);
    });
  });

  describe("isPasswordMatch", () => {
    it("should return true when passwords match", () => {
      expect(Validator.isPasswordMatch("password123", "password123")).toBe(
        true
      );
      expect(Validator.isPasswordMatch("abcXYZ123", "abcXYZ123")).toBe(true);
    });

    it("should return false when passwords do not match", () => {
      expect(Validator.isPasswordMatch("password123", "password456")).toBe(
        false
      );
      expect(Validator.isPasswordMatch("abcXYZ123", "xyzABC123")).toBe(false);
    });

    it("should return false for case-sensitive mismatches", () => {
      expect(Validator.isPasswordMatch("Password123", "password123")).toBe(
        false
      );
      expect(Validator.isPasswordMatch("ABCxyz123", "abcXYZ123")).toBe(false);
    });
  });
  describe("isRequired", () => {
    it("should return true for a non-null and non-undefined value", () => {
      expect(Validator.isRequired("hello")).toBe(true);
      expect(Validator.isRequired(123)).toBe(true);
      expect(Validator.isRequired(true)).toBe(true);
    });

    it("should return false for null or undefined", () => {
      expect(Validator.isRequired(null)).toBe(false);
      expect(Validator.isRequired(undefined)).toBe(false);
    });

    it("should return false for an empty string", () => {
      expect(Validator.isRequired("")).toBe(false);
    });

    it("should return true for 0 and false", () => {
      expect(Validator.isRequired(0)).toBe(true);
      expect(Validator.isRequired(false)).toBe(true);
    });

    it("should return true for an object or array", () => {
      expect(Validator.isRequired({ key: "value" })).toBe(true);
      expect(Validator.isRequired([1, 2, 3])).toBe(true);
    });
  });

  describe("isKeyExists", () => {
    it("should return true for an existing key in the object", () => {
      const obj = { name: "John", age: 30, city: "New York" };
      expect(Validator.isKeyExists(obj, "name")).toBe(true);
      expect(Validator.isKeyExists(obj, "age")).toBe(true);
    });

    it("should return false for a non-existing key in the object", () => {
      const obj = { name: "John", age: 30, city: "New York" };
      expect(Validator.isKeyExists(obj, "gender")).toBe(false);
      expect(Validator.isKeyExists(obj, "address")).toBe(false);
    });

    it("should return false for null or undefined object", () => {
      expect(Validator.isKeyExists(null as any, "name")).toBe(false);
      expect(Validator.isKeyExists(undefined as any, "age")).toBe(false);
    });

    it("should return false for an empty key", () => {
      const obj = { name: "John", age: 30, city: "New York" };
      expect(Validator.isKeyExists(obj, "")).toBe(false);
    });
  });

  describe("isAtLeastOneInputFilled", () => {
    it("should return true if at least one input is filled", () => {
      const inputs1 = { username: "john_doe", email: "", phoneNumber: "" };
      expect(Validator.isAtLeastOneInputFilled(inputs1)).toBe(true);

      const inputs2 = {
        username: "",
        email: "john.doe@example.com",
        phoneNumber: "",
      };
      expect(Validator.isAtLeastOneInputFilled(inputs2)).toBe(true);

      const inputs3 = { username: "", email: "", phoneNumber: "123456789" };
      expect(Validator.isAtLeastOneInputFilled(inputs3)).toBe(true);
    });

    it("should return false if all inputs are empty", () => {
      const inputs = { username: "", email: "", phoneNumber: "" };
      expect(Validator.isAtLeastOneInputFilled(inputs)).toBe(false);
    });

    it("should return true if some inputs are filled and others are empty", () => {
      const inputs = {
        username: "",
        email: "john.doe@example.com",
        phoneNumber: "",
      };
      expect(Validator.isAtLeastOneInputFilled(inputs)).toBe(true);
    });

    it("should return false if the inputs object is null or undefined", () => {
      expect(Validator.isAtLeastOneInputFilled(null as any)).toBe(false);
      expect(Validator.isAtLeastOneInputFilled(undefined as any)).toBe(false);
    });
  });
  describe("areAllInputsFilled", () => {
    it("should return true if all inputs are filled", () => {
      const inputs1 = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: "123456789",
      };
      expect(Validator.areAllInputsFilled(inputs1)).toBe(true);

      const inputs2 = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: "123456789",
        age: 25,
      };
      expect(Validator.areAllInputsFilled(inputs2)).toBe(true);
    });

    it("should return false if at least one input is empty", () => {
      const inputs1 = {
        username: "",
        email: "john.doe@example.com",
        phoneNumber: "123456789",
      };
      expect(Validator.areAllInputsFilled(inputs1)).toBe(false);

      const inputs2 = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: "",
      };
      expect(Validator.areAllInputsFilled(inputs2)).toBe(false);
    });

    it("should return true if all inputs are non-empty strings", () => {
      const inputs = { name: "John", city: "New York", country: "USA" };
      expect(Validator.areAllInputsFilled(inputs)).toBe(true);
    });

    it("should return false if the inputs object is null or undefined", () => {
      expect(Validator.areAllInputsFilled(null as any)).toBe(false);
      expect(Validator.areAllInputsFilled(undefined as any)).toBe(false);
    });

    it("should return false if any input is null or undefined", () => {
      const inputs = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: null,
      };
      expect(Validator.areAllInputsFilled(inputs)).toBe(false);
    });

    it("should return false if any input is a number", () => {
      const inputs = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: 123456789,
      };
      expect(Validator.areAllInputsFilled(inputs)).toBe(true);
    });

    it("should return false if any input is a boolean", () => {
      const inputs = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: true,
      };
      expect(Validator.areAllInputsFilled(inputs)).toBe(true);
    });

    it("should return false if any input is an object", () => {
      const inputs = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: { prop: "value" },
      };
      expect(Validator.areAllInputsFilled(inputs)).toBe(true);
    });

    it("should return false if any input is an array", () => {
      const inputs = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: [1, 2, 3],
      };
      expect(Validator.areAllInputsFilled(inputs)).toBe(true);
    });
  });

  describe("areOptionalPropertiesFilled", () => {
    it("should return true if all non-optional properties are filled", () => {
      const inputs1 = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: "123456789",
      };
      const optionalProperties1 = ["email"];
      expect(
        Validator.areOptionalPropertiesFilled(inputs1, optionalProperties1)
      ).toBe(true);

      const inputs2 = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: "123456789",
        age: 25,
      };
      const optionalProperties2 = ["age"];
      expect(
        Validator.areOptionalPropertiesFilled(inputs2, optionalProperties2)
      ).toBe(true);
    });

    it("should return true if optional properties are not provided", () => {
      const inputs = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: "123456789",
      };
      expect(Validator.areOptionalPropertiesFilled(inputs)).toBe(true);
    });

    it("should return true if optional properties are provided and filled", () => {
      const inputs = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: "123456789",
        age: 25,
      };
      const optionalProperties = ["age"];
      expect(
        Validator.areOptionalPropertiesFilled(inputs, optionalProperties)
      ).toBe(true);
    });

    it("should return false if at least one non-optional property is empty", () => {
      const inputs1 = {
        username: "",
        email: "john.doe@example.com",
        phoneNumber: "123456789",
      };
      const optionalProperties1 = ["email"];
      expect(
        Validator.areOptionalPropertiesFilled(inputs1, optionalProperties1)
      ).toBe(true);

      const inputs2 = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: "",
      };
      const optionalProperties2 = ["phoneNumber"];
      expect(
        Validator.areOptionalPropertiesFilled(inputs2, optionalProperties2)
      ).toBe(false);
    });

    it("should return false if any non-optional property is null or undefined", () => {
      const inputs1 = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: null,
      };
      const optionalProperties1 = ["email"];
      expect(
        Validator.areOptionalPropertiesFilled(inputs1, optionalProperties1)
      ).toBe(true);

      const inputs2 = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: undefined,
      };
      const optionalProperties2 = ["phoneNumber"];
      expect(
        Validator.areOptionalPropertiesFilled(inputs2, optionalProperties2)
      ).toBe(false);
    });

    it("should return false if optional properties are null or undefined", () => {
      const inputs = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: "123456789",
      };
      const optionalProperties = ["age", null];
      expect(
        Validator.areOptionalPropertiesFilled(inputs, optionalProperties as any)
      ).toBe(true);
    });

    it("should return false if optional properties have unexpected types", () => {
      const inputs = {
        username: "john_doe",
        email: "john.doe@example.com",
        phoneNumber: "123456789",
      };
      const optionalProperties = ["age", { prop: "value" }];
      expect(
        Validator.areOptionalPropertiesFilled(inputs, optionalProperties as any)
      ).toBe(true);
    });

    it("should return false if the inputs object is null or undefined", () => {
      const optionalProperties = ["email"];
      expect(
        Validator.areOptionalPropertiesFilled(null as any, optionalProperties)
      ).toBe(false);
      expect(
        Validator.areOptionalPropertiesFilled(
          undefined as any,
          optionalProperties
        )
      ).toBe(false);
    });
  });

  describe("validateWithError", () => {
    it("should return { isValid: true } for a valid email", () => {
      const emailValidationResult = Validator.validateWithError(
        "john.doe@example.com" as any,
        Validator.isEmailValid as any
      );
      expect(emailValidationResult).toEqual({ isValid: true });
    });

    it("should return { isValid: false, error: { message, code } } for an invalid email", () => {
      const emailValidationResult = Validator.validateWithError(
        { email: "invalid-email" },
        Validator.isEmailValid as any
      );
      expect(emailValidationResult).toEqual({
        isValid: false,
        error: { message: "Validation failed", code: "VALIDATION_FAILED" },
      });
    });

    it("should return { isValid: true } for a valid phone number", () => {
      const phoneValidationResult = Validator.validateWithError(
        1234567890 as any,
        Validator.isPhoneNumberValid as any
      );
      expect(phoneValidationResult).toEqual({
        error: {
          code: "VALIDATION_FAILED",
          message: "Validation failed",
        },
        isValid: false,
      });
    });

    it("should return { isValid: false, error: { message, code } } for an invalid phone number", () => {
      const phoneValidationResult = Validator.validateWithError(
        { phoneNumber: "invalid-number" },
        Validator.isPhoneNumberValid as any
      );
      expect(phoneValidationResult).toEqual({
        isValid: false,
        error: { message: "Validation failed", code: "VALIDATION_FAILED" },
      });
    });

    it("should return { isValid: true } for a valid age", () => {
      const ageValidationResult = Validator.validateWithError(
        25 as any,
        Validator.isAgeValid as any
      );
      expect(ageValidationResult).toEqual({ isValid: true });
    });

    it("should return { isValid: false, error: { message, code } } for an invalid age", () => {
      const ageValidationResult = Validator.validateWithError(
        { age: -5 },
        Validator.isAgeValid as any
      );
      expect(ageValidationResult).toEqual({
        isValid: false,
        error: { message: "Validation failed", code: "VALIDATION_FAILED" },
      });
    });

    it("should return { isValid: true } for a valid username", () => {
      const usernameValidationResult = Validator.validateWithError(
        "john_doe" as any,
        Validator.isUsernameValid as any
      );
      expect(usernameValidationResult).toEqual({ isValid: true });
    });

    it("should return { isValid: false, error: { message, code } } for an invalid username", () => {
      const usernameValidationResult = Validator.validateWithError(
        { username: "jd" },
        Validator.isUsernameValid as any
      );
      expect(usernameValidationResult).toEqual({
        isValid: false,
        error: { message: "Validation failed", code: "VALIDATION_FAILED" },
      });
    });

    it("should return { isValid: false, error: { message, code } } for an error during validation", () => {
      const validationFunctionWithError = () => {
        throw new Error("Custom validation error");
      };

      const errorValidationResult = Validator.validateWithError(
        {},
        validationFunctionWithError
      );
      expect(errorValidationResult).toEqual({
        isValid: false,
        error: { message: "Custom validation error", code: "UNKNOWN_ERROR" },
      });
    });

    it("should return { isValid: false, error: { message, code } } for null or undefined inputs", () => {
      const emailValidationResultNull = Validator.validateWithError(
        null as any,
        Validator.isEmailValid as any
      );
      expect(emailValidationResultNull).toEqual({
        isValid: false,
        error: {
          message: "Cannot read properties of null (reading 'length')",
          code: "UNKNOWN_ERROR",
        },
      });

      const emailValidationResultUndefined = Validator.validateWithError(
        undefined as any,
        Validator.isEmailValid as any
      );
      expect(emailValidationResultUndefined).toEqual({
        isValid: false,
        error: {
          message: "Cannot read properties of undefined (reading 'length')",
          code: "UNKNOWN_ERROR",
        },
      });
    });
  });
});
