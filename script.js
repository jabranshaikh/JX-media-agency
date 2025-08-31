
let current = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    if (i === index) t.classList.add("active");
  });
}

setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 4000);
