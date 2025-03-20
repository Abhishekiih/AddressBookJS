class Contact {
    constructor(firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddressCityState(address, "Address");
        this.city = this.validateAddressCityState(city, "City");
        this.state = this.validateAddressCityState(state, "State");
        this.zipCode = this.validateZip(zipCode);
        this.phoneNumber = this.validatePhone(phoneNumber);
        this.email = this.validateEmail(email);
    }

    validateName(name, fieldName) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`Invalid ${fieldName}: Must start with a capital letter & have at least 3 characters.`);
        }
        return name;
    }

    validateAddressCityState(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`Invalid ${fieldName}: Must be at least 4 characters long.`);
        }
        return value;
    }

    validateZip(zip) {
        const zipRegex = /^\d{3}\s?\d{3}$/;
        if (!zipRegex.test(zip)) {
            throw new Error("Invalid ZIP Code: Must be in format '123456' or '123 456'.");
        }
        return zip;
    }

    validatePhone(phone) {
        const phoneRegex = /^(\+91\s?)?[6-9]\d{9}$/;
        if (!phoneRegex.test(phone)) {
            throw new Error("Invalid Phone Number: Must be in format '+91 9876543210' or '9876543210'.");
        }
        return phone;
    }

    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email: Must be in standard email format.");
        }
        return email;
    }
}

