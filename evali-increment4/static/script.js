
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
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

function showForm() {
    document.getElementById("purchaseForm").style.display = "block";
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
