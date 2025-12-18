const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('active');


  if (navBar.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

document.querySelectorAll(".nav-bar a").forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  twitter: "https://x.com/",
  tiktok: "https://www.tiktok.com/"
};

Object.keys(socialLinks).forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", () => {
      window.location.href = socialLinks[id];
    });
  }
});
