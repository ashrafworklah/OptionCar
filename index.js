document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");
    const carImage = document.getElementById("carImage"); // <-- add this line

    submitBtn.addEventListener("click", function() {
        const selectedCar = document.getElementById("carSelect").value;
        const message = document.getElementById("message");

        if (selectedCar === "Axia") {
            message.innerText = "You chose the amazing car!";
            carImage.src = "images/axia.jpg";
        } else if (selectedCar === "Myvi") {
            message.innerText = "You chose a good car!";
            carImage.src = "images/myvi.jpg";
        } else if (selectedCar === "Mustang") {
            message.innerText = "You chose the amazing car!";
            carImage.src = "images/mustang.jpg";
        } else if (selectedCar === "Ducati") {
            message.innerText = "You chose the amazing car!";
            carImage.src = "images/ducati.jpg";
        } else {
            message.innerText = "Good choice!";
            carImage.src = "";
        }
        carImage.style.display = "block";
    });
});