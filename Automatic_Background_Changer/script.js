//########################## Create Web Structure By using JavaScript ##############################

let div = document.createElement("div");
div.style.width = "100vw";
div.style.height = "100vh";
div.style.textAlign = "center";

const heading = document.createElement("h1");
div.appendChild(heading);
heading.appendChild(
  document.createTextNode("Automatic Background Replacement")
);

const btn1 = document.createElement("button");
div.appendChild(btn1);
btn1.appendChild(document.createTextNode("Start"));
btn1.style.width = "10vw";
btn1.style.height = "4vw";
btn1.style.marginInlineEnd = "2vw";
btn1.style.border = "2px solid black";
btn1.style.borderRadius = "5px";

const btn2 = document.createElement("button");
div.appendChild(btn2);
btn2.appendChild(document.createTextNode("Stop"));
btn2.style.width = "10vw";
btn2.style.height = "4vw";
btn2.style.marginInlineStart = "2vw";
btn2.style.border = "2px solid black";
btn2.style.borderRadius = "5px";

const body = document.body;
body.appendChild(div);

// ******************************************** Logic ***********************************************

// const hexCode = () => {
//   let hex = "#";
//   const str = "0123456789ABCDEF";
//   for (let i = 0; i < 6; i++) {
//     let random = Math.floor(Math.random() * 16);
//     hex = hex + str[random];
//   }
//   return hex;
// };


function randomHexColor() {
  const randomValue = Math.floor(Math.random() * 0xffffff);  // Generate a random integer between 0 and 0xffffff
  const hexString = randomValue.toString(16);
  // Pad the string with leading zeros if necessary (optional)
  return hexString.padStart(6, '0');
}

let interval = '';
btn1.addEventListener('click', () => {
  if (!interval) {
    
    interval = setInterval(() => {
    let color1 = randomHexColor();
    let color2 = randomHexColor();
    body.style.background = `linear-gradient(to left top, #${color1}, #${color2})`}, 1000);
  }
})

btn2.addEventListener('click', () => {
  clearInterval(interval);
  interval = '';
})