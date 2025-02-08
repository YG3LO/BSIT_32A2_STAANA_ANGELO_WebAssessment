document.getElementById("hobbiesButton").addEventListener("click", function () {
    // Show an alert
    alert("My hobbies: Coding, Playing Basketball, Exploring Tech!");

    // Show the hobbies 
    document.getElementById("hobbies").style.display = "block";

    // Scroll to the hobbies 
    document.getElementById("hobbies").scrollIntoView({ behavior: "smooth" });
});

function showHobbies() {
    const hobbies = ["Studying", "Playing Basketball", "Playing Video Games"];
    alert("MY HOBBIES:\n" + hobbies.join("\n"));
}
 
 

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        alert("Form Submitted!"); // Show confirmation alert
        this.reset(); // Clear the form fields
 });



