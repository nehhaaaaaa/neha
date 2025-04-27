const pages = document.querySelectorAll(".container");

function showPage(pageId) {
  if (!document.getElementById(pageId)) {
    console.error(`Page ID "${pageId}" not found.`);
    return;
  }

  pages.forEach(page => {
    page.classList.add("hidden");
    page.style.display = "none";
  });

  const activePage = document.getElementById(pageId);
  activePage.classList.remove("hidden");
  activePage.style.display = "block";

  activePage.style.animation = "fadeIn 0.8s ease forwards";
}

function toggleNav() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('show');
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Thank you for contacting us! We will get back to you shortly.");

  this.reset();
});


