"use strict";
class User {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
    isValidName() {
        const namePattern = /^[A-Za-z\s]+$/;
        return this.name.trim().length > 1 && namePattern.test(this.name);
    }
}
const form = document.getElementById("contactForm");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const user = new User(name, email, message);
    if (!user.isValidName()) {
        alert("Invalid name. Please use letters and spaces only, and at least 2 characters.");
        return;
    }
    alert(`Welcome, ${user.name}!`);
});
//# sourceMappingURL=index.js.map