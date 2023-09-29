console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');
const heightOfWindow = window.innerHeight;
const heightOfWebPage = document.body.clientHeight;
let currentYPosition = 0;
let progress = 0;

progressBar.style.width =
  Math.floor((heightOfWindow / heightOfWebPage) * 100) + "%";

addEventListener("scroll", (event) => {
  calculateScrollPercentage(window.scrollY);
  progressBar.style.width = scrollPercentage + "%";
});
function calculateScrollPercentage(currentYPosition) {
  console.clear();
  progress = (heightOfWindow + currentYPosition) / heightOfWebPage;
  scrollPercentage = Math.round(progress * 100);

  console.log(
    "The current Y position on the window is",
    currentYPosition,
    "pixels \nthe inner height is",
    heightOfWindow,
    "pixels \nand the height of the webpage is",
    heightOfWebPage,
    "pixels. \nthe progress is therefore",
    scrollPercentage,
    "%"
  );
  return scrollPercentage;
}
