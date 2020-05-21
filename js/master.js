// Check if there's Local Storage Color Option
let mainColor = localStorage.getItem("color-option");

if (mainColor !== null) {
    console.log(localStorage)
    document.documentElement.style.setProperty("--main--color", localStorage.getItem("color-option"));

    // Remove Active class From all colors list item
    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove("active");

        // add active class on Element with data color === local stroage item
    if (element.dataset.color === mainColor) {

        // add active class 
        element.classList.add("active");

    }
    });
}

// Random Background Option
let backgroundOption = true;

// Variable to Control background interval
let backgroundInterval;

// Toggle Spin Class On Icon
document.querySelector(".toggle-setting .fa-gear").onclick = function() {
    // Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

    // Toggle Class open on main Setting Box 
    document.querySelector(".setting-box").classList.toggle("open");
};

// Switch Colors

const colorLi = document.querySelectorAll(".color-list li");

//Loop On All List Itmes
colorLi.forEach(li => {

    // click On Every List Items
    li.addEventListener("click", (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty("--main--color", e.target.dataset.color);

        // Set Color On Local Stroage
        localStorage.setItem("color-option", e.target.dataset.color);

        // Remove Active Class From All Children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add  Active Class on Self
        e.target.classList.add("active")
    });
});

// Switch Random Background Option

const randomBackgroundElement = document.querySelectorAll(".random-background span");

//Loop On All List Spans
randomBackgroundElement.forEach(span => {

    // click On Every List Items
    span.addEventListener("click", (e) => {

        // Remove Active Class From All Children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add  Active Class on Self
        e.target.classList.add("active");

        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            randomImg();
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
        }
    });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Arrey Of Imgs 
let imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.png", "5.png", "6.png", "7.png"]


// Function to Random Img
function randomImg () {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {

            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgArray.length);
        
            // Change Background Image Url
            landingPage.style.backgroundImage = 'url("img/' + imgArray[randomNumber] + '")';
        
        }, 1000);
    }
}
