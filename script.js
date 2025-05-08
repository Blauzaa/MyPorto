// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Intersection Observer untuk Animasi Scroll pada About Section
  const aboutSection = document.getElementById('about');
  const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        aboutObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  aboutObserver.observe(aboutSection);
  
  // Intersection Observer untuk Animasi Scroll pada Projects Section
  const projectsSection = document.getElementById('projects');
  const projectsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        projectsObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  projectsObserver.observe(projectsSection);
  
  // Intersection Observer untuk Animasi Scroll pada Contact Section
  const contactSection = document.getElementById('contact');
  const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        contactObserver.unobserve(entry.target);
      }
    });
  }, {
      threshold: 0.2
    });
    contactObserver.observe(contactSection);
    
    // Intersection Observer untuk Animasi Scroll pada Experience Section
    const experienceSection = document.getElementById('experience');
    const experienceObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          experienceObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    experienceObserver.observe(experienceSection);
    
    // Intersection Observer untuk Animasi Scroll pada Education Section
    const educationSection = document.getElementById('education');
    const educationObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          educationObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    educationObserver.observe(educationSection);
    
    // Intersection Observer untuk Animasi Scroll pada Resume Section
    const resumeSection = document.getElementById('resume');
    const resumeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          resumeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    resumeObserver.observe(resumeSection);
    
    // Intersection Observer untuk Animasi Scroll pada Services Section
    const servicesSection = document.getElementById('services');
    const servicesObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          servicesObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    servicesObserver.observe(servicesSection);
    
 // Intersection Observer untuk Animasi Scroll pada Testimonials Section
const testimonialsSection = document.getElementById('testimonials');
const testimonialsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      testimonialsObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});
testimonialsObserver.observe(testimonialsSection);

// Kode ini tidak diperlukan
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );