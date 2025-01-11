document.querySelectorAll('.category').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.category.active').classList.remove('active');
      button.classList.add('active');
    });
  });
// Select all courses
const courses = document.querySelectorAll(".course");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");

// Function to handle course click
courses.forEach((course) => {
  course.addEventListener("click", () => {
    // Show pop-up
    popup.classList.add("visible");

    // Redirect to new page after 2 seconds
    setTimeout(() => {
      const url = course.getAttribute("data-url");
      window.location.href = url; // Opens the enrollment page
    }, 2000); // Adjust the timeout as needed
  });
});

// Close pop-up manually
closePopupButton.addEventListener("click", () => {
  popup.classList.remove("visible");
});
// Select all navigation menu items
const navItems = document.querySelectorAll("nav ul li");

// Select all sections
const sections = document.querySelectorAll(".courses");

// Handle navigation clicks
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all nav items
    navItems.forEach((nav) => nav.classList.remove("active"));

    // Add active class to the clicked item
    item.classList.add("active");

    // Get the target section ID from data-section attribute
    const sectionId = item.getAttribute("data-section");

    // Hide all sections
    sections.forEach((section) => section.classList.add("hidden"));

    // Show the targeted section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.remove("hidden");
    }
  });
});



closePopupButton.addEventListener("click", () => {
  popup.classList.remove("visible");
});

 