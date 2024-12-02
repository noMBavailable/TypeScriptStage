class User{
    constructor(
        public name: string, 
        public email: string, 
        public message: string){}

    
}


const form = document.getElementById("contactForm") as HTMLFormElement;

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    // Get the input element from the DOM
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLInputElement).value;

    const user = new User(name, email, message);


    alert(`Welcome, ${user.name}!`);

})








