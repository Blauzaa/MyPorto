// script.js

// Smooth scrolling for navigation links
// --- Smooth Scrolling ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    // If burger menu is active, close it on link click
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      burgerMenu.classList.remove("toggle"); // Assuming 'toggle' class for burger animation
    }
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// --- Burger Menu Functionality ---
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

if (burgerMenu && menu) {
  burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    burgerMenu.classList.toggle("toggle"); // For 'X' icon animation if you have CSS for it
  });
}

// Intersection Observer untuk Animasi Scroll pada About Section
const aboutSection = document.getElementById("about");
if (aboutSection) {
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          aboutObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  aboutObserver.observe(aboutSection);
}
// Intersection Observer untuk Animasi Scroll pada Projects Section
const projectsSection = document.getElementById("projects");
if (projectsSection) {
  const projectsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          projectsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  projectsObserver.observe(projectsSection);
}
// Intersection Observer untuk Animasi Scroll pada Contact Section
const contactSection = document.getElementById("contact");
if (contactSection) {
  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          contactObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  contactObserver.observe(contactSection);
}
// Intersection Observer untuk Animasi Scroll pada Experience Section
const experienceSection = document.getElementById("experience");
if (experienceSection) {
  const experienceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          experienceObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  experienceObserver.observe(experienceSection);
}
// Intersection Observer untuk Animasi Scroll pada Education Section
const educationSection = document.getElementById("education");
if (educationSection) {
  const educationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          educationObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  educationObserver.observe(educationSection);
}
// Intersection Observer untuk Animasi Scroll pada Resume Section
const resumeSection = document.getElementById("resume");
if (resumeSection) {
  const resumeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          resumeObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  resumeObserver.observe(resumeSection);
}
// Intersection Observer untuk Animasi Scroll pada Services Section
const servicesSection = document.getElementById("services");
if (servicesSection) {
  const servicesObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          servicesObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  servicesObserver.observe(servicesSection);
}
const testimonialsSection = document.getElementById("testimonials");
// Pastikan testimonialsSection tidak null sebelum meng-observe
if (testimonialsSection) {
  // <--- TAMBAHKAN PENGECEKAN INI
  const testimonialsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          testimonialsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  testimonialsObserver.observe(testimonialsSection);
}

// Intersection Observer untuk Animasi Scroll pada Featured Gallery Section <--- BAGIAN BARU
const featuredGallerySection = document.getElementById("featured-gallery");
if (featuredGallerySection) {
  // Selalu baik untuk memeriksa apakah elemen ada
  const featuredGalleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          featuredGalleryObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, // Anda bisa sesuaikan threshold jika perlu
    }
  );
  featuredGalleryObserver.observe(featuredGallerySection);
}

// Intersection Observer untuk Animasi Scroll pada Client Logos Section <--- BAGIAN BARU
const clientLogosSection = document.getElementById("client-logos");
if (clientLogosSection) {
  const clientLogosObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          clientLogosObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, // Picu animasi saat 15% section terlihat
    }
  );
  clientLogosObserver.observe(clientLogosSection);
}

// Intersection Observer untuk Animasi Scroll pada New Services Showcase Section <--- BAGIAN BARU
const servicesShowcaseSection = document.getElementById("services-showcase");
if (servicesShowcaseSection) {
  const servicesShowcaseObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          servicesShowcaseObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Picu animasi saat 10% section terlihat
    }
  );
  servicesShowcaseObserver.observe(servicesShowcaseSection);
}

const myJourneySection = document.getElementById("my-journey");
if (myJourneySection) {
  const myJourneyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          myJourneyObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Picu animasi saat 10% section terlihat
    }
  );
  myJourneyObserver.observe(myJourneySection);
}

// Intersection Observer untuk Animasi Scroll pada Blog Section <--- BAGIAN BARU
const blogSection = document.getElementById("blog");
if (blogSection) {
  const blogObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          blogObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Picu animasi saat 10% section terlihat
    }
  );
  blogObserver.observe(blogSection);
}

// --- Typing Animation for Hero Section ---
document.addEventListener("DOMContentLoaded", function () {
  const typedTextSpan = document.getElementById("typed-text");
  // Anda bisa menambahkan lebih banyak kata/frasa di sini
  const textArray = [
    "Software Developer.",
    "UI/UX Enthusiast.",
    "Problem Solver.",
    "Tech Explorer.",
    "Creative Thinker.",
  ];
  const typingDelay = 120; // Kecepatan mengetik (ms)
  const erasingDelay = 70; // Kecepatan menghapus (ms)
  const newTextDelay = 2000; // Jeda sebelum mengetik teks baru (ms)
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      // Selesai mengetik satu frasa
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      // Selesai menghapus
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0; // Kembali ke awal array
      setTimeout(type, typingDelay + 500); // Jeda sedikit sebelum mengetik kata baru
    }
  }

  // Mulai animasi jika elemen ada
  if (typedTextSpan) {
    setTimeout(type, newTextDelay / 2); // Mulai animasi setelah jeda awal
  }
});
// Kode ini tidak diperlukan
$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});
