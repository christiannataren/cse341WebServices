const strings = {};

// General Errors
strings.ERROR_CREATING_CONTACT = "Error creating contact";
strings.CONTACT_NOT_FOUND = "Contact not found";

// Validation Messages
strings.NAME_NOT_EMPTY = "First name is required";
strings.LASTNAME_NOT_EMPTY = "Last name is required";
strings.COLOR_NOT_EMPTY = "Favorite color is required";
strings.EMAIL_NOT_EMPTY = "Email is required";
strings.BIRTHDAY_NOT_EMPTY = "Birthday is required";

// Format Errors
strings.EMAIL_BAD_FORMAT = "Invalid email format";
strings.BIRTHDAY_BAD_FORMAT = "Date format must be YYYY-MM-DD";

// Success/Fail Messages
strings.CONTACT_UPDATED = "Contact updated successfully";
strings.CONTACT_FAIL_UPDATED = "Error updating contact";
strings.CONTACT_DELETED = "Contact deleted successfully";
strings.CONTACT_DELETED_FAIL = "Error deleting contact";


module.exports = strings;