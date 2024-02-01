// Almost all of this code is AI generated. See README.txt for more information


console.log("Hello World");
// Function to select a random text for the paragraph
function setRandomParagraphText() {
   var texts = [
      "Make and eat a healthy snack",
      "Take some time to excercise",
      "Spend some time cleaning one to two rooms in your current space",
      "Find some clothes or sheets you need to wash and wash them.",
      "Take a short nap."
   ];
  var images = [
    "SVG/healthySnack.svg", // Make and eat a healthy snack
    "SVG/exerciseTime.svg", // Take some time to excercise"
    "SVG/cleanRoom.svg", // Spend some time cleaning one to two rooms in your current space"
    "SVG/washClothes.svg", // Find some clothes or sheets you need to wash and wash them."
    "SVG/takeNap.svg" // Take a short nap.
  ]
   var index = Math.floor(Math.random() * texts.length);
   var selectedText = texts[index];
   var selectedImage = images[index];
   document.getElementById('random-text').textContent = selectedText;
  console.log("Text Loaded");

  // image source
  document.getElementById('random-image').src = selectedImage;
  document.getElementById('random-image').alt = selectedText; //alt text
  console.log("Image Loaded Successfully");
  
}
// Call element on blurb click
document.getElementById('blurb').onclick = setRandomParagraphText;
// also on reload
window.onload = setRandomParagraphText;