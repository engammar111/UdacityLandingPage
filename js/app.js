/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const pageSections = document.querySelectorAll("section");

const pageFragment = document.createDocumentFragment();

const pageUL = document.querySelector("ul");

const BtnTopScroll = document.getElementById("BtnTopScroll");

const title = document.getElementById("landing-title");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//build the navbar
pageSections.forEach((section) => {
  //Get the NavBar data value from the section and store it
  const navBarData = section.getAttribute("data-nav");

  //Get Attribute ID value from the section and store it
  const AttributeId = section.getAttribute("id");

  //Create new List items
  const newList = document.createElement("li");

  //Create new Hyperlinks
  const hyperLinks = document.createElement("a");

  // Adding navbar style through classList method
  hyperLinks.classList.add("menu__link");

  // Getting the href attribute from the pageSections id
  hyperLinks.setAttribute("href", AttributeId);

  // Scroll to section on link-click
  // Adding event listener to the hyperLinks
  hyperLinks.addEventListener("click", (e) => {
    //Prevent the default behavior of the link
    e.preventDefault();
    //Smoothing the scroll to the section
    section.scrollIntoView({ behavior: "smooth" });
  });

  // Adding the name of pageSections from the navBarData variable
  const text = document.createTextNode(navBarData);

  // Appending the text to the hyperLinks
  hyperLinks.appendChild(text);

  // Appending the hyperLinks to the newList
  newList.appendChild(hyperLinks);

  // Appending the newList to the pageFragment
  pageFragment.appendChild(newList);
});

//Appending  PageFragment for better performance
pageUL.appendChild(pageFragment);

// Adding event listener to the Scroll
window.addEventListener("scroll", () => {
  //Check Sections On Screen & remove the active class
  const activeSection = document.getElementsByClassName("your-active-class")[0];

  if (activeSection !== undefined) {
    activeSection.classList.remove("your-active-class");
  }

  // Check what Section On Screen & remove the navBar class from the nav-bar
  const ActiveNav = document.getElementsByClassName("navBarActive")[0];
  //Checking the sections on screen
  if (ActiveNav !== undefined) {
    //Removing the navBarActive class from the nav-bar
    ActiveNav.classList.remove("navBarActive");
  }

  // Set pageSections as active class
  pageSections.forEach((section) => {
    const react = section.getBoundingClientRect();

    if (react.top >= -40 && react.top < 400) {
      section.classList.add("your-active-class");

      // Set navBar as active class
      const activeList = document.querySelectorAll(`a[href='${section.id}']`)[0]
        .parentElement;

      activeList.classList.add("navBarActive");
    }
  });
});

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
