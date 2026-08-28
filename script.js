function scrollToRooms() {
    document.getElementById("rooms").scrollIntoView({
        behavior: "smooth"
    });
}

function selectRoom(price) {
    document.getElementById("room").value = price;

    document.querySelector(".booking").scrollIntoView({
        behavior: "smooth"
    });
}

function bookRoom() {

    let name = document.getElementById("name").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let room = document.getElementById("room").value;

    let message = document.getElementById("message");

    if (name === "" || checkin === "" || checkout === "" || room === "") {
        message.innerHTML = "⚠️ Please fill all details.";
        message.style.color = "red";
        return;
    }

    if (checkout <= checkin) {
        message.innerHTML = "⚠️ Checkout date must be after check-in.";
        message.style.color = "red";
        return;
    }

    message.innerHTML =
        "✅ Booking successful! Welcome " + name + ".";

    message.style.color = "green";
}