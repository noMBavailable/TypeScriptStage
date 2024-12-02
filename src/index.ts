class User{
    constructor(
        public name: string, 
        public email: string, 
        public message: string){}

        isValidName(): boolean {
            const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
            return this.name.trim().length > 1 && namePattern.test(this.name); /// better understand this
        }
    
}


const form = document.getElementById("contactForm") as HTMLFormElement;

form?.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    // Get the input element from the DOM
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLInputElement).value;

    const user = new User(name, email, message);


    if (!user.isValidName()) {
        alert("Invalid name. Please use letters and spaces only, and at least 2 characters.");
        return;
    }

    alert(`Welcome, ${user.name}!`);

});








