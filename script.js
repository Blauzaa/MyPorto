// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Intersection Observer untuk Animasi Scroll pada About Section
const aboutSection = document.getElementById("about");
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

// Intersection Observer untuk Animasi Scroll pada Projects Section
const projectsSection = document.getElementById("projects");
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

// Intersection Observer untuk Animasi Scroll pada Contact Section
const contactSection = document.getElementById("contact");
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

// Intersection Observer untuk Animasi Scroll pada Experience Section
const experienceSection = document.getElementById("experience");
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

// Intersection Observer untuk Animasi Scroll pada Education Section
const educationSection = document.getElementById("education");
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

// Intersection Observer untuk Animasi Scroll pada Resume Section
const resumeSection = document.getElementById("resume");
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

// Intersection Observer untuk Animasi Scroll pada Services Section
const servicesSection = document.getElementById("services");
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

// Kode ini tidak diperlukan
$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});
