"use strict";
class User {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
}
const form = document.getElementById("contactForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const user = new User(name, email, message);
    alert(`Welcome, ${user.name}!`);
});
//# sourceMappingURL=index.js.map