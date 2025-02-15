const firebaseConfig = {
    apiKey: "AIzaSyAgiHDmY0tRR4A5Jdsoex5Zw0bKwdNFvWQ",
    authDomain: "yash-76d01.firebaseapp.com",
    databaseURL: "https://yash-76d01-default-rtdb.firebaseio.com",
    projectId: "yash-76d01",
    storageBucket: "yash-76d01.firebasestorage.app",
    messagingSenderId: "336904901354",
    appId: "1:336904901354:web:1af032f062ce78adf03d93"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Handle Form Submission
document.getElementById("complaintForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    
    let userName = document.getElementById("userName").value.trim();
    let userContact = document.getElementById("userContact").value.trim();
    let userEmail = document.getElementById("userEmail").value.trim();
    let complaintDetail = document.getElementById("complaintDetail").value.trim();
    
 function getQueryParam(param) {
            let urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        // Auto-fill the Sensor ID from the URL parameter
        document.addEventListener("DOMContentLoaded", function () {
            let sensorId = getQueryParam("sensorId");
            if (sensorId) {
                document.getElementById("sensorId").value = sensorId;
            }
        });
    

    if (sensorId === "" || userName === "" || userContact === "" || userEmail === "" || complaintDetail === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Store Data in Firebase
    let complaintsRef = database.ref("complaints").push();
    complaintsRef.set({
        sensorId: sensorId,
        userName: userName,
        userContact: userContact,
        userEmail: userEmail,
        complaintDetail: complaintDetail,
        timestamp: new Date().toISOString()
    }).then(() => {
        document.getElementById("statusMessage").textContent = "Complaint Submitted Successfully!";
        document.getElementById("complaintForm").reset();
    }).catch(error => {
        console.error("Error submitting complaint:", error);
        document.getElementById("statusMessage").textContent = "Error submitting complaint!";
    });
});
