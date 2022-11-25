// CREATED BY ODELOLA
// Get All DOM Elements
const html = document.querySelector('html');
const universalCursor = document.querySelector('#universal-cursor');
const morphingCursor = document.querySelector('#morphing-cursor');
const cursorSquares = document.querySelectorAll('.cursor-square');
const cursorSquareCircle = document.querySelector('.cursor-square-circle');
// Custom Cursor Functionality
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    universalCursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    morphingCursor.style.left = x + 'px';
    morphingCursor.style.top = y + 'px';
});
// Declare an oobject that contains all state of the custom cursor
const clipPaths = {
    one: "polygon(50% 0%, 0% 100%, 100% 100%)",
    two: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    three: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    four: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
}
// Get all square sides
const allSquares = [...cursorSquares]
// Map over all the square side to make the following state of the cursor to correspond
allSquares.map(item => {
    item.addEventListener("mouseover", (e) => {
        morphingCursor.style.clipPath = clipPaths[item.classList["1"].replace("square-", "")]
        item.removeEventListener("mouseover", (e) => { })
    })  
    
})
// Implement the inner square functionality
cursorSquareCircle.addEventListener("mouseover", (e) => {
    html.classList.remove("hidden-cursor");
    morphingCursor.style.display = "none";
})
cursorSquareCircle.addEventListener("mouseleave", (e) => {
    html.classList.add("hidden-cursor");
    morphingCursor.style.display = "initial";
})