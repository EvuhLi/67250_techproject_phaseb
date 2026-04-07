var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
} else {
    if (C.length < z) {
        console.log(z);
    } else {
        console.log("good job!");
    }
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        if (h < 5 || h >= 20) {
            greetingElement.innerHTML = "Good night! Welcome to MonoMuse";
        } else if (h < 12) {
            greetingElement.innerHTML = "Good morning! Welcome to MonoMuse";
        } else if (h < 18) {
            greetingElement.innerHTML = "Good afternoon! Welcome to MonoMuse";
        } else {
            greetingElement.innerHTML = "Good evening! Welcome to MonoMuse";
        }
    }
}

greeting(hour);

function addYear() {
    var year = new Date().getFullYear();
    var copyYearElement = document.getElementById("copyYear");
    if (copyYearElement) {
        copyYearElement.innerHTML = "&copy; " + year + " MonoMuse. All rights reserved.";
    }
}

function ActiveNav() {
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

function toggleNav() {
    var navbar = document.querySelector(".nav_bar");
    if (navbar.classList.contains("responsive")) {
        navbar.classList.remove("responsive");
    } else {
        navbar.classList.add("responsive");
    }
}

function calculatePrice() {
    var quantity = document.getElementById("quantity");
    var ticketType = document.getElementById("ticketType");
    var totalPrice = document.getElementById("totalPrice");

    if (quantity && ticketType && totalPrice) {
        var qty = parseInt(quantity.value) || 0;
        var price = 18;

        if (ticketType.value && qty > 0) {
            totalPrice.value = "$" + (qty * price).toFixed(2);
        } else {
            totalPrice.value = "$0.00";
        }
    }
}

function validateAndSubmit(event) {
    event.preventDefault();
    var valid = true;

    var errors = document.querySelectorAll('.error-msg');
    errors.forEach(function(el) { el.textContent = ''; });

    var visitDate = document.getElementById("visitDate");
    if (!visitDate.value) {
        document.getElementById("visitDateError").textContent = "Please select a visit date.";
        valid = false;
    }

    var ticketType = document.getElementById("ticketType");
    if (!ticketType.value) {
        document.getElementById("ticketTypeError").textContent = "Please select a ticket type.";
        valid = false;
    }

    var quantity = document.getElementById("quantity");
    var qty = parseInt(quantity.value);
    if (!quantity.value || qty < 1 || qty > 10) {
        document.getElementById("quantityError").textContent = "Please enter a quantity between 1 and 10.";
        valid = false;
    }

    var email = document.getElementById("email");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value || !emailPattern.test(email.value)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        valid = false;
    }

    var zipcode = document.getElementById("zipcode");
    if (zipcode.value && !/^\d{5}$/.test(zipcode.value)) {
        document.getElementById("zipcodeError").textContent = "Zip code must be exactly 5 digits.";
        valid = false;
    }

    if (valid) {
        var total = (qty * 18).toFixed(2);

        sessionStorage.setItem("orderDate", visitDate.value);
        sessionStorage.setItem("orderType", ticketType.value);
        sessionStorage.setItem("orderQty", qty);
        sessionStorage.setItem("orderTotal", total);
        sessionStorage.setItem("orderEmail", email.value);

        window.location.href = "confirmation.html";
    }

    return false;
}

function displayConfirmation() {
    var details = document.getElementById("orderDetails");
    if (details) {
        var date = sessionStorage.getItem("orderDate");
        var type = sessionStorage.getItem("orderType");
        var qty = sessionStorage.getItem("orderQty");
        var total = sessionStorage.getItem("orderTotal");
        var email = sessionStorage.getItem("orderEmail");

        if (date && type && qty && total) {
            details.innerHTML =
                "<p><strong>Visit Date:</strong> " + date + "</p>" +
                "<p><strong>Ticket Type:</strong> " + type + "</p>" +
                "<p><strong>Quantity:</strong> " + qty + "</p>" +
                "<p><strong>Email:</strong> " + email + "</p>" +
                "<p><strong>Total Cost: $" + total + "</strong></p>";
        } else {
            details.innerHTML = "<p>No order details found. Please <a href='buytickets.html'>purchase tickets</a> first.</p>";
        }
    }
}

var galleryImages = [
    { src: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=700", alt: "Interactive light installation in a dark gallery space", caption: "Digital Reflections - Interactive light installation" },
    { src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=700", alt: "Abstract digital painting displayed on large screen", caption: "Pixels and Paint - Digital art meets canvas" },
    { src: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=700", alt: "Colorful immersive art exhibition with projected patterns", caption: "Immersive Colors - A walk-through visual experience" }
];
var currentImage = 0;

function updateGallery() {
    var img = document.getElementById("galleryImage");
    var counter = document.getElementById("galleryCounter");
    var caption = document.getElementById("galleryCaption");

    if (img && counter && caption) {
        img.src = galleryImages[currentImage].src;
        img.alt = galleryImages[currentImage].alt;
        counter.textContent = (currentImage + 1) + " / " + galleryImages.length;
        caption.textContent = galleryImages[currentImage].caption;
    }
}

function nextImage() {
    currentImage = (currentImage + 1) % galleryImages.length;
    updateGallery();
}

function prevImage() {
    currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
}

var mapContainer = document.getElementById("map");
if (mapContainer) {
    var map = L.map('map').setView([40.4433, -79.9436], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([40.4433, -79.9436]).addTo(map)
        .bindPopup('MonoMuse Museum<br>5000 Forbes Ave, Pittsburgh')
        .openPopup();
}


if (typeof $ !== 'undefined') {
    $(document).ready(function() {
        $("#readLess").click(function() {
            $("#longIntro").hide();
            $("#readLess").hide();
            $("#readMore").show();
        });

        $("#readMore").click(function() {
            $("#longIntro").show();
            $("#readLess").show();
            $("#readMore").hide();
        });
    });
}
