//header styling
document.getElementById("header").style.display = "flex";
document.getElementById("header").style.backgroundColor = "rgba(242, 242, 242, 0.9)";
document.getElementById("header").style.padding = "15px 15px";
document.getElementById("header").style.width = "100%";
document.getElementById("header").style.alignItems = "center";
document.getElementById("header").style.justifyContent = "space-between";
document.getElementById("header").style.color = "#333";
document.getElementById("header").style.position = "sticky";
document.getElementById("header").style.top = "0";
document.getElementById("header").style.marginTop = "30px";
document.getElementById("header").style.marginBottom = "80px";
document.getElementById("header").style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.05)";
document.getElementById("header").style.borderRadius = "10px";
document.getElementById("header").style.gap = "10px";

//All text with shadow
document.querySelector("body").style.textShadow = "0.5px 0.5px 1px grey";

//About Us styling
let aboutUs = document.querySelectorAll("h2");
console.log(aboutUs);
aboutUs[0].style.textShadow = "2px 2px 5px white";

//Burger Icon Styling
document.querySelector(".burger-icon").style.color = "grey";
console.log(querySelector(".burger-icon"));

// Add to cart addEventListener
// document.querySelectorAll(".add-to-cart").forEach(button => {
//     button.addEventListener("click", () => {
//         alert("Item added to cart!");
//     });
// });

