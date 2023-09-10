$('a[href^="#"]').on('click', function(event) {
  event.preventDefault();
  const target = $(this.getAttribute('href'));
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000); // Adjust the animation duration as needed
  }
});

<script>
    // Get references to the "About Me" link and the "About Me" section
    const aboutLink = document.getElementById("about-link");
    const aboutSection = document.querySelector(".about-me");

    // Add a click event listener to the "About Me" link
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior
      aboutSection.style.display = "block"; // Show the "About Me" section
    });
  </script>
