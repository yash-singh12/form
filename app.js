// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_vyzzy0q";  // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "template_b3dacbs";  // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = "mXkZpR3syO0qWljnV";  // Replace with your Public Key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Handle Form Submission
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from refreshing

    // Get form values
    let userName = document.getElementById("name").value.trim();
    let userMessage = document.getElementById("message").value.trim();

    if (userName === "" || userMessage === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Send email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: userName,
        message: userMessage
    }).then(() => {
        document.getElementById("statusMessage").textContent = "Email sent successfully!";
        document.getElementById("emailForm").reset();
    }).catch(error => {
        console.error("Error sending email:", error);
        document.getElementById("statusMessage").textContent = "Error sending email.";
    });
});
