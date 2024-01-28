var navbar = document.getElementById("navbar");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 1500,
  viewFactor: 0.5,
});

ScrollReveal().reveal(".header-img1", { origin: "top" });
ScrollReveal().reveal(".header-img2,.about-img,.p2,.p4", { origin: "right" });
ScrollReveal().reveal(
  ".header-greet,.header-about,.header-intro,.features-header,.features-details",
  {
    origin: "top",
  }
);
ScrollReveal().reveal(".learnMore,.about-details,.p1,.p3,.contact-box", {
  origin: "left",
});

ScrollReveal().reveal(".features-img,input", {
  scale: 0.7,
  duration: 1500,
  interval: 200,
});
document
  .getElementById("download")
  .addEventListener("click", function () {
    var fileUrl = "./Santulan-v1-release.apk";
    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Santulan-v1-release.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });